import {create} from 'zustand'
import {InitData} from '../shared/types/user-data.ts';


interface InitInfo {
    initInfo: InitData;
    setInitInfo: (initData: InitData) => void;
}

export const useUserData = create<InitInfo>(() => ({
    initInfo: {},
    setInitInfo: (initData: InitData) => ({ initData }),
}))