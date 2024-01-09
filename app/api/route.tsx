
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import connect, { Collection } from "@lib/connect.database"

export async function GET() {
    await connect();
    const result = await Collection.member.find({});
    return NextResponse.json( result )
}

export async function POST( request:NextRequest ) {
    await connect();
    const metadata = await request.json();
    await Collection.member.create( metadata );
    return NextResponse.json( metadata )
}
