import React from 'react';
import Image from "next/image";
import {NewscardProps} from "@/widgets/news/Ui/NewscardProps";
import Link from "next/link";

const NewsCards = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            {NewscardProps.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 ">
                    <Image src={item.image} alt={""} className="w-full h-[250]"/>
                    <div className="flex flex-col px-5 gap-5">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <Link href={item.href} className="text-blue-400 text-xl">Подробнее...</Link>
                        </div>
                        <p className="text-2xl font-semibold text-gray-500">{item.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewsCards;