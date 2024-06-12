export function AxeIcon({color} : {color:string}){
    return (
        <svg
            className={`w-[24px] h-[24px] stroke-current${color}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
                id="Path"
                d="M13 9L20.38 16.41C21.2 17.23 21.2 18.56 20.38 19.38C19.55 20.2 18.23 20.2 17.4 19.38L10 12"
                stroke="currentColor"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <path
                id="Path"
                d="M3.34 12.34C3.04 12.04 2.91 11.61 2.99 11.2C3.08 10.79 3.37 10.45 3.76 10.29L7 9L13 3L16 6L10 12L8.7 15.24C8.54 15.62 8.2 15.91 7.79 16C7.38 16.08 6.95 15.95 6.66 15.65L3.34 12.34Z"
                stroke="currentColor"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
            />
        </svg>
    );
}