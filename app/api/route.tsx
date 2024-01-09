
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import connect from "@lib/connect.database"
import Collection from "@component/collection"

export async function GET() {
    await connect();
    const result = await Collection.member.find({});
    return NextResponse.json( result || { code:'404', message:'Data not found!' } )
}

export async function POST( request:NextRequest ) {
    await connect();
    const metadata = await request.json();
    await Collection.member.create( metadata );
    return NextResponse.json( metadata, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    })
}
