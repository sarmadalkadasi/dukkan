'use client';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Bell, LayoutDashboard, LogOut, Settings, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { UserInfo } from '../user-info';
import CartModal from './CartModal';

const NavIcons = () => {
    const { auth, totalPrice, totalQuantity } = usePage<SharedData>().props;
    const cleanup = useMobileNavigation();
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="relative flex gap-4 xl:gap-6">
            {auth.user ? (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <User size={22} className="cursor-pointer text-[#1b1b18] dark:text-white" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <div className="flex items-center justify-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <UserInfo user={auth.user} showEmail={true} />
                                </div>
                            </DropdownMenuItem>
                            {auth.user.rule === 'vendor' && (
                                <DropdownMenuItem asChild>
                                    <a className="block w-full" href={route('filament.vendor.pages.dashboard')} onClick={cleanup}>
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </a>
                                </DropdownMenuItem>
                            )}
                            <DropdownMenuItem>
                                <Link
                                    className="inline-flex w-full items-center justify-start"
                                    href={route('profile.edit')}
                                    as="button"
                                    prefetch
                                    onClick={cleanup}
                                >
                                    <Settings className="mr-2" />
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    className="inline-flex w-full items-center justify-start"
                                    method="post"
                                    href={route('logout')}
                                    as="button"
                                    onClick={cleanup}
                                >
                                    <LogOut className="mr-2" />
                                    Log out
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            ) : (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center justify-center rounded-full">
                                <User size={22} className="cursor-pointer text-[#1b1b18] dark:text-white" />{' '}
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link
                                    href={route('login')}
                                    onClick={cleanup}
                                    className="mr-4 inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    تسجيل دخول
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    href={route('register')}
                                    onClick={cleanup}
                                    className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    إنشاء حساب
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            )}
            <Bell size={22} className="cursor-pointer text-[#1b1b18] dark:text-white" />
            <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
                <ShoppingCart size={24} className="h-6 w-6 text-[#1b1b18] dark:text-white" />
                <div className="absolute -top-5 -right-4 h-6 w-5 rounded-full bg-blue-700 text-center text-white">{totalQuantity}</div>
            </div>
            {isCartOpen && <CartModal />}
        </div>
    );
};

export default NavIcons;
