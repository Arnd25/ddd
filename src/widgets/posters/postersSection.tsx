// /widgets/posters/ui/PostersSection.tsx

'use client'; // ← Обязательно, потому что используем useState

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Container from '@/components/shared/container';
import {TomorrowPosterCardProps , TodayPosterCardProps} from "@/widgets/posters/modules/PosterCardProps";
import PosterCard from "@/widgets/posters/ui/PosterCard";


interface PostersSectionProps {
    className?: string;
}

const PostersSection: React.FC<PostersSectionProps> = ({ className }) => {
    const [activeTab, setActiveTab] = useState<'today' | 'tomorrow'>('today');

    const currentData = activeTab === 'today' ? TodayPosterCardProps : TomorrowPosterCardProps;

    return (
        <section className={cn(className)} id="posters">
            <Container className="w-full">
                <div className="w-full border-b border-gray-500 flex text-white py-6 font-medium gap-x-16 text-xl px-10 transition-all duration-400 ">
                    <button onClick={() => setActiveTab('today')} className={activeTab === 'today' ? 'text-red-600' : ' hover:text-red-600  hover:cursor-pointer'}>
                        <p className="pb-2">Сегодня</p>
                        <div className={`h-[2px] bg-red-600 w-2/4 place-self-center rounded-full transition-all duration-200 ${activeTab === 'today' ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                            }`}
                        />
                    </button>
                    <button onClick={() => setActiveTab('tomorrow')} className={activeTab === 'tomorrow' ? 'text-red-600' : ' hover:text-red-600 hover:cursor-pointer'}>
                        <p className={"pb-2"}>Завтра</p>
                        <div className={`h-[2px] bg-red-600 w-2/4 place-self-center rounded-full transition-all duration-200 ${activeTab === 'tomorrow' ? 'opacity-100 scale-x-100' 
                            : 'opacity-0 scale-x-0'
                        }`}
                        />
                    </button>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-13 px-7">
                    {currentData.map((item, index) => (
                        <PosterCard key={index} {...item} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default PostersSection;