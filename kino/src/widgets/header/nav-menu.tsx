import React from 'react';
import {MENU_DATA} from "@/data/menu.data";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface INavMenuProps {
    className?: string;
}
const NavMenu = ({className} : INavMenuProps) => {
    return (
        <div className={cn(className,'')}>
            <nav className="w-full">
                <menu className="pr-5 flex items-center gap-x-10 w-full">
                    {MENU_DATA.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="hover:text-red-600 font-normal">{item.label}</Link>
                        </li>
                    ))}


                </menu>
            </nav>
        </div>
    );
};

export default NavMenu;