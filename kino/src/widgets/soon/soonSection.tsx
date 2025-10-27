import {cn} from "@/lib/utils";
import Container from "@/components/shared/container";
import SoonCards from "@/widgets/soon/ui/SoonCards";




interface Props {
    className?: string;
}

export const SoonSection: React.FC<Props> = ({ className }) => {
    return(
        <section className={cn(className, "")} id="soon">
            <Container className="w-full flex flex-col gap-10">
                <p className="text-white font-bold text-3xl">Скоро в кино</p>
                <SoonCards/>
            </Container>
        </section>
);
};


