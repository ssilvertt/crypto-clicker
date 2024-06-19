import { RewardCard } from '../components/RewardCard.tsx';
import copy from '../copy.svg';

export function Friends() {
    return (
        <div className="">
            <div className="flex flex-col gap-2 items-center relative w-full">
                <h1 className="text-center font-bold leading-10 text-[40px] text-light mt-8">
                    Invite your friends
                </h1>
                <p className="text-center leading-6 text-base text-light">
                    Your friend and you will receive bonuses
                </p>
            </div>
            <div className="flex flex-col gap-2 items-center relative w-full mt-4">
                <RewardCard
                    title="Invite a friend"
                    icon="/userIcon.svg"
                    coinAmount={5000}
                />
                <div className="rounded-[16px] p-[2px] w-full bg-gradient-to-t from-[#ffdb7e] to-transparent to-100% ">
                    <div className="rounded-[15px] px-4 py-3 flex gap-4 items-center relative w-full bg-[#feb700] ">
                        <img src="/yellowUserIcon.svg" alt="user" />
                        <div className="flex flex-col items-start flex-1 relative w-full">
                            <p className="font-bold leading-6 text-base text-[#533a00]">
                                Invite a 3 friends
                            </p>
                            <div className="flex gap-1 justify-center items-center relative">
                                <img src="/coin.svg" alt="coin" />
                                <p className="text-center leading-6 text-base text-[#533a00]">
                                    + 25000 coins
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center flex-1 relative w-full  h-[43vh] mt-4">
                <div className="flex gap-8 justify-between items-center relative w-full">
                    <p className="leading-6 text-base text-light">
                        Your friends list
                    </p>
                    <img src="/refresh.svg" alt="coin" />
                </div>
                <div className="rounded-2xl bg-gradient-to-t from-[#4508df] to-transparent p-[2px] relative w-full h-full bg-[#4508df]/[0.32]">
                    <div className="rounded-[15px] p-6 flex flex-col justify-between items-start flex-1 relative w-full h-full bg-[#1b0651]">
                        <h1 className="font-bold leading-10 text-[40px] text-light">
                            You don't have any invited friends
                        </h1>
                        <div className="flex gap-[11px] items-start relative w-full ">
                            <div className="rounded-[100px] px-6 py-3 flex gap-2 justify-center items-center flex-1 relative w-full bg-active">
                                <p className="text-center leading-6 text-base text-[#130e24]">
                                    Invite Friends Now
                                </p>
                            </div>
                            <div className="rounded-[100px] flex py-3 justify-center items-center  w-12 bg-active">
                                <img
                                    src={copy}
                                    alt="copy"
                                    className="w-6 h-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
