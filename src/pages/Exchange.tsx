import { BottomButton } from '../components/BottomButton.tsx';
import { PlayButton } from '../components/PlayButton.tsx';
import { ProgressBar } from '../components/ProgressBar.tsx';
import { Stats } from '../components/Stats.tsx';
import { UserProfile } from '../components/UserProfile.tsx';
import { useClickerStore } from '../store/clicker-store.ts';

export function Exchange() {
    const { count } = useClickerStore();

    return (
        <div className="flex flex-col text-white">
            <div className="flex flex-col mt-4 mx-4">
                <UserProfile />
                <button className="bg-secondary rounded-[20px] h-10 font-bold text-button mt-2">
                    Choose Exchange
                </button>
            </div>

            <Stats />

            <PlayButton />

            <div className="mx-auto mt-2">
                <img src={'/coin.png'} alt={'coin'} className="w-14 h-14" />
            </div>

            <div className="mx-auto mt-4 flex">
                <span className="font-bold text-balance">$</span>
                <span className="font-bold text-balance">{count}</span>
            </div>

            <div className="flex justify-between items-center px-4 py-2 mt-2">
                <BottomButton text={'Upgrd'} />

                <BottomButton text={'Boost'} />
            </div>
            <div className="flex flex-col mt-4 mx-4 space-y-3">
                <p className="text-level tracking-normal">lvl 1</p>
                <ProgressBar progress={25} />
                <p className="text-level tracking-normal text-muted">lvl 200</p>
            </div>
        </div>
    );
}
