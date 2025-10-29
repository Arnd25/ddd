import React from 'react';
import Container from "@/components/shared/container";
import DiscountCard from "@/widgets/discount/modules/DiscountCard";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
}

export const DiscountSection: React.FC<Props> = ({ className }) => {
    return (
        <section className={cn(className, "")} id="discounts">
            <Container className="flex flex-col gap-y-14">
                <h2 className="font-bold text-3xl">Акции и скидки</h2>
                <DiscountCard/>
            </Container>
        </section>
    );
};

export default DiscountSection;