import axios from "axios"

async function fetchMain( id:any ) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data.find(( v ) => ( v.id == id ))
}

export default async function Main({ props }:{ props:{ id:string } }) {
    const mega = await fetchMain( props.id );
    return (
        <pre>{ JSON.stringify( mega, null, 4 ) }</pre>
    )
}