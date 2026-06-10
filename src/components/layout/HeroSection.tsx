"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Galaxy from "../ui/galaxy";
import { IoIosRocket } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="w-full h-screen relative flex items-center justify-center">
      <div className="w-full h-full absolute inset-0">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>
      <div className="max-w-7xl px-16 w-1/2 ml-auto z-10 flex flex-col justify-center gap-6 px-12 xl:px-20 py-8">
        <p className="text-muted-foreground text-base tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #6c6eff 100%)",
            }}
          >
            Mai The Son
          </span>
        </h1>
        <h2 className="text-2xl font-bold tracking-tight leading-tight text-primary">
          Frontend Developer
        </h2>
        <p className="text-muted-foreground text-base tracking-widest">
          I craft clean, thoughtful, and engaging digital experiences.
        </p>
        <button className="gradient-button w-fit px-10 py-6">
          <div className="gradient-button-blob1"></div>
          <div className="gradient-button-blob2"></div>
          <div className="gradient-button-inner flex items-center gap-2">
            <IoIosRocket size={20} className="text-primary" />
            <span className="text-sm">See About Me</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
