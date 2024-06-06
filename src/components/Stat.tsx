interface StatProps {
    text: string;
    value: string;
}

export function Stat({ text, value }: StatProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <img className="h-6 w-6 text-muted" src="/coinIcon.svg" alt="coin" />
            <div className="tracking-stats text-stats text-muted">{text}</div>
            <p className="tracking-stats text-statsnum text-white font-bold">{value}</p>
        </div>
    );
}
