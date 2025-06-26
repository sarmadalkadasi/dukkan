'use client';
import { useState } from 'react';
import AppLogoIcon from '../app-logo-icon';
import Categories from './Categories';
import Menu from './Menu';
import NavIcons from './NavIcons';
import SearchBar from './SearchBar';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="xl:32 2xl:64 relative h-20 px-4 md:px-8 lg:px-16 dark:" dir="rtl">
            {/* الشاشات الصغيرة */}
            <div className="flex h-full items-center justify-between md:hidden">
                <a href="/" className="flex items-center gap-3">
                    <AppLogoIcon aria-label="الشعار" />
                    <h1 className="sr-only text-xl tracking-wide">المتجر المفتوح</h1>
                </a>
                <Menu />
            </div>
            {/* الشاشات الأكبر */}
            <div className="hidden h-full items-center justify-between gap-8 md:flex">
                {/* القسم الأيسر */}
                <div className="flex w-1/3 items-center gap-12 xl:w-1/2">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">متجرك</span>
                            <img alt="الشعار" src="/dukkan-logo.svg" className="h-12 w-auto" />
                            <h1 className="sr-only text-xl tracking-wide">المتجر المفتوح</h1>
                        </a>
                    </div>
                    <div className="hidden gap-4 xl:flex">
                        <a href="/">الرئيسية</a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsVisible(!isVisible);
                            }}
                        >
                            التصنيفات
                        </a>
                        <a href="/">المتجر</a>
                        <a href="/">العروض</a>
                        <a href="/">من نحن</a>
                        <a href="/">اتصل بنا</a>
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
