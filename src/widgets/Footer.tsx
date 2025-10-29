import React from 'react';
import Container from "@/components/shared/container";
import Logo from "../../public/static/logo.svg";
import Image from "next/image";
import FooterNav from "@/widgets/Footer-nav";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#1E062C] pt-2.5 pb-36 px-5">
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-20      ">
                    <div className="flex flex-col gap-9 items-start order-1 ">
                        <Link href="/"><Image src={Logo} alt={""} className="w-[430px]"/></Link>
                        <p className="max-w-[300] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus dolores et, eum fuga id laboriosam maxime odit quae reiciendis! Consequatur cumque doloremque quam quia quod tempore vero. Fugiat, iste!</p>
                    </div>
                    <FooterNav/>
                    <div className="flex flex-col gap-4 pt-3 order-3 md:order-2 lg:order-4 xl:order-3 ">
                        <p className="text-2xl font-semibold">Где нас найти:</p>
                        <div className="gap-5">
                            <p className="text-xl font-semibold">Адрес:</p>
                            <Link href={""} className="text-gray-400 text-xl font-semibold">Волгоград ул.аооаооа 24</Link>
                            <iframe className="w-full h-[200]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387132.4772381346!2d-74.25819214602015!3d40.70582517274754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1644558351325!5m2!1sen!2suk"/>
                        </div>
                    </div>
                    <div className="flex gap-5 self-start pt-2.5 order-4 md:order-3 lg:order-3 xl:order-4">
                        <Link href="https://www.youtube.com/" className="p-2 rounded-full border h-fit text-2xl"><FaYoutube/></Link>
                        <Link href="https://www.youtube.com/" className="p-2 rounded-full border h-fit text-2xl"><FaYoutube/></Link>
                        <Link href="https://www.youtube.com/" className="p-2 rounded-full border h-fit text-2xl"><FaYoutube/></Link>
                        <Link href="https://www.youtube.com/" className="p-2 rounded-full border h-fit text-2xl"><FaYoutube/></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;