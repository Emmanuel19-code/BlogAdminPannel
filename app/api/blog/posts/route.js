import { NextResponse } from "next/server"

export async function POST(request) {
    const {title,image,information,category} =await request.json()
     if(!title || !image || !information || !category){
        return NextResponse.json({
            msg:"Please a field can't be empty"
        })
     }
    return NextResponse.json({
        title:title,
        image:image,
        information:information,
        category:category
    })
}
