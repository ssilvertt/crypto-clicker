import { useEffect } from 'react';
import { useInitData } from '@vkruglikov/react-telegram-web-app';
import { useUserStore } from '../store/user-store.ts';

export const useInitUser = () => {
	const [, initData] = useInitData();
	const { setUser } = useUserStore();
	
	useEffect(() => {
		if (initData) {
			const searchParams = new URLSearchParams(initData);
			const value = searchParams.get('user');
			const user = value !== null ? JSON.parse(value) : null;
			setUser(user);
			console.log(user);
		}
	}, [initData, setUser]);
};