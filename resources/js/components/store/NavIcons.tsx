"use client"
import { useState } from "react";
import CartModal from "./CartModal";
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { DropdownMenuItem, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOut, Settings } from "lucide-react";
import { UserInfo } from "../user-info";
import { useMobileNavigation } from "@/hooks/use-mobile-navigation";


const NavIcons = () => {
    const { auth } = usePage<SharedData>().props;
    const cleanup = useMobileNavigation();
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="flex gap-4 xl:gap-6 relative">
            {
                auth.user ? (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <img src="/profile.png" alt="profile" width={22} height={22} className="cursor-pointer" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <div className="flex justify-center items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <UserInfo user={auth.user} showEmail={true} />
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className="w-full inline-flex justify-start items-center" href={route('profile.edit')} as="button" prefetch onClick={cleanup}>
                                        <Settings className="mr-2" />
                                        Settings
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className="w-full inline-flex justify-start items-center" method="post" href={route('logout')} as="button" onClick={cleanup}>
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
                                <img src="/profile.png" alt="profile" width={22} height={22} className="cursor-pointer" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link
                                        href={route('login')} onClick={cleanup}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href={route('register')} onClick={cleanup}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Register
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                )
            }
            <img src="/notification.png" alt="notification" width={22} height={22} className="cursor-pointer" />
            <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
                <img src="/cart.png" alt="cart" width={22} height={22} />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-lightPink rounded-full text-sm text-center text-white">
                    2
                </div>
            </div>
            {
                isCartOpen && (
                    <CartModal />
                )
            }

        </div>
    )
}

export default NavIcons