/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#1e1f25',
                secondary: '#282a2f',
                active: '#e7ba4d',
                inactive: '#4e4f50',
                inactivefont: '#8c8e93',
            },
            fontFamily: {
                mont: ['Montserrat', 'sans-serif'],
            },
            fontSize: {
                xxs: '0.625rem',
            },
        },
    },
    plugins: [],
}
