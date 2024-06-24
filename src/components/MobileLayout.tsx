import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const MobileLayout = () => (
	<div className="bg-black select-none">
		<div className="min-h-screen bg flex flex-col font-helvetica antialiased">
			<div className="flex-grow px-4">
				<Outlet />
			</div>
			<div className="h-[11vh]">
				<Navigation />
			</div>
		</div>
	</div>
);