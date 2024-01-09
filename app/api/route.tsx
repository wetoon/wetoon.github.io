import { NextResponse } from "next/server"
import connect from "@lib/connect.database"

export async function POST() {
    const message = await connect();
    return NextResponse.json( { message } )
}

export async function GET() {
    const message = await connect();
    return NextResponse.json( { message } )
}
