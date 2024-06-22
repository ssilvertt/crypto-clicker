import { CoinsInfo } from '../components/CoinsInfo.tsx';
import GlowingRockerWithIcon from '../components/GlowingRocketWithIcon.tsx';
import GlowingStarWithIcon from '../components/GlowingStarWithIcon.tsx';
import { PlayButton } from '../components/PlayButton.tsx';
import { ProfileHeader } from '../components/ProfileHeader.tsx';

export function Farming() {
    return (
        <>
            <div className="flex flex-col justify-between items-center min-h-[89vh] pb-3">
                <div className="mt-4 flex-grow w-full">
                    
                        <ProfileHeader />
                        <CoinsInfo />
                   
                 
                    <PlayButton />
                </div>
                
                <div className="flex flex-row justify-between items-start w-full mt-auto">
                    <div className=" rounded-[46px] p-[2px] bg-gradient-to-t from-[#4508df] to-transparent bg-[#4508df]/[0.32]">
                        <div className="rounded-[46px] bg-[#18044c] flex items-center py-2 px-4 gap-1 box-border">
                            <GlowingStarWithIcon />
                            <p className="leading-6 text-base text-light">
                                159/1000
                            </p>
                        </div>
                    </div>
                    <div className=" rounded-[46px] p-[2px] bg-gradient-to-t from-[#4508df] to-transparent bg-[#4508df]/[0.32]">
                        <div className="rounded-[46px] bg-[#18044c] flex items-center py-2 px-4 gap-1 box-border">
                            <GlowingRockerWithIcon className="w-5 h-5" />
                            <p className="leading-6 text-base text-light">
                                Boost
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
