import { CoinsInfo } from '../components/CoinsInfo.tsx';
import GlowingStarWithIcon from '../components/GlowingStarWithIcon.tsx';
import { ProfileHeader } from '../components/ProfileHeader.tsx';

export function Farming() {
    return (
        <>
            <div className="flex flex-col justify-between items-center min-h-[88vh]">
                <div className="mt-4 flex-grow">
                    <ProfileHeader />
                    <CoinsInfo />
                    <img src="/Frame%2032.svg" alt="rocket" className="mt-6 w-full h-[40vh]" />
                </div>
                <div className="flex flex-row justify-between items-start w-full mt-auto">
                    <div className="flex flex-row items-center py-2 px-4 gap-1 box-border rounded-[48px] bg-[#4508df]/[0.32]">
                        <GlowingStarWithIcon />
                        <p className="leading-3 text-base text-light">159/1000</p>
                    </div>
                    <div className="flex flex-row items-center py-2 px-4 gap-1 box-border rounded-[48px] bg-[#4508df]/[0.32]">
                        <img src='/rocket.svg' alt='rocket' className='h-6 w-6' />
                        <p className="leading-6 text-base text-light">159/1000</p>
                    </div>
                </div>
            </div>
        </>
    );
}
