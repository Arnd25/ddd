import {HeroSection} from "@/widgets/hero";

import {SoonSection} from "@/widgets/soon/soonSection";
import DiscountSection from "@/widgets/discount/DiscountSection";
import NewsSection from "@/widgets/news/NewsSection";
import PostersSection from "@/widgets/posters/postersSection";

export default function Home() {
  return (
      <div>
          <HeroSection />
          <PostersSection className="pb-32"/>
          <SoonSection className="pb-32"/>
          <DiscountSection className="pb-32"/>
          <NewsSection className="pb-32"/>
      </div>
  );
}