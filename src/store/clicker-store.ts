import  { type StateCreator, create } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware';

// Define the Clicker interface
interface Clicker {
  count: number;
  increment: (value?: number) => void;
  setClicks: (value: number) => void;
  reset: () => void;
}

// Define the store creator with middleware types
type MyState = Clicker;
type MyPersist = (config: StateCreator<MyState>, options: PersistOptions<MyState>) => StateCreator<MyState>;

// Create the Zustand store with TypeScript types and middleware
export const useClickerStore = create<MyState>(
  (persist as MyPersist)(
    (set) => ({
      count: 0,
      increment: (value = 1) =>
        set((state) => ({ count: state.count + (value || 1) })),
      setClicks: (value) => set({ count: value }),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'clickerStore', // Name for the storage
      getStorage: () => localStorage, // Choose storage (localStorage, AsyncStorage, etc.)
    }
  )
);
