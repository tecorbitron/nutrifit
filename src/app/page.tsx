import AboutSection from "@/components/AboutSection";
import AboutTitleSection from "@/components/AboutTitleSection";
import ConsultBanner from "@/components/ConsultBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HighNutrition from "@/components/HighNutrition";
import Services from "@/components/Services";

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
      <Footer />
    </section>
  );
}
