import FeaturedProjects from "@/components/layout/FeaturedProjects";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/HeroSection";
import NavBar from "@/components/layout/NavBar";
import TechStack from "@/components/layout/TechStack";
import Lanyard from "@/components/ui/Lanyard";
import AboutMe from "@/components/layout/AboutMe";
import Experience from "@/components/layout/Experience";
import Contact from "@/components/layout/Contact";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col items-center">
      <NavBar />
      <div className="absolute inset-0 w-1/2 top-0 left-0 z-50">
        <Lanyard position={[4, 0, 15]} gravity={[0, -40, 0]} />
      </div>
      <HeroSection />
      <AboutMe />
      <TechStack />
      <Experience />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </div>
  );
}
