import {cn} from "@/lib/utils";
import Container from "@/components/shared/container";




interface Props {
    className?: string;
}

export const SectionUi: React.FC<Props> = ({ className }) => {
    return(
        <section className={cn(className, "bg-[url('/static/background.png')]")}>
            <Container className="w-full ">
                <div className="gap-10   min-h-[700] pt-56">
                    <h1 className="text-white text-5xl mb-12">Кино, которое объединяет</h1>
                    <p className="text-gray-400 max-w-md text-xl">Мощный звук, кристально чёткое изображение, удобные кресла и аромат свежего попкорна — всё создано, чтобы вы забыли о времени и окунулись в историю.</p>
                </div>
            </Container>
        </section>
    );
};











































