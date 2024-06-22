import type { ReactNode } from 'react';

interface CardProps {
    title: string;
    value: ReactNode;
    coinIcon?: boolean;
}

export function Card({ title, value, coinIcon }: CardProps) {
    return (
        <div className="rounded-[48px] p-[2px] bg-gradient-to-t from-[#4508df] to-transparent bg-[#4508df]/[0.32]">
            <div className='rounded-[48px] px-[14px] pt-[3px] pb-[3px] flex flex-col justify-center items-center relative bg-[#230c60]'>
                <p className="opacity-50 text-center leading-3 text-[11px] text-light">
                    {title}
                </p>
                <div className="flex items-center gap-1">
                    {coinIcon && (
                        <img src="/coin.svg" className="h-4 w-4" alt="coin" />
                    )}
                    <p className="text-center leading-6 text-base text-light">
                        {value}
                    </p>
                </div>
            </div>
        </div>
    );
}
