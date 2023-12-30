import axios from "axios"

async function fetchMain( __id:any, query:any ) {
    try {
        const response = await axios.get( 'https://jsonplaceholder.typicode.com/' + query ? query : 'users' );
        const metadata = response.data;
        return __id ? metadata.find(({ id }:{ id:string }) => ( id == __id )) : metadata;
    } catch (e) { return { code:404, message:"not found!" } }
}

export default async function Main( props:any ) {
    const mega = await fetchMain( props.id, props.query );
    return (
        <pre>{ JSON.stringify( mega, null, 4 ) }</pre>
    )
}
