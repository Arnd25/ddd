"use client"
import React, {useEffect} from 'react';
import { IoMdClose } from "react-icons/io";
import {cn} from "@/lib/utils";

import {Button} from "@/components/ui/button";

interface IDiscountProps {
    isOpen: boolean;
    onClose: () => void;
}

const DiscountMenu = ({ isOpen, onClose }: IDiscountProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        }
    }, [isOpen]);
    return (
        <div>
            <div onClick={onClose} className={cn("fixed inset-0 z-40 bg-black/30 backdrop-blur-md transition-opacity duration-200", isOpen ? "opacity-100 visible" : "opacity-0 invisible" )} />
            <aside className={cn("fixed place-self-center lg:max-w-2/5 bottom-1/4 p-5 bg-indigo-950 z-50 duration-300 rounded-4xl opacity-0", isOpen ? "translate-y-0 opacity-100" : "translate-y-full bottom-[-1000]")}>
                <div className="w-full relative">
                    <Button onClick={onClose} className="text-white absolute -top-2 -right-3 p-5 bg-transparent hover:bg-transparent cursor-pointer">
                        <IoMdClose className={"size-8"}/>
                    </Button>
                    <div className="flex flex-col gap-5">
                        <p className="font-bold text-2xl">Детские билет в кино со скидкой 60%</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto aut consequuntur ipsa, magni modi quis quod repudiandae similique. Ad adipisci atque debitis dicta ea fugit iste magni, perspiciatis quisquam quod? Ab blanditiis commodi corporis cumque distinctio dolorum eaque hic inventore laboriosam, magnam necessitatibus nihil quam quisquam reprehenderit suscipit totam ut, vel! Accusamus blanditiis commodi cum, eius enim error, esse ex exercitationem facilis fuga ipsa ipsam iusto magnam molestias necessitatibus nesciunt nihil nobis obcaecati officiis placeat repellat soluta tempora vitae voluptas voluptatum! Autem consectetur cupiditate, debitis dolores eius, eveniet ipsum laboriosam perferendis quae quis sunt tempora, ullam veniam voluptatum.</p>
                    </div>
                     </div>
            </aside>
        </div>
    );
};

export default DiscountMenu;
