
/** @type { import('tailwindcss').Config } */
export default {
    content: [
        "./index.html",
        "./src/**/*.tsx"
    ],
    theme: {
        extend: {
            fontFamily: {
                Assistant: "Assistant, sans-serif"
            },
            backgroundImage: {
                hero: "url('/assets/images/hero.webp')"
            },
            backgroundPosition: {
                "b-left": "-40px bottom"
            }
        }
    },
    plugins: []
}
