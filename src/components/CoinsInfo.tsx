import { useClickerStore } from '../store/clicker-store.ts';
import { ProgressBar } from './ProgressBar.tsx';
import { ProgressStats } from './ProgressStats.tsx';
import { Card } from './StatCard.tsx';

export function CoinsInfo() {
    const { count } = useClickerStore();
    
    return (
        <div className="flex flex-col justify-start items-center mt-4 w-full">
            <div className="flex flex-row justify-around items-start w-full">
                <Card title="Earning per Click" value="+1" />
                <Card title="Coins to Level Up" value="50K" coinIcon />
                <Card title="Coins for House" value="100K" coinIcon />
            </div>
            <div className="flex flex-col items-start justify-start mt-7 ">
                <div className="flex flex-row justify-center items-start relative gap-4 ">
                    <img src="/coin.svg" className="h-10 w-10" alt="coin" />
                    <div className="text-center font-bold leading-10 text-[40px] text-light">
                        {(count).toLocaleString('ru-RU')}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center mt-3 gap-1 w-full">
                <ProgressStats />
                <ProgressBar value="27" />
            </div>
        </div>
    );
}
