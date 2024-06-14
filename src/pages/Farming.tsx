import GlowingStarWithIcon from '../components/GlowingStarWithIcon.tsx';
import { ProgressBar } from '../components/ProgressBar.tsx';

export function Farming() {
    return (
        <>
            <div className="flex flex-col justify-start items-center">
                <div className="flex flex-row justify-between items-start">
                    <div className="flex flex-row justify-between gap-16 items-center">
                        <div className="flex flex-row gap-3 justify-between items-center">
                            <div className="relative overflow-hidden rounded-[100px] w-10 h-10 bg-[#0e0e0e]">
                                <img
                                    src="/christian-buehner-DItYlc26zVI-unsplash%201.png"
                                    alt="avatar"
                                    className="w-20 h-[53px] object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-0 justify-center items-start relative">
                                <p className="text-center leading-6 text-base text-light">
                                    Alex Johnson
                                </p>
                                <small className="opacity-40 text-center leading-3 text-xs text-light">
                                    Pilot
                                </small>
                            </div>
                        </div>

                        <div className="flex">
                            <button className="rounded-[100px] border border-active px-4 py-2 flex gap-2 items-center relative bg-transparent text-center leading-6 text-base text-active">
                                Choose Exchange
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center mt-4">
                    <div className="flex flex-row justify-center items-start gap-1">
                        <div className="rounded-[48px] px-4 pt-2 pb-1 flex flex-col gap-0 justify-center items-center relative bg-[#4508df]/[0.32]">
                            <small className="opacity-50 text-center leading-3 text-xs text-light">
                                Earning per Click
                            </small>
                            <p className="text-center leading-6 text-base text-light">
                                +1
                            </p>
                        </div>
                        <div className="rounded-[48px] px-4 pt-2 pb-1 flex flex-col gap-0 justify-center items-center relative bg-[#4508df]/[0.32]">
                            <small className="opacity-50 text-center leading-3 text-xs text-light">
                                Coins to Level Up
                            </small>
                            <div className="flex items-center gap-1">
                                <img
                                    src="/coin.svg"
                                    className="h-4 w-4"
                                    alt="coin"
                                />
                                <p className="text-center leading-6 text-base text-light">
                                    50K
                                </p>
                            </div>
                        </div>
                        <div className="rounded-[48px] px-4 pt-2 pb-1 flex flex-col gap-0 justify-center items-center relative bg-[#4508df]/[0.32]">
                            <small className="opacity-50 text-center leading-3 text-xs text-light">
                                Coins for House
                            </small>
                            <div className="flex items-center gap-1">
                                <img
                                    src="/coin.svg"
                                    className="h-4 w-4"
                                    alt="coin"
                                />
                                <p className="text-center leading-6 text-base text-light">
                                    100K
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-7 ">
                        <div className="flex flex-row justify-center items-start relative gap-4 ">
                            <img
                                src="/coin.svg"
                                className="h-10 w-10"
                                alt="coin"
                            />
                            <div className="text-center font-bold leading-10 text-[40px] text-light">
                                {(491035844).toLocaleString('ru-RU')}
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center mt-3">
                            <div className="flex flex-row w-full justify-between gap-64">
                                <div className="flex gap-0 items-center">
                                    <p className="leading-6 text-base text-light">
                                        Cadet
                                    </p>
                                    <svg
                                        width="16"
                                        height="14"
                                        viewBox="0 0 16 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 4.5L10 8.5L6 12.5"
                                            stroke="#D8D5F4"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className="opacity-40 text-center leading-6 text-base text-light">
                                        Level
                                    </p>
                                    <p className="text-center leading-6 text-base text-light">
                                        2/10
                                    </p>
                                </div>
                            </div>
                            <ProgressBar value="27" />
                        </div>
                    </div>
                </div>

                <img src="/Frame%2032.svg" alt="rocket" className="mt-6" />

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
