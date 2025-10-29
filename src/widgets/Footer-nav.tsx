import React from 'react';
import {MENU_DATA} from "@/data/menu.data";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface IFooterNavProps {
    className?: string;
}
const FooterNav = ({className} : IFooterNavProps) => {
    return (
        <div className={cn(className,'pt-3 order-2 md:order-3')}>
            <nav className="w-full flex flex-col gap-8">
                <p className="text-2xl font-semibold">Информация</p>
                <menu className="pr-5 flex flex-col text-left gap-y-3 w-full">
                    {MENU_DATA.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="text-lg text-gray-400 hover:text-gray-200 transition-all duration-300">{item.label}</Link>
                        </li>
                    ))}
                </menu>
            </nav>
        </div>
    );
};

export default FooterNav;