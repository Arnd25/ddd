"use client"
import React from 'react';
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import { LuAlignJustify } from "react-icons/lu";

interface IDiscountProps {
    className?: string;
    onOpenMenu?: () => void;
}

const DiscountButton = ({ className, onOpenMenu }: IDiscountProps) => {
    return (
        <div className={cn(className, "")}>
            <ul className="flex items-center gap-x-2">
                <li className="block">
                    <Button onClick={onOpenMenu} variant={"destructive"} className=" text-white cursor-pointer py-5 px-6">
                        Подробнее
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export default DiscountButton;
