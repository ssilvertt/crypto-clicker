import { SiBinance } from 'react-icons/si'
import { TbPick } from 'react-icons/tb'
import { FaUserFriends } from 'react-icons/fa'
import { BiSolidCoinStack } from 'react-icons/bi'
import { FaBitcoin } from 'react-icons/fa'
import { Link, Outlet, useLocation } from 'react-router-dom'

const links = [
    {
        icon: <SiBinance className="h-8 w-8" />,
        text: 'Exchange',
        path: '/',
    },
    {
        icon: <TbPick className="h-8 w-8" />,
        text: 'Mine',
        path: '/mine',
    },
    {
        icon: <FaUserFriends className="h-8 w-8" />,
        text: 'Friends',
        path: '/friends',
    },
    {
        icon: <BiSolidCoinStack className="h-8 w-8" />,
        text: 'Earn',
        path: '/earn',
    },
    {
        icon: <FaBitcoin className="h-8 w-8" />,
        text: 'Airdrop',
        path: '/airdrop',
    },
]

export function DefaultLayout() {
    const location = useLocation()

    return (
        <div className="min-h-screen bg-main flex flex-col font-mont">
            <div className="flex-grow">
                <Outlet />
            </div>
            
            <nav className="fixed bottom-10 left-1 right-1 bg-secondary shadow-md flex justify-around py-2 rounded-3xl sm:flex-row px-1">
                {links.map((link) => (
                    <Link
                        to={link.path}
                        className="text-gray-600 h-14 flex items-center relative flex-1" // Added flex-1 here
                    >
                        <div
                            className={`flex flex-col items-center px-4 w-full py-2 ${
                                location.pathname === link.path
                                    ? 'bg-main text-white rounded-3xl'
                                    : 'bg-transparent'
                            }`}
                        >
                            <div
                                className={`flex ${location.pathname === link.path ? 'text-active' : 'text-inactive'}`}
                            >
                                {link.icon}
                            </div>
                            <span
                                className={`text-xxs ${location.pathname === link.path ? 'text-white' : 'text-inactivefont'}`}
                            >
                                {link.text}
                            </span>
                        </div>
                    </Link>
                ))}
            </nav>
        </div>
    )
}
