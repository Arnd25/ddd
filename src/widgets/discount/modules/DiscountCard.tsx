"use client"
import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import DiscountMenu from "@/widgets/discount/mobile-menu";
import DiscountButton from "@/widgets/discount/MobileButton";

const DiscountCard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className=" flex flex-col gap-y-10">
            <div className="bg-[#341B43] flex flex-col lg:flex-row py-7 px-3 lg:px-16 rounded-3xl justify-between gap-x-40 gap-y-14">
                <div className="bg-[linear-gradient(to_left,rgba(203,45,234,1),rgba(255,64,64,1))] w-full rounded-3xl py-7 px-14 justify-between  flex flex-col lg:order-2 h-[300]">
                    <h3 className="font-bold text-3xl">Детский билет </h3>
                    <p className="text-2xl font-bold w-fit py-0.5 px-7 bg-red-600">Скидка 60 %</p>
                    <p className="text-2xl font-semibold">Детям до 12 лет</p>
                </div>
                <div className="max-w-[480]  flex flex-col justify-between lg:order-1 gap-y-8">
                    <h3 className="font-bold text-2xl">Детские билет в кино со скидкой 60%</h3>
                    <p className="text-xl text-gray-500 leading-5">Для детей до 12 лет (включительно) действует специальный детский билет по приятной цене — или даже бесплатно на утренние сеансы мультфильмов.</p>
                    <DiscountButton onOpenMenu={() => setMenuOpen(true)} />
                </div>
            </div>
            <div className="bg-[#341B43] flex flex-col lg:flex-row py-7 px-3 lg:px-16 rounded-3xl justify-between gap-x-40 gap-y-14">
                <div className="bg-[linear-gradient(to_left,rgba(203,45,234,1),rgba(255,64,64,1))] w-full rounded-3xl py-7 px-14 justify-between  flex flex-col  h-[300]">
                    <h3 className="font-bold text-3xl">Детский билет </h3>
                    <p className="text-2xl font-bold w-fit py-0.5 px-7 bg-red-600">Скидка 60 %</p>
                    <p className="text-2xl font-semibold">Детям до 12 лет</p>
                </div>
                <div className="max-w-[480]  flex flex-col justify-between  gap-y-8">
                    <h3 className="font-bold text-2xl">Детские билет в кино со скидкой 60%</h3>
                    <p className="text-xl text-gray-500 leading-5">Для детей до 12 лет (включительно) действует специальный детский билет по приятной цене — или даже бесплатно на утренние сеансы мультфильмов.</p>
                    <DiscountButton onOpenMenu={() => setMenuOpen(true)} />
                </div>
            </div>
            <DiscountMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
        </div>


    );
};

export default DiscountCard;
