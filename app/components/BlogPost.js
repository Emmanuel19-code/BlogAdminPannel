'use client'
import Image from 'next/image'
import Link from 'next/link';
import { AiTwotoneDelete } from "react-icons/ai";
import {AiOutlineEdit} from "react-icons/ai"

const BlogPost = ({id,name,time,title,description,image}) => {
    const deletePost = () =>{
        alert("hello")
    }
  return (
    <div className='flex justify-center p-2 m-4 cursor-pointer'>
        <div className=''>
            <Image
            src="/assets/Image2.png"
            width={700}
            height={200}
            alt='Info Picture'
            className='h-52'
            />
            <div className='flex items-center mt-4'>
                <Image
                src="/assets/Image1.jpg"
                width={50}
                height={50}
                className='w-14 h-14 rounded-full'
                />
                <div className='ml-2'>
                    <p className='font-bold'>Emma</p>
                    <p className='text-sm font-medium'>Posted 3 hour ago</p>
                </div>
                <div className='flex items-center ml-1'>
                      <div onClick={deletePost}>
                                 <AiTwotoneDelete
                        className='text-red-500 m-1'
                        />
                      </div>
                       
                    <Link href="/edit/updatepost">
                        <AiOutlineEdit
                            className='text-teal-500 m-1'
                        />
                    </Link>
                </div>
            </div>
            <h3 className='font-bold text-2xl mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
             </h3>
            <p className='md:w-96'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, deleniti doloribus a sint voluptate quas, modi eos repellat asperiores neque aperiam illum atque saepe numquam eligendi ex explicabo accusantium mollitia?
            </p>
        </div>
    </div>
  )
}

export default BlogPost