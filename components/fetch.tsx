import axios from "axios"

async function fetchMain( __id:any ) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const metadata = response.data;
    return __id ? metadata.find(({ id }:{ id:string }) => ( id == __id )) : metadata;
}

export default async function Main( props:any ) {
    const mega = await fetchMain( props.id );
    return (
        <pre>{ JSON.stringify( mega, null, 4 ) }</pre>
    )
}
