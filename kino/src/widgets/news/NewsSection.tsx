import React from 'react';
import Container from "@/components/shared/container";
import NewsCards from "@/widgets/news/modules/NewsCards";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
}

const NewsSection: React.FC<Props> = ({ className }) => {
    return (
        <section className={cn(className, "")} id="news">
            <Container className="flex flex-col gap-y-14" >
                <h2 className="text-4xl font-bold">Новости</h2>
                <NewsCards/>
            </Container>
        </section>
    );
};

export default NewsSection;