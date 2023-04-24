import mongoose from "mongoose";
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"

const userId=uuid().split('-')[0]
const userSchema = new mongoose.Schema({
    uniqueId:{
        type:String,
        required:true,
        default:userId
    },
    name:{
        type:String,
        required:[true,"please provide your name"]
    },
    username:{
        type:String,
        required:[true,"please provide your username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"please provide your email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please provide your password"],
        unique:true
    }
},{timestamps:true})


userSchema.pre("save",async function (){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

//comparing the function
userSchema.methods.comparePassword = async function (canditatePassword){
  const isMatch = await bcrypt.compare(canditatePassword,this.password)
  return isMatch
}

userSchema.methods.GenerateOTP = function (){
    let otp=""
      for(i=0;i<=3;i++){
       let rand= Math.floor(Math.random()*9)
       otp+=rand
      }
      return otp
}

userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this.uniqueId, name: this.username},
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRY,
    }
  )
}

const User = mongoose.model("User",userSchema)
export default User