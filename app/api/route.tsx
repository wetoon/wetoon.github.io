import { NextResponse } from "next/server"
import connect from "@lib/connect.database"
import type { NextRequest } from "next/server"

export async function POST( request:NextRequest ) {
    const NextRes = await request.json();
    const message = await connect();
    //const result = await Collection.member.find({});
    return NextResponse.json( { message, NextRes } )
}

export async function GET() {
    const message = await connect();
    //const result = await Collection.member.find({});
    return NextResponse.json( { message } )
}
