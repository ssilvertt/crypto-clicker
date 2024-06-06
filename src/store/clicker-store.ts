import { create } from 'zustand';

interface Clicker {
    count: number;
    increment: (value?: number) => void;
    setClicks: (value: number) => void;
    reset: () => void;
}

export const useClickerStore = create<Clicker>()((set) => ({
    count: 0,
    increment: (value = 1) =>
        set((state) => ({ count: state.count + (value || 1) })),
    setClicks: (value) => set({ count: value }),
    reset: () => set({ count: 0 }),
}));
