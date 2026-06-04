import HeroSection from "@/components/layout/HeroSection";
import NavBar from "@/components/layout/NavBar";
import Lanyard from "@/components/ui/Lanyard";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col items-center">
      <NavBar />
      <HeroSection />
      <div className="absolute inset-0 w-1/2 top-0 left-0 z-0">
        <Lanyard position={[4, 0, 15]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}
