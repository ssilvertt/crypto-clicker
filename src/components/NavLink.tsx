import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
    icon: ReactNode;
    text: string;
    path: string;
    isActive: boolean;
    isEnabled?: boolean; // Необязательный проп
}

export function NavLink({
    icon,
    text,
    path,
    isActive,
    isEnabled = true,
}: NavLinkProps) {
    const linkContent = (
        <div className="flex flex-col items-center justify-start w-[16.91vw] h-[34px]">
            <div className={`${
                isEnabled
                    ? isActive
                        ? 'text-active'
                        : 'text-light'
                    : 'text-inactive'
            }`}>
                {icon}
            </div>
            <div
                className={`mx-auto text-navicon tracking-normal ${
                    isEnabled
                        ? isActive
                            ? 'text-active'
                            : 'text-light'
                        : 'text-inactive'
                }`}
            >
                {text}
            </div>
        </div>
    );

    return isEnabled ? (
        <Link to={path}>{linkContent}</Link>
    ) : (
        <div>{linkContent}</div>
    );
}
