import HeroSection from "@/components/layout/HeroSection";
import NavBar from "@/components/layout/NavBar";
import Lanyard from "@/components/ui/Lanyard";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col items-center">
      <NavBar />
      <HeroSection />
      <div className="absolute top-0 left-0 w-full h-full">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}
