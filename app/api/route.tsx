import connectDatabase from "@lib/connect.database"
import { NextResponse } from "next/server"

export async function GET() {
    await connectDatabase();
    return NextResponse.json({ code:200 })
}
