import axios from "axios"

async function fetchMain( __id:any ) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data.find(({ id }):{ id:string } => ( id == __id ))
}

export default async function Main({ props }:{ props:{ id:string } }) {
    const mega = await fetchMain( props.id );
    return (
        <pre>{ JSON.stringify( mega, null, 4 ) }</pre>
    )
}