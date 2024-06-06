import { useCloudStorage } from '@vkruglikov/react-telegram-web-app';
import { motion } from 'framer-motion';
import { TouchEvent, useEffect, useState } from 'react';
import { useClickerStore } from '../store/clicker-store.ts';
import {useBeforeUnload} from 'react-router-dom';

export function PlayButton() {
    const { increment, setClicks , count } = useClickerStore();
    const [clickCount, setClickCount] = useState(0);
    const { getItem, setItem } = useCloudStorage();
    useBeforeUnload(() => {
        setItem('clicks', count.toString());
    });
 

    useEffect(() => {
        const storedClicks = getItem('clicks');
        if (storedClicks !== null && !isNaN(Number(storedClicks))) {
            setClicks(Number(storedClicks));
        }
    }, [count, getItem, setClicks, setItem]);
    

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
        <motion.div
            className=" mx-auto rounded-full relative mt-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            <img
                src={'/buttons.svg'}
                alt={'button'}
                className="w-[168px] h-[160px]"
            />
        </motion.div>
    );
}