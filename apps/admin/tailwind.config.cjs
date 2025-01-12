/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        colors: {
            main: {
                primary: '#0C3FC1',
                secondary: '#ECF0FF',
                tertiary: '#D7DCEB',
            },
            text: {
                primary: '#181818',
                secondary: '#6F6F80',
                tertiary: '#9E9EA3',
                quaternary: '#AAB2D0',
            },
            border: {
                primary: '#ECEEF5',
                secondary: '#F2F4F9',
            },
            background: {
                white: '#FBFCFE',
                gradient: 'linear-gradient(0deg, #194FDC 100%, #6E5ED9 100%)',
            }
        }
    },
    plugins: []
}
