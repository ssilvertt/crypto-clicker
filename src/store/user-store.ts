import {create} from 'zustand'
import {InitData} from '../shared/types/user-data.ts';


interface InitInfo {
    initInfo: InitData;
    setInitInfo: (initData: InitData) => void;
}

export const useUserData = create<InitInfo>(() => ({
    initInfo: {
        query_id: '',
        user: {
            id: 0,
            first_name: '',
            last_name: '',
            username: '',
            language_code: '',
            allows_write_to_pm: false,
        },
        auth_date: 0,
        hash: '',
    },
    setInitInfo: (initData: InitData) => ({ initData }),
}))