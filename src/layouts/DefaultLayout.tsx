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
    const [user, setUser] = useState({});

    useEffect(() => {
        if (initData) {
            const parseUser = parseQueryString(initData);
            setUser(parseUser);
        }
    }, [initData]);

    return (
        <WebAppProvider>
            {/* <MobileView> */}
            <div className="text-white">
                {/*query_id=AAGicPMdAAAAAKJw8x00cUjh&user=%7B%22id%22%3A502493346%2C%22first_name%22%3A%22arcane%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22silvert%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1716948638&hash=5c6d2f55e5830aaa42639dc1a2524d152cc4504f591058a10bf7a64a91906a0f"*/}
                <span className="text-red-700">{initData}</span>

                <span className="text-green-600">
                    {initDataUnsafe
                        ? JSON.stringify(initDataUnsafe)
                        : 'no data'}
                </span>
                {
                    user
                        ? JSON.stringify(user)
                        : 'no user'
                }
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
