import { NextResponse } from "next/server"

export async function POST(request) {
    const {numberOtp} =await request.json()
     if(!numberOtp || (numberOtp.length < 4)){
        return NextResponse.json({
            msg:"Please a field can't be empty"
        })
     }
    return NextResponse.json({
        numberOtp:numberOtp
    })
}
