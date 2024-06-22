interface RewardCardProps {
    title: string;
    icon: string;
    text?: string;
    coinAmount?: number;
}

export function RewardCard({ title, icon, text, coinAmount }: RewardCardProps) {
    return (
        <div className="flex rounded-[16px] p-[2px] bg-gradient-to-t from-[#4508df] to-transparent to-100% items-center w-full bg-[#4508df]/[0.32]">
            <div className="rounded-[15px] px-4 py-3 flex gap-4 items-center relative w-full bg-[#220c5e]">
                <img src={icon} alt="icon" />
                <div className="flex flex-col items-start flex-1 relative w-full">
                    <p className="font-bold leading-6 text-base text-light">
                        {title}
                    </p>
                    <div className="flex gap-1 justify-center items-center relative">
                        <img src="/coin.svg" alt="icon" />
                        <p className="text-center leading-6 text-base text-light">
                            {coinAmount ? `+ ${(coinAmount).toLocaleString('ru-RU')} coins` : text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
