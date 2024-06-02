import { useClickerStore } from '../store/clicker-store.ts';
import { motion } from 'framer-motion';
import { useState, TouchEvent } from 'react';

import { Stat } from '../components/Stat.tsx';

export function Exchange() {
    const { count, increment } = useClickerStore();
    const [clickCount, setClickCount] = useState(0);

    const handleTouchStart = (event: TouchEvent) => {
        if (event.touches.length === 1) {
            setClickCount((prevCount) => prevCount + 1);
        }
    };

    const handleTouchEnd = () => {
        increment(clickCount);
        setClickCount(0);
    };

    return (
        <div className="flex flex-col text-white">
            <div className="flex flex-col mt-4 mx-4">
                <div className="flex flex-row space-x-4">
                    <img
                        src="/samantha.png"
                        alt="alch"
                        className="w-20 h-20 rounded-full"
                    />
                    <div className="flex flex-col">
                        <p className="text-name font-bold tracking-name">
                            Silvert
                        </p>
                        <p className="text-level tracking-normal font-normal text-muted">
                            Laser master
                        </p>
                        <p className="text-level tracking-normal font-normal text-muted">
                            Level 4
                        </p>
                    </div>
                </div>
                <button className="bg-secondary rounded-[20px] h-10 font-bold text-button mt-4">
                    Choose Exchange
                </button>
            </div>
            <div className='flex flex-col justify-center items-center mt-6 mr-4'>
                <div className="flex flex-row justify-center space-x-5">
                    <Stat
                        text={'Earnings per click'}
                        value={'+1'}
                    />
                    <Stat text={'Coins to Level Up'} value={'50K'} />
                    <Stat text={'Coins for Hour'} value={'100K'} />
                </div>
            </div>
            
            <motion.div
                className=" mx-auto rounded-full relative mt-4"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
                <img src={'/button.png'} alt={'button'} />
            </motion.div>
            
            
            <div className='mx-auto mt-4'>
                <img src={'/coin.png'} alt={'coin'} className='w-20 h-20' />
            </div>
            
            <div className='mx-auto mt-4 flex'>
                <span className='font-bold text-balance'>$</span>
                <span className='font-bold text-balance'>{count}</span>
            </div>
        </div>
    );
}
