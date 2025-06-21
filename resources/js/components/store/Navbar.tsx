'use client';
import { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import NavIcons from './NavIcons';
import SearchBar from './SearchBar';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="xl:32 2xl:64 relative h-20 px-4 md:px-8 lg:px-16 dark:">
            {/*Small screens* */}
            <div className="flex h-full items-center justify-between md:hidden">
                <NavIcons/>
                <a href="/" className="flex items-center gap-3">
                    <img alt="Logo" src="/dukkan-logo.svg" className="h-12 w-auto" />
                    <h1 className="sr-only text-xl tracking-wide">Open Shop</h1>
                </a>
                <Menu />
            </div>
            {/* bigger screens */}
            <div className="hidden h-full items-center justify-between gap-8 md:flex">
                {/*left section*/}
                <div className="flex w-1/3 items-center gap-12 xl:w-1/2">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Store</span>
                            <img alt="Logo" src="/dukkan-logo.svg" className="h-12 w-auto" />
                            <h1 className="sr-only text-xl tracking-wide">Open Shop</h1>
                        </a>
                    </div>
                    <div className="hidden gap-4 xl:flex">
                        <a href="/">Home</a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsVisible(!isVisible);
                            }}
                        >
                            Categories
                        </a>
                        <a href="/">Shop</a>
                        <a href="/">Deals</a>
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                    </div>
                </div>
                <div className="flex w-2/3 items-center justify-between gap-8 xl:w-1/2 ">
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
            {isVisible && <Categories />}
        </div>
    );
};

export default Navbar;
