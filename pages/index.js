import Hero from "@/components/organisms/Hero";
import FeaturedSection from "@/components/organisms/FeaturedSection";
import { GridMain } from "@/components/styled/Grid-containerStyles";
import BenefitsSection from "@/components/organisms/BenefitsSection";
import { features } from "@/components/organisms/BenefitsSection";
import WhyUsSection from "@/components/organisms/WhyusSection";
import FooterSection from "@/components/organisms/FooterSEction";
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <BenefitsSection />
      <WhyUsSection />
      <FooterSection />
    </>
  );
}
