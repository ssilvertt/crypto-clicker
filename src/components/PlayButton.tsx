
import { motion } from 'framer-motion';
import { TouchEvent, useState } from 'react';
import { useClickerStore } from '../store/clicker-store.ts';

export function PlayButton() {
    const { increment } = useClickerStore();
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
        <>
       
        <motion.div
            className=" mx-auto rounded-full relative mt-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            <img
                src={'/rocketButton.png'}
                alt={'button'}
                className="mt-6 w-full h-[40vh]"
            />
        </motion.div>
        
        </>
    );
}