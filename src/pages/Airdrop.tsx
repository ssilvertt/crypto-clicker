import { useUserData } from '../store/user-store.ts';


export function Airdrop() {
    const { initInfo } = useUserData();
    
    
    return (
        
        
        
        <>
            <div className="text-zinc-200">{
                JSON.stringify(initInfo.user)
            }</div>
        </>
    );
}
