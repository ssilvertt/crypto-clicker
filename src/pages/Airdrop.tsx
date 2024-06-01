import { useUserStore } from '../store/user-store.ts';


export function Airdrop() {
    const { user } = useUserStore();
    
    
    return (
        
        
        
        <>
            <div className="text-zinc-200">{
                JSON.stringify(user)
            }</div>
        </>
    );
}
