import useUserStore from '../store/user-store.ts';

export function UserProfile() {
    const { user } = useUserStore();
    
    
    return (
        <div className="flex flex-row space-x-4">
            <img
                src="/samantha.png"
                alt="alch"
                className="w-20 h-20 rounded-full"
            />
            <div className="flex flex-col">
                <p className="text-name font-bold tracking-name"> {user?.first_name || 'User'}</p>
                <p className="text-level tracking-normal font-normal text-muted">
                    Laser master
                </p>
                <p className="text-level tracking-normal font-normal text-muted">
                    Level 4
                </p>
            </div>
        </div>
    );
}
