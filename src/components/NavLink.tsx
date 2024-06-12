import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
    icon: ReactNode;
    text: string;
    path: string;
    isActive: boolean;
}

export function NavLink({ icon, text, path, isActive }: NavLinkProps) {
    return (
        <Link to={path}>
            <div className="flex flex-col items-center justify-start  w-[70px] h-[34px]">
                <div
                    className={`${isActive ? 'text-active' : 'text-light'}`}
                >
                    {icon}
                </div>
                <div
                    className={`mx-auto text-navicon tracking-normal ${isActive ? 'text-active' : 'text-light'}`}
                >
                    {text}
                </div>
            </div>
        </Link>
    );
}
