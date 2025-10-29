import img from "../../../../public/static/kino.png"
import { StaticImageData } from 'next/image';

interface SoonCardProps {
    title: string;
    genres: string[];
    image: StaticImageData;
    age: number;
    data: string;
    href: string;
}

export const SoonCardProps: SoonCardProps[] = [
    {
        title: "Название",
        genres: ["фантастика"],
        image: img,
        age:16,
        data: '25.02.2026',
        href: "",
    },
    {
        title: "Название",
        genres: ["фантастика"],
        image: img,
        age:16,
        data: '25.02.2026',
        href: "",
    },
    {
        title: "Название",
        genres: ["фантастика"],
        image: img,
        age:16,
        data: '25.02.2026',
        href: "",
    },

]


