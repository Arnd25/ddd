import React from 'react';
import Image from 'next/image';
import { PosterCardProps } from '../modules/PosterCardProps';
import Link from "next/link";
const PosterCard: React.FC<PosterCardProps> = ({ title, genres, image, age, href }) => {
    return (
        <li className="text-white list-none relative">
            <Link href={href}>
                <Image src={image} alt={title} className="max-h-[300px] object-cover object-center rounded-t-2xl w-full"/>
                <div className="bg-[#230B38] rounded-b-2xl p-5 gap-3">
                    <p className="font-bold text-2xl">{title}</p>
                    <ul className="text-lg flex gap-2 pl-2.5 text-gray-400">
                        {genres.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <p className="absolute top-2.5 right-2.5 bg-black/60 font-medium text-xl rounded-xl px-5 py-2.5 backdrop-blur-sm">{age}+</p>
            </Link>
        </li>
    );
};

export default PosterCard;