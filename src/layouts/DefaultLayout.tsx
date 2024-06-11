import {
    WebAppProvider,
    useInitData,
    useExpand
} from '@vkruglikov/react-telegram-web-app';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavLink } from '../components/NavLink.tsx';
import {useUserStore } from '../store/user-store.ts';
import { MobileView, BrowserView } from 'react-device-detect';

const links = [
    {
        icon: <img src='/planet.svg' alt='Farming' className='h-[22px] w-[22px]' />,
        text: 'Farming',
        path: '/',
    },

    {
        icon: <img src='/users.svg' alt='Users' className='h-[22px] w-[22px]' />,
        text: 'Friends',
        path: '/friends',
    },
    {
        icon: <img src='/coin.svg' alt='Coin' className='h-[22px] w-[22px]' />,
        text: 'Earn',
        path: '/earn',
    },
    {
        icon: <img src='/axe.svg' alt='Mine' className='h-[22px] w-[22px]' />,
        text: 'Axe',
        path: '/mine',
    },
    {
        icon: <img src='/file-text.svg' alt='DailyQ' className='h-[22px] w-[22px]' />,
        text: 'Daily Q',
        path: '/daily',
    },
];

export function DefaultLayout() {
    const location = useLocation();
    const [, initData] = useInitData();
    const [isExpanded, expand] = useExpand();
    const { setUser } = useUserStore();
    
    useEffect(() => {
        if (!isExpanded) {
            expand();
        }
    }, [expand, isExpanded]);
    
    useEffect(() => {
        if(initData){
            const searchParams = new URLSearchParams(initData);
            const value = searchParams.get('user');
            const user = value !== null ? JSON.parse(value) : null;
            setUser(user);
        }
    }, [initData, setUser]);

    return (
        <WebAppProvider>
            <MobileView>
            <div className="min-h-screen bg-main flex flex-col font-helvetica">
                <div className="flex-grow">
                    <Outlet />
                </div>
                
                <nav
                    className="fixed bottom-4 left-3 right-3 flex flex-row justify-between items-center py-3 px-4 box-border rounded-[48px] bg-nav">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            icon={link.icon}
                            text={link.text}
                            path={link.path}
                            isActive={location.pathname === link.path}
                        />
                    ))}
                </nav>
            </div>
             </MobileView>
             <BrowserView>
              <div>Error, please use mobile device</div>
            </BrowserView>
        </WebAppProvider>
    );
}
