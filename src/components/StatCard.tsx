import type { ReactNode } from 'react';

interface CardProps {
    title: string;
    value: ReactNode;
    coinIcon?: boolean;
}

export function Card({ title, value, coinIcon }: CardProps) {
    return (
        <div className="rounded-[48px] px-4 pt-2 pb-1 flex flex-col gap-0 justify-center items-center relative bg-[#4508df]/[0.32]">
            <small className="opacity-50 text-center leading-3 text-xs text-light">
                {title}
            </small>
            <div className="flex items-center gap-1">
                {coinIcon && (
                    <img src="/coin.svg" className="h-4 w-4" alt="coin" />
                )}
                <p className="text-center leading-6 text-base text-light">
                    {value}
                </p>
            </div>
        </div>
    );
}
