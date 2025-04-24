import { type User } from '@/types';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';


export default function DropdownProfile({ user, showEmail = false }: { user: User; showEmail?: boolean }) {
    
    // <DropdownMenu>
    //     <DropdownMenuTrigger asChild>
    //         <button className="text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent group flex h-12 w-12 items-center justify-center rounded-full p-0">
    //             <Avatar className="h-full w-full">
    //                 <AvatarImage src={auth.user.avatar} alt={auth.user.name} className="h-full w-full object-cover" />
    //                 <AvatarFallback className="flex h-full w-full items-center justify-center rounded-full bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
    //                     {getInitials(auth.user.name)}
    //                 </AvatarFallback>
    //             </Avatar>
    //         </button>
    //     </DropdownMenuTrigger>

    //     <DropdownMenuContent className="mr-4 w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
    //         <UserMenuContent user={auth.user} />
    //     </DropdownMenuContent>
    // </DropdownMenu>;

    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                        alt="profile photo"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full"
                    />
                </MenuButton>
            </div>
            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">
                        <div className="flex items-center">
                            <img
                                alt="profile photo"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="size-8 rounded-full"
                            />
                            <div className="ml-3">
                                <span className="font-medium">{user.name}</span>
                                {showEmail && <span className="text-xs text-gray-500">{user.email}</span>}
                            </div>
                        </div>
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">
                        Settings
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">
                        Sign out
                    </a>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
}
