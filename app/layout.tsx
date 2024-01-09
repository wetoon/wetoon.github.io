import React from "react"
import "./tailwind.import.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"

const font = Poppins({
    weight: ['200','300','400','500','600','700'],
    subsets: ['latin']
});

export const metadata:Metadata = {
    title: 'Wetoon',
    description: 'Webtoon application',
}

export default function RootLayout({ children }:{ children:React.ReactNode }) {
    return (
        <html lang="en">
			<body
			    className={ font.className }>
			    { children }
			</body>
		</html>
    )
}
