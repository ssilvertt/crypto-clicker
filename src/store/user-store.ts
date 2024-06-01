import { create } from 'zustand';
import type { User } from '../shared/types/user-data.ts';

interface UserStore {
    user: User | null;
    setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: User | null) => set({ user }),
}));

export default useUserStore;