import { CoinsInfo } from '../components/CoinsInfo.tsx';
import GlowingStarWithIcon from '../components/GlowingStarWithIcon.tsx';
import { ProfileHeader } from '../components/ProfileHeader.tsx';

export function Farming() {
    return (
        <>
            <div className="flex flex-col min-h-screen justify-between items-center pb-[110px] px-4 pt-4">
                <div className="w-full">
                   <ProfileHeader/>
                   <CoinsInfo/>
                    
                    <img src="/Frame%2032.svg" alt="rocket" className="mt-6" />
                </div>
                
                <div className="flex flex-row justify-between items-start w-full mt-5">
                    <div className="flex flex-row items-center py-2 px-4 gap-1 box-border rounded-[48px] bg-[#4508df]/[0.32]">
                        <GlowingStarWithIcon />
                        <p className="leading-6 text-base text-light">
                            159/1000
                        </p>
                    </div>
                    <div className="flex flex-row items-center py-2 px-4 gap-1 box-border rounded-[48px] bg-[#4508df]/[0.32]">
                        <img src='/rocket.svg' alt='rocket' className='h-6 w-6' />
                        <p className="leading-6 text-base text-light">
                            159/1000
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
