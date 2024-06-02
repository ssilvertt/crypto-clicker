/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#120f24',
                secondary: '#26214a',
                active: '#e7ba4d',
                nav: '#1c1736',
                muted: '#968FCC',
                
            },
            fontFamily: {
                space: ['Space Grotesk', 'sans-serif'],
            },
            fontSize: {
                name: ['22px', '27.5px'],
                level: ['16px', '24px'],
                button: ['14px', '21px'],
                stats: ['11px', '21px'],
                statsnum: ['16px', '21px'],
                balance: ['48px', '27.5px']
            },
            letterSpacing: {
                name: '-0.33px',
                stats: '0.21px',
            }
        },
    },
    plugins: [],
};
