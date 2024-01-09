import { NextResponse } from "next/server"
import connect from "@lib/connect.database"
import type { NextRequest } from "next/server"

export async function POST() {
    const message = await connect();
    return NextResponse.json( { message } )
}

export async function GET() {
    const message = await connect();
    return NextResponse.json( { message } )
}
