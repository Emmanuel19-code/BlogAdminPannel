import { NextResponse } from "next/server"

export async function POST(request) {
    const {name,email,username,password} =await request.json()
     if(!username || !password || !email || !name){
        return NextResponse.json({
            msg:"Please a field can't be empty"
        })
     }
    return NextResponse.json({
        name:name,
        email:email,
        username:username,
        password:password
    })
}
