import { SiBinance } from 'react-icons/si'
import { FaBitcoin } from 'react-icons/fa'
import { Link, Outlet, useLocation } from 'react-router-dom'

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

    return (
        <div className="min-h-screen bg-main flex flex-col font-mont">
            <div className="flex-grow">
                <Outlet />
            </div>
            
            <nav className="fixed bottom-10 left-1 right-1 bg-secondary shadow-md flex justify-around py-2 rounded-3xl sm:flex-row px-1">
                {links.map((link) => (
                    <Link
                        to={link.path}
                        className="text-gray-600 h-14 flex items-center relative flex-1"
                    >
                        <div
                            className={`flex flex-col items-center px-4 w-full py-2 transition-all ${
                                location.pathname === link.path
                                    ? 'bg-main text-white rounded-3xl'
                                    : 'bg-transparent'
                            }`}
                        >
                            <div
                                className={`flex transition-all ${location.pathname === link.path ? 'text-active' : 'text-inactive'}`}
                            >
                                {link.icon}
                            </div>
                            <span
                                className={`text-xxs transition-all ${location.pathname === link.path ? 'text-white' : 'text-inactivefont'}`}
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
