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
        icon: <img src='/Exchange.svg' alt='Exchange' className='h-6 w-6' />,
        text: 'Exchange',
        path: '/',
    },

    {
        icon: <img src='/Mine.svg' alt='Mine' className='h-6 w-6' />,
        text: 'Mine',
        path: '/mine',
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
            <div className="min-h-screen bg-main flex flex-col font-space">
                <div className="flex-grow">
                    <Outlet />
                </div>
                
                <nav
                    className="fixed bg-nav bottom-0 left-0 right-0 shadow-md flex justify-around py-2 sm:flex-row border-t border-secondary">
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
