import { cn } from '../utils/utils.ts';

interface GlowingStarWithIconProps {
    className?: string;
    style?: React.CSSProperties;
    ellipseRadius?: string;
}

const GlowingStarWithIcon = ({ className, style, ellipseRadius = '10' }: GlowingStarWithIconProps) => {
    return (
        <div className={cn('relative flex items-center justify-center', className)} style={style}>
            <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
            >
                <g opacity="0.5" filter="url(#filter0_f_18_684)">
                    <circle
                        cx="26"
                        cy="26"
                        r={ellipseRadius}
                        fill="url(#paint0_linear_18_684)"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_18_684"
                        x="0"
                        y="0"
                        width="52"
                        height="52"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="8"
                            result="effect1_foregroundBlur_18_684"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_18_684"
                        x1="36"
                        y1="36"
                        x2="16"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FEB700" />
                        <stop offset="0.660948" stopColor="#FFDB7F" />
                    </linearGradient>
                </defs>
            </svg>
            <img src="/Star%2015.svg" alt="coin" className={cn('relative', className)} />
        </div>
    );
};

export default GlowingStarWithIcon;
