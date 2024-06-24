import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getRandomPercent(min: number, max: number) {
    return `${Math.floor(Math.random() * (max * 100 - min * 100 + 1) / 100 + min)}%`;
}
