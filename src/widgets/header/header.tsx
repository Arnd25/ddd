"use client"
import React, {useState} from 'react';
import Image from "next/image";
import Container from "@/components/shared/container";
import NavMenu from "@/widgets/header/nav-menu";
import MobileMenu from "@/widgets/header/mobile-menu";
import logo from "../../../public/static/logo.svg";
import Link from "next/link";
import MobileButton from "@/widgets/header/MobileButton";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="w-full absolute" id='header'>
            <Container className="w-full flex items-center gap-x-16 text-white text-lg justify-between bg-black/60 backdrop-blur-sm rounded-b-2xl">
                <div className="flex items-center ">
                    <Link href={"/"}>
                        <Image src={logo} alt="Логотип сайта" className="" />
                    </Link>
                    <Link href="" className="flex items-center gap-x-1.5">
                        Волгоград
                    </Link>
                </div>
                <NavMenu className="flex-1 hidden lg:inline-flex max-w-fit" />
                <MobileButton onOpenMenu={() => setMenuOpen(true)} className="ml-auto md:ml-[unset] block lg:hidden" />
            </Container>
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </header>

    );
};

export default Header;
