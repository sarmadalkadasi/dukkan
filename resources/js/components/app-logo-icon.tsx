import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            aria-label="Dukkan Logo"
            src="/favicon.png"
            className="h-10 w-auto object-contain"
            alt="Dukkan Logo"
        />
    );
}
