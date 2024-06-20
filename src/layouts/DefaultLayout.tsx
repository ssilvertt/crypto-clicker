import {
    WebAppProvider,
    useInitData,
    useExpand,
  useWebApp,
} from '@vkruglikov/react-telegram-web-app';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AxeIcon } from '../components/NavIcons/AxeIcon.tsx';
import { CoinIcon } from '../components/NavIcons/CoinIcon.tsx';
import { DailyQIcon } from '../components/NavIcons/DailyQIcon.tsx';
import { PlanetIcon } from '../components/NavIcons/PlanetIcon.tsx';
import { UsersIcon } from '../components/NavIcons/UsersIcon.tsx';
import { NavLink } from '../components/NavLink.tsx';
import { BrowserPage } from '../pages/BrowserPage.tsx';
import { useUserStore } from '../store/user-store.ts';
import { MobileView, BrowserView } from 'react-device-detect';

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

export function DefaultLayout() {
    const location = useLocation();
    const [, initData] = useInitData();
    const [isExpanded, expand] = useExpand();
    const { setUser } = useUserStore();
    const WebApp = useWebApp();
    

    useEffect(() => {
        console.log(WebApp);
        if (!isExpanded) {
            expand();
        }
    }, [expand, isExpanded]);

    useEffect(() => {
        if (initData) {
            const searchParams = new URLSearchParams(initData);
            const value = searchParams.get('user');
            const user = value !== null ? JSON.parse(value) : null;
            setUser(user);
        }
    }, [initData, setUser]);

    return (
        <WebAppProvider>
            <MobileView>
                <div className="bg-black">
                    <div className="min-h-screen bg flex flex-col font-helvetica antialiased">
                        <div className="flex-grow px-4">
                            <Outlet />
                        </div>
                        <div className="h-[11vh]">
                            <nav
                              className="fixed bottom-4 left-4 right-4 rounded-[48px] p-[2px] bg-gradient-to-t from-[#4508df] to-transparent">
                                <div
                                  className="flex flex-row justify-between items-center py-3 px-4 box-border rounded-[48px] bg-nav">
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
                        </div>
                    </div>
                </div>
            </MobileView>
            <BrowserView>
                <div className="bg-black">
                    <div className="min-h-screen bg flex flex-col font-helvetica ">
                        <div className="flex-grow">
                            <BrowserPage />
                        </div>
                    </div>
                </div>
            </BrowserView>
        </WebAppProvider>
    );
}
