import type { User } from '@/shared/types/user-data.ts'
import { useEffect } from 'react';
import { useInitData } from '@vkruglikov/react-telegram-web-app';
import { useUserStore } from '../store/user-store.ts';
import axios from 'axios';

export const useInitUser = () => {
	const [, initData] = useInitData();
	const { setUser } = useUserStore();
	
	useEffect(() => {
		const initUser = async () => {
			if (initData) {
				const searchParams = new URLSearchParams(initData);
				const value = searchParams.get('user');
				const user: User = value !== null ? JSON.parse(value) : null;
				const sentUser = {
					telegramId: user.id,
					firstName: user.first_name,
					lastName: user.last_name,
					referral: '',
				}
				try {
					const response = await axios.post('https://bruh.restai.me/api/v1/login', sentUser);
					console.log(response);
					setUser(user);
				} catch (error) {
					console.error('Error during login:', error);
				}
			}
		};
		
		initUser();
	}, [initData, setUser]);
};