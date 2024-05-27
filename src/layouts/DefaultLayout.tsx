import { WebAppProvider, useInitData } from '@vkruglikov/react-telegram-web-app'
import { SiBinance } from 'react-icons/si'
import { FaBitcoin } from 'react-icons/fa'
import { Outlet, useLocation } from 'react-router-dom'
import { NavLink } from '../components/NavLink.tsx'
import { BrowserView, MobileView } from 'react-device-detect'

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
]

export function DefaultLayout() {
    const location = useLocation()
    const [initDataUnsafe, initData] = useInitData()

    return (
        <WebAppProvider>
            {/* <MobileView> */}
            <div className="text-white">
                <span className="text-red-700">{initData}</span>
                <span className="text-pink-600">
                    {JSON.stringify(initData)}
                </span>
                <span className="text-blue-600">
                    {initData ? JSON.parse(initData) : 'no init'}
                </span>
                <span className="text-yellow-400">
                    {initDataUnsafe && 'no data'}
                </span>
                <span className="text-green-600">
                    {initDataUnsafe
                        ? JSON.stringify(initDataUnsafe)
                        : 'no data'}
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
    )
}
