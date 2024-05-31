import {
    WebAppProvider,
    useInitData,
} from '@vkruglikov/react-telegram-web-app';
import { useEffect, useState } from 'react';
import { SiBinance } from 'react-icons/si';
import { FaBitcoin } from 'react-icons/fa';
import { Outlet, useLocation } from 'react-router-dom';
import { NavLink } from '../components/NavLink.tsx';
import { parseQueryString } from '../utils/parseQueryString.ts';
import { useUserData } from '../store/user-store.ts';

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
    const [initDataUnsafe, initData] = useInitData();
    const { initInfo, setInitInfo } = useUserData();
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (initData) {
            const parseUser = parseQueryString(initData);
            setUser(user);
            setInitInfo(parseUser);
        }
    }, [initData, setInitInfo, setUser, user]);

    return (
        <WebAppProvider>
            {/* <MobileView> */}
            <div className="text-white">
                {
                    initInfo
                     ? <div>{JSON.stringify(initInfo)}</div>
                        : <div>Loading...</div>
                    
                    
                }
                <span className='text-red-500'>
                    {
                        user
                        ? <div>{JSON.stringify(user)}</div>
                            : <div>Xdxd</div>
                        
                    }
                </span>
            </div>
            <div className="min-h-screen bg-main flex flex-col font-mont">
                <div className="flex-grow">
                    <Outlet />
                </div>

                <nav className="fixed bottom-10 left-1 right-1 bg-secondary shadow-md flex justify-around py-2 rounded-3xl sm:flex-row px-1">
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
