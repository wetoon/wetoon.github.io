"use client"

import Razer from "@component/fetch"

export default function Main({ searchParams }) {
    return (
        <Razer id={ searchParams.id } />
    )
}
