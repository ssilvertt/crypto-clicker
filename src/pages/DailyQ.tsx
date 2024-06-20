import { RewardCard } from '../components/RewardCard.tsx';

export function DailyQ() {
    return (
        <div className="flex flex-col space-y-4 items-center justify-start w-full">
            <div className="relative mt-8">
                <img src="/coin.svg" className="h-20 w-20" alt="coin" />
            </div>
            <div>
                <p className="text-4xl font-bold leading-10 text-center text-light">
                    Earn more coins
                </p>
            </div>
            <p className="w-full text-base leading-normal text-light">
                Daily reward
            </p>
            <div className="flex flex-col gap-y-1 w-full">
                <RewardCard
                    title="Daily Reward"
                    icon="/userIcon.svg"
                    coinAmount={5000}
                />
            </div>
            <p className="w-full text-base leading-normal text-light">
                Special tasks
            </p>
            <div className="flex flex-col gap-y-2 w-full relative">
                <div className="overflow-y-auto h-72 flex flex-col gap-y-2 no-scrollbar">
                    <RewardCard
                        title="Subscribe to the channel with project news"
                        icon="/telegramIcon.svg"
                        coinAmount={10000}
                    />
                    <RewardCard
                        title="Join our chat on Telegram"
                        icon="/messageIcon.svg"
                        coinAmount={10000}
                    />
                    <RewardCard
                        title="Subscribe to us on Twitter"
                        icon="/twitterIcon.svg"
                        coinAmount={15000}
                    />
                    <RewardCard
                        title="Join our chat on Telegram"
                        icon="/messageIcon.svg"
                        coinAmount={10000}
                    />
                    <RewardCard
                        title="Subscribe to us on Twitter"
                        icon="/twitterIcon.svg"
                        coinAmount={15000}
                    />
                </div>
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black pointer-events-none"></div>
            </div>
        
        </div>
    );
}
