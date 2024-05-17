import { FaBitcoin } from 'react-icons/fa'
import { useStore } from '../store/store.ts'
import { motion } from "framer-motion";
import React, {useEffect, useState, useCallback} from 'react'

export function Exchange() {
    const { count, increment } = useStore();
    const [touchCount, setTouchCount] = useState(0);
    
    const handleTouchStart = useCallback(
        (event: React.TouchEvent) => {
            if (event.touches) {
                setTouchCount(event.touches.length);
            }
        },
        []
    );
    
    const handleTouchEnd = useCallback(() => {
        setTouchCount(0);
    }, []);
    
    useEffect(() => {
        if (touchCount > 0) {
            for (let i = 0; i < touchCount; i++) {
                increment();
            }
        }
    }, [touchCount, increment]);
    
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col mt-20">
                <div className="grid grid-cols-2 justify-items-center ">
                    <div>
                        <FaBitcoin className="text-active h-20 w-20" />
                    </div>
                    
                    <div className="text-zinc-200 text-4xl mt-4 transition-all">
                        {count}
                    </div>
                </div>
                
                <motion.div
                    className="w-64 h-64 bg-blue-500 rounded-full relative mt-10"
                    onClick={() => increment()}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <div className="absolute inset-1 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)] rounded-full"></div>
                </motion.div>
            </div>
        </div>
    );
}
