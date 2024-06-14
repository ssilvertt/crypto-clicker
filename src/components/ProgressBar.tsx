export function ProgressBar({ value }: { value: string }) {
    const gradient = `repeating-linear-gradient(270.00deg, rgb(213, 117, 215), rgb(111, 9, 137) 50%, rgb(69, 8, 223) 100%)`;
    
    return (
        <div className="w-[100%] bg-[#373447] rounded-[10px] h-3 mx-auto relative">
            <div
                className="absolute h-3 rounded-[10px] transition-all duration-500"
                style={{
                    width: `${value}%`,
                    background: gradient,
                }}
            ></div>
        </div>
    );
}