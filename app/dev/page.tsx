"use client"

import Razer from "@component/fetch"
import { useSearchParams } from "next/navigation"

export default function Main() {
    return (
        <Razer id={ useSearchParams.get('id') } />
    )
}
