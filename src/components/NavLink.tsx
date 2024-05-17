import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface NavLinkProps {
    icon: ReactNode
    text: string
    path: string
    isActive: boolean
}

export function NavLink({ icon, text, path, isActive }: NavLinkProps) {
    return (
        <Link
            to={path}
            className="text-gray-600 h-14 flex items-center relative flex-1"
        >
            <div
                className={`flex flex-col items-center px-4 w-full py-2 transition-all ${isActive ? 'bg-main text-white rounded-3xl' : 'bg-transparent'}`}
            >
                <div
                    className={`flex transition-all ${isActive ? 'text-active' : 'text-inactive'}`}
                >
                    {icon}
                </div>
                <span
                    className={`text-xxs transition-all ${isActive ? 'text-white' : 'text-inactivefont'}`}
                >
                    {text}
                </span>
            </div>
        </Link>
    )
}
