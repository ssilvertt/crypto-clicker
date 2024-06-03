export function ProgressBar({ progress }: { progress: number }) {
    return (
        <div className="w-[100%] bg-progress rounded-full h-2 mx-auto">
            <div
                className="bg-boost h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}
