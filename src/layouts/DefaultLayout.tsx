import {
    WebAppProvider,
    useInitData,
} from '@vkruglikov/react-telegram-web-app';
import { useEffect, useState } from 'react';
import { SiBinance } from 'react-icons/si';
import { FaBitcoin } from 'react-icons/fa';
import { Outlet, useLocation } from 'react-router-dom';
import { NavLink } from '../components/NavLink.tsx';
import {useUserStore } from '../store/user-store.ts';

const links = [
    {
        icon: <SiBinance className="h-8 w-8" />,
        text: 'Exchange',
        path: '/',
    },

    {
        icon: <FaBitcoin className="h-8 w-8" />,
        text: 'Airdrop',
        path: '/airdrop',
    },
];

export function DefaultLayout() {
    const location = useLocation();
    const [, initData] = useInitData();
    const { user, setUser } = useUserStore();
    
    
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
            {/* <MobileView> */}
            <div className='text-red-500'>
                {JSON.stringify(user)}
            </div>
            <div className="min-h-screen bg-main flex flex-col font-mont">
                <div className="flex-grow">
                    <Outlet />
                </div>
                
                <nav
                    className="fixed bottom-10 left-1 right-1 bg-secondary shadow-md flex justify-around py-2 rounded-3xl sm:flex-row px-1">
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
            {/* </MobileView> */}
            {/* <BrowserView> */}
            {/*     <div>Error, please use mobile device</div> */}
            {/* </BrowserView> */}
        </WebAppProvider>
    );
}
