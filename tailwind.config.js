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
                boost: '#7561FA',
                progress: '#382E6B'
                
            },
            fontFamily: {
                space: ['Space Grotesk', 'sans-serif'],
                jakarta: ['Plus Jakarta Sans', 'sans-serif'],
            },
            fontSize: {
                name: ['22px', '27.5px'],
                level: ['16px', '24px'],
                button: ['14px', '21px'],
                stats: ['11px', '21px'],
                statsnum: ['16px', '21px'],
                balance: ['32px', '18.33px']
            },
            letterSpacing: {
                name: '-0.33px',
                stats: '0.21px',
            }
        },
    },
    plugins: [],
};
