'use client'
import Image from "next/image"
import Link from "next/link"
import {AiOutlineMenu} from "react-icons/ai"
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter()
   const SignOut = async() =>{
     const response = await fetch("http://localhost:5000/user/logOut",{
       method:"POST",
       //body:JSON.stringify(data),
       //    headers: {
       // "Content-Type": "application/json",
       // },
     })
      const result = await response.json()
      if(response.ok){
         router.push("/")
      }else{
         setErrorMessage(result.msg)
      }
   }
  return (
    <div className="p-2 border-b flex items-center sticky top-0 bg-white justify-between cursor-pointer">
       <div className="flex md:hidden ">
            <AiOutlineMenu
             className="text-lg"
            />
       </div>
       <div className="hidden md:flex items-center">
           <div className="flex items-center">
             <p className="bg-blue-500 p-1 m-2 rounded-full text-white">
                <Link href="/edit/write">Write</Link>
             </p>
            <p className="m-2">
                <Link href="/edit/posts">Posts</Link>
             </p>
             <p className="m-2">
               <Link href="/edit/your_uploads">Your Uploads</Link>
             </p>
             <p className="m-2">
               <Link href="/edit/draft">Drafts</Link>
             </p>
           </div>
        </div>
       <div className="flex items-center">
             <Image
              src=""
              width={40}
              height={40}
              className="bg-red-500 rounded-full"
              alt="Profile Picture"
             />
             <p className="m-2">Emmanuel</p>
             <p className="p-1 rounded bg-blue-700 text-white"
             onClick={SignOut}
             >
              LogOut
            </p>
        </div>
    </div>
  )
}

export default Navbar