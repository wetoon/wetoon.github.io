"use client"

import Image from "next/image"
import type { Metadata } from "next"

export const metadata:Metadata = {
    title: 'Loading',
    description: 'loading content',
}

export default function Loading() {
    return (
        <Image
            className="translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2 block"
            src="/loading.svg"
            alt="loading"
            height="100"
            width="160"
        />
    )
}
