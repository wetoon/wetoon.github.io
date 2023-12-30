"use client"

import Razer from "@component/fetch"
import { useSearchParams } from "next/navigation"

export default function Main() {
    const params = useSearchParams();
    const megadata = {
         id: params.get('id'),
         query: params.get('q') 
    }
    return (
        <Razer id={ megadata } />
    )
}
