import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Wetoon',
        short_name: 'Wetoon',
        description: 'Wetoon Application',
        start_url: '/',
        display: 'fullscreen',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [{
            src: '/favicon.png',
            sizes: 'any',
            type: 'image/png'
        }]
    }
}
