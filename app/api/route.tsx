
import { NextResponse } from "next/server"
import connect from "@lib/connect.database"
//import Collection from "@component/collection"

export async function GET() {
    const message = await connect();
    //const result = await Collection.member.find({});
    return NextResponse.json( { message } )
}


export async function POST( request:Request ) {
    //await connect();
    const metadata = await request.json();
    //await Collection.member.create( metadata );
    return NextResponse.json( metadata )
}
