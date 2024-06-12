export function PlanetIcon({color} : {color: string}){
    return (
        <svg
            className={`w-6 h-6 stroke-current${color}`}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
                id="Path"
                d="M17.24 12.44C19.34 14.4 20.49 16.11 20.08 16.93C19.39 18.27 14.78 16.7 9.76 13.42C4.75 10.14 1.23 6.39 1.91 5.05C2.34 4.22 4.6 4.65 7.23 5.79"
                stroke="currentColor"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <circle
                id="Oval"
                cx="11.000000"
                cy="11.000000"
                r="6.416666"
                stroke="currentColor"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
            />
        </svg>
    );
}