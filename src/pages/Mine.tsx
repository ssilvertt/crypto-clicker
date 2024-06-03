import { useUserStore } from '../store/user-store.ts';


export function Mine() {
    const { user } = useUserStore();
    
    
    return (
        
        
        
        <>
            <div className="text-zinc-200">{
                user?.first_name
            }</div>
        </>
    );
}
