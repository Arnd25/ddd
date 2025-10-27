import React from 'react';
import Image from "next/image";
import {SoonCardProps} from "@/widgets/soon/modules/SoonCardsProps";
import Link from "next/link";

const SoonCards = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pt-13 ">
            {SoonCardProps.map((item,index) => (
                <li key={index} className="text-white list-none relative">
                    <Link href={item.href}>
                        <Image src={item.image} alt={""} className="max-h-[300] object-cover object-center rounded-t-2xl w-full" />
                        <div className="bg-[#230B38] rounded-b-2xl p-5 gap-3 ">
                            <p className="font-bold text-2xl">{item.title}</p>
                            <div className="flex justify-between">
                                <ul className="text-lg flex gap-2 pl-2.5 text-gray-400">{item.genres.map((item,index) => (
                                    <li key={index}>{item}</li>
                                ))}</ul>
                                <p className="text-xl">с {item.data}</p>
                            </div>

                        </div>
                        <p className="absolute top-2.5 right-2.5 bg-black/60 font-medium text-2xl rounded-xl px-5 py-2.5 backdrop-blur-sm">{item.age}+</p>
                    </Link>
                </li>
    ))}
    </div>
);
};

export default SoonCards;