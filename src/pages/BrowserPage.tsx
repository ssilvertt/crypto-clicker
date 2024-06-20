import GlowingStarWithIcon from '../components/GlowingStarWithIcon.tsx';

export function BrowserPage(){
    const StarPositions = [
        { top: '34.24%', left: '9.18%', style: 'h-3 w-3', ellipseRadius: '6' },
        { top: '11.27%', left: '48.55%', style: 'h-3 w-3', ellipseRadius: '10' },
        { top: '17.26%', left: '28.02%', style: 'h-4 w-4', ellipseRadius: '10' },
        { top: '32.81%', left: '87.92%', style: 'h-4 w-4', ellipseRadius: '10' },
        { top: '75.32%', left: '47.1%', style: 'h-6 w-6', ellipseRadius: '10'},
        { top: '25.39%', left: '47.1%', style: 'h-6 w-6', ellipseRadius: '10'},
        { top: '87.16%', left: '64.01%', style: 'h-[34px] w-[34px]', ellipseRadius: '10'},
        { top: '67.9%', left: '76.09%', style: 'h-[33px] w-[33px]', ellipseRadius: '10'},
        { top: '15.98%', left: '76.09%', style: 'h-[33px] w-[33px]', ellipseRadius: '10'},
        { top: '74.61%', left: '15.94%', style: 'h-[34px] w-[34px]', ellipseRadius: '17'},
    ];
    
    
    return (
        <div className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <img
                        src='/ellipse.svg'
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        alt='ellipse'
                    />
                    <p className="relative z-10 text-white text-[40px] leading-10 font-bold text-center">
                        Oh, no! <br />Please use your<br />mobile device<br />to start earning<br />money
                    </p>
                </div>
            </div>
            {StarPositions.map((position, index) => (
                <GlowingStarWithIcon
                    key={index}
                    className={`absolute ${position.style}`}
                    style={{ top: position.top, left: position.left }}
                    ellipseRadius={position.ellipseRadius}
                />
            ))}
        </div>
    )
}