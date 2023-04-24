import User from "@/app/models/userSchema"
import { NextResponse } from "next/server"

export async function POST(request) {
    const {username,password} =await request.json()
     if(!username || !password){
        return NextResponse.json({
            msg:"Please a field can't be empty"
        })
     }
     const userFound =await User.findOne({username})
      if(!userFound){
        console.log("not found");
        return NextResponse.json({
            msg:"User is not found"
        })
      }
    return NextResponse.json({
        username:username,
        password:password
    })
}
