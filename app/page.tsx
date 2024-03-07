import AboutMe from "@/components/AboutMe";
import AboutMe2 from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe2 />
      <Work />
    </div>
  );
}
