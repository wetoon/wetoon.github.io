import connectDatabase from "@lib/connect.database"
import { NextResponse } from "next/server"

export async function GET() {
    const message = await connectDatabase();
    return NextResponse.json({ code:200, message })
}
