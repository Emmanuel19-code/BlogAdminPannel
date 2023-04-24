'use client'
import Link from "next/link"
import { useState } from "react"

const RegisterPage = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const [image,setImage] = useState()
  const [errorMessage,setErrorMessage] = useState()
  const data ={
     name:name,
     email:email,
     username:username,
     password:password,
     image:image
  }
  const submitInfo = async() =>{
     const response = await fetch("http://localhost:5000/user/register",{
       method:"POST",
       body:JSON.stringify(data),
           headers: {
        "Content-Type": "application/json",
        },
     })
      const result = await response.json()
      if(response.ok){
         alert("hurray")
      }else{

                setErrorMessage(result.msg)
      }
  }
  return (
    <div className='flex justify-center items-center h-screen bg-slate-100 flex-col'>
         <h1 className="font-bold text-2xl mb-1">REGISTER</h1>
            <div className="bg-white p-5 shadow-lg flex flex-col md:w-96">
             <input type="text" placeholder="Name" 
             className="m-2 outline-none border-b p-2"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
             />
             <input type="text" placeholder="email" 
             className="m-2 outline-none border-b p-2"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
             />
             <input type="text" placeholder="username" 
             className="m-2 outline-none border-b p-2"
             value={username}
             onChange={(e)=>{setUsername(e.target.value)}}
             />
             <input type="text" placeholder="password" 
             className="m-2 outline-none border-b p-2"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
             />
             <div className="m-2">
                  <label class="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Upload Profile Picture</label>
                  <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none" id="file_input" type="file"
                   name="image"
                   value={image}
                   onChange={(e)=>{setImage(e.target.value)}}
                  />
             </div>
             <button className="bg-blue-500 text-white font-bold p-1 rounded m-1 cursor-pointer"
              onClick={submitInfo}
             >
                Sign Up
             </button>
            <div>
                  <p className="text-red-400 text-center m-2">
                     {errorMessage}   
                  </p>
            </div>
                  <div>
                      <span className="">
                        Have an account ?
                        <Link href="/" className="m-1 font-bold hover:underline">Login</Link>
                     </span>
                  </div>
           </div>
     </div>
  )
}

export default RegisterPage