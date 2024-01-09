import axios from "axios"
import connectDatabase from "@lib/connect.database"

async function fetchMain( __id:any, query:any ) {
    try {
        const que = query ? query : 'users';
        const response = await axios.get( 'https://jsonplaceholder.typicode.com/' + que );
        const metadata = response.data;
        return __id ? metadata.find(({ id }:{ id:string }) => ( id == __id )) : metadata;
    } catch (e) { return { code:404, message:"not found!", axios:e } }
}

export default async function Main( { props }:{ props:any } ) {
    await connectDatabase();
    const mega = await fetchMain( props.id, props.query );
    return (
        <pre>{ JSON.stringify( mega, null, 4 ) }</pre>
    )
}
