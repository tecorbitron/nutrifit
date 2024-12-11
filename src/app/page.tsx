import AboutSection from "@/components/AboutSection";
import AboutTitleSection from "@/components/AboutTitleSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white">
      <Navbar />
      <HeroSection />
      <Services />
      <AboutSection />
      <AboutTitleSection />
    </section>
  );
}
