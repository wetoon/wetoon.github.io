import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET( request:NextRequest ) {
    return NextResponse.json( { code:200,message:"GET" } );
}

export async function POST( request:NextRequest ) {
    return NextResponse.json( { code:200,message:"POST" } );
}
