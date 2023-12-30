"use client"

import Razer from "@component/fetch"
import { useSearchParams } from "next/navigation"

export default function Main() {
    const params = useSearchParams();
    return (
        <Razer id={ params.get('id') } />
    )
}
