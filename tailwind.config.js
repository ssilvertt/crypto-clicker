/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            strokeGradient: {
                'gradient': ['linear-gradient(to right, rgb(69, 8, 223), rgb(17, 0, 60))'],
            },
            colors: {
                main: '#120f24',
                secondary: '#26214a',
                nav: '#16044a',
                light: '#D8D5F4',
                active: '#d575d7'
                
            },
            fontFamily: {
                
                helvetica: ['Helvetia Neue', 'sans-serif'],
            },
            fontSize: {
                navicon: ['12px', '12px']
            },
            letterSpacing: {
                name: '-0.33px',
                stats: '0.21px',
            }
        },
    },
    plugins: [],
};
