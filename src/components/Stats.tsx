import { Stat } from './Stat.tsx';

export function Stats() {
    return (
        <div className="flex flex-col justify-center items-center mt-2 mr-4">
            <div className="flex flex-row justify-center space-x-5">
                <Stat text={'Earnings per click'} value={'+1'} />
                <Stat text={'Coins to Level Up'} value={'50K'} />
                <Stat text={'Coins for Hour'} value={'100K'} />
            </div>
        </div>
    );
}
