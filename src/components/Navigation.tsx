// components/Navigation.tsx
import { AxeIcon } from '@/components/NavIcons/AxeIcon.tsx'
import { CoinIcon } from '@/components/NavIcons/CoinIcon.tsx'
import { DailyQIcon } from '@/components/NavIcons/DailyQIcon.tsx'
import { PlanetIcon } from '@/components/NavIcons/PlanetIcon.tsx'
import { UsersIcon } from '@/components/NavIcons/UsersIcon.tsx'
import { NavLink } from './NavLink';
import { useLocation } from 'react-router-dom';

const links = [
	{
		icon: <PlanetIcon color="text-light" />,
		text: 'Farming',
		path: '/',
	},
	
	{
		icon: <UsersIcon color="text-light" />,
		text: 'Friends',
		path: '/friends',
	},
	{
		icon: <CoinIcon color="text-light" />,
		text: 'Earn',
		path: '/earn',
		isEnabled: false,
	},
	{
		icon: <AxeIcon color="text-light" />,
		text: 'Axe',
		path: '/mine',
		isEnabled: false,
	},
	{
		icon: <DailyQIcon color="text-light" />,
		text: 'Daily Q',
		path: '/daily',
	},
];

export const Navigation = () => {
	const location = useLocation();
	
	return (
		<nav className="fixed bottom-4 left-4 right-4 rounded-[48px] p-[2px] bg-gradient-to-t from-[#4508df] to-transparent">
			<div className="flex flex-row justify-between items-center py-3 px-4 box-border rounded-[48px] bg-nav">
				{links.map((link) => (
					<NavLink
						key={link.path}
						icon={link.icon}
						text={link.text}
						path={link.path}
						isActive={location.pathname === link.path}
						isEnabled={link.isEnabled}
					/>
				))}
			</div>
		</nav>
	);
};