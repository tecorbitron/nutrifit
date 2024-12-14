import AboutSection from "@/components/home/AboutSection";
import AboutTitleSection from "@/components/home/AboutTitleSection";
import ConsultBanner from "@/components/ConsultBanner";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/home/HeroSection";
import HighNutrition from "@/components/home/HighNutrition";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <section className="bg-white">
      <HeroSection />
      <Services />
      <AboutSection />
      <AboutTitleSection />
      <HighNutrition />
      <FAQ />
      <ConsultBanner />
    </section>
  );
}
