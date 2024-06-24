import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useClickerStore } from '@/store/clicker-store.ts';
import PlanetSvg from '@svg/planet.svg?react';
import StarSVG from '@svg/star.svg?react';
import { cn, getRandomPercent } from '@/utils/utils.ts';
import { STARS_DURATION, STARS_MAX, STARS_MIN } from '@/shared/consts/stars-config.ts';
import { uniqueId } from 'lodash-es';

interface Props {
    className?: string;
}

interface Star {
    id: string
    top: string;
    left: string;
}

export const PlayButton: React.FC<Props> = ({ className }) => {
    const { increment } = useClickerStore();

    const [stars, setStars] = useState<Star[]>([]);

    const onTouchEnd = () => {
        increment();

        if (stars.length < STARS_MIN) {
            for (let count = stars.length; count < STARS_MIN; count++) {
                addStar();
            }
        } else if (stars.length < STARS_MAX) {
            addStar();
        }
    }

    const addStar = () => {
        const newStar: Star = {
            id: uniqueId('star-'),
            top: getRandomPercent(-5, 80),
            left: getRandomPercent(-5, 80),
        };

        setStars(stars => [...stars, newStar]);
        setTimeout(() => setStars(stars => stars.filter(star => star.id !== newStar.id)), STARS_DURATION)
    }

    return (
        <div className={cn(className, 'relative flex justify-center items-center')}>
            <PlanetSvg className="w-10/12" />

            <AnimatePresence>
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute w-3/12 p-3"
                        style={star}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <StarSVG />
                    </motion.div>
                ))}
            </AnimatePresence>

            <motion.button className="absolute w-8/12 flex justify-center items-center rounded-3xl"
                           onTouchEnd={onTouchEnd}
                           whileTap={{ scale: 1.15 }}>
                <img className="w-10/12"
                     src="rocket.png"
                     alt="rocket"
                     onContextMenu={event => event.preventDefault()} />
            </motion.button>
        </div>
    );
};
