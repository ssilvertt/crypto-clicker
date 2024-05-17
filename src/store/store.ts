import { create } from 'zustand'

interface Clicker {
    count: number
    increment: (value?: number) => void // Изменено здесь
    reset: () => void
}

export const useStore = create<Clicker>()((set) => ({
    count: 0,
    increment: (value = 1) => set((state) => ({ count: state.count + (value || 1) })), // Изменено здесь
    reset: () => set({ count: 0 }),
}))


