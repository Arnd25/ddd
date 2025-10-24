import {cn} from "@/lib/utils";
import Container from "@/components/shared/container";
import Link from "next/link";




interface Props {
    className?: string;
}

export const PostersSection: React.FC<Props> = ({ className }) => {
    return(
        <section className={cn(className, "")}>
            <Container className="w-full gap-10   min-h-[700] pt-56">
                <div className="w-full border-b-1 flex text-white py-6 font-medium gap-x-16 text-xl px-10 border-b-gray-500">
                    <Link href="" className="active:text-red-500 hover:text-red-600"> Сегодня </Link>
                    <Link href="" className="active:text-red-500 hover:text-red-600"> Завтра </Link>
                </div>
                <div className=""></div>
            </Container>
        </section>
    );
};


