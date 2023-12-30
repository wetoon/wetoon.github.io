"use client"

import Razer from "@component/fetch"

export default function Main({ searchParams }:{ searchParams:{ id:string } }) {
    const id = String( searchParams.id );
    return (
        <Razer props={ id } />
    )
}
