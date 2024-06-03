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
        <Link to={path} className="text-gray-600 h-12 flex items-center">
            <div className="flex flex-col mx-auto">
                <div className={`mx-auto h-8 w-8 ${isActive ? 'text-white' : 'text-muted'}`}>{icon}</div>
                <div className={`mx-auto text-xs ${isActive ? 'text-white' : 'text-muted'}`}>{text}</div>
            </div>
        </Link>
    );
}
