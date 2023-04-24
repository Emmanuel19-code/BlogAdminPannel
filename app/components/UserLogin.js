'use client'

import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';

const UserLogin = () => {
   const router = useRouter();
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
   const [errorMessage,setErrorMessage] = useState()
  const data ={
        username:username,
        password:password
      }
 const submitInfo = async() =>{
     const response = await fetch("http://localhost:5000/user/login",{
       method:"POST",
       body:JSON.stringify(data),
           headers: {
        "Content-Type": "application/json",
        },
     })
      const result = await response.json()
      if(response.ok){
         router.push("/edit/posts")
      }else{
         setErrorMessage(result.msg)
      }
  }
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100 flex-col">
       <h1 className="font-bold text-2xl mb-1">LOGIN</h1>
        <div className="bg-white p-5 shadow-lg flex flex-col md:w-96">
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
             <button className="bg-blue-500 text-white font-bold p-1 rounded m-1 cursor-pointer"
             onClick={submitInfo}
             >
                Login
             </button>
             <div>
                  <p className="text-red-400 text-center m-2">
                     {errorMessage}   
                  </p>
            </div>
                  <div>
                        <span className="">
                Don't you have an account ?
                <Link href="/register" className="m-1 font-bold hover:underline">Register here </Link>
             </span>
                  </div>
        </div>
        
    </div>
  )
}

export default UserLogin