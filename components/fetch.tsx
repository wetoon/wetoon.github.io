import axios from "axios"

async function fetchMain() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
}

export default async function Main() {
    const mega = await fetchMain();
    return (
        <pre>{ JSON.stringify( mega, null, 4 ) }</pre>
    )
}