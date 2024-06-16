export function ProgressStats(){
    return (
        <div className="flex flex-row w-full justify-between gap-64">
            <div className="flex gap-0 items-center">
                <p className="leading-6 text-base text-light">
                    Cadet
                </p>
                <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 4.5L10 8.5L6 12.5"
                        stroke="#D8D5F4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className="flex gap-2 items-center">
                <p className="opacity-40 text-center leading-6 text-base text-light">
                    Level
                </p>
                <p className="text-center leading-6 text-base text-light">
                    2/10
                </p>
            </div>
        </div>
    )
}