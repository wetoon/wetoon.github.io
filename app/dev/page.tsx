"use client"

import Razer from "@component/fetch"

export default function Main({ searchParams }:{ searchParams:{ id:string } }) {
    return (
        <Razer id={ searchParams.id } />
    )
}
