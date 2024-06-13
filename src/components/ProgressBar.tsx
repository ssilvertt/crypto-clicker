export function ProgressBar({ value }: { value: string }) {
    const bgGradient = `linear-gradient(270deg, rgb(213, 117, 215) 0%, rgb(111, 9, 137) ${value}%, rgb(69, 8, 223) 100%)`;
    
    return (
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
                className="h-full rounded-full"
                style={{
                    width: `${value}%`,
                    background: bgGradient,
                }}
            />
        </div>
    );
}