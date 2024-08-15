/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Light_pink: "hsl(275, 100%, 97%)",
                c_Grayish_purple: "hsl(292, 16%, 49%)",
                c_Dark_purple: "hsl(292, 42%, 14%)",
            },
            fontFamily: {
                work: ["Work Sans", "sans-serif"]
            }
        },
    },
    plugins: [],
}

