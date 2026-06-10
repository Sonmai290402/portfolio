"use client";

import { IoIosPlanet } from "react-icons/io";
import GradientText from "../ui/GradientText";
import { IoIosRocket } from "react-icons/io";

const AboutMe = () => {
  return (
    <div className="w-full max-w-7xl px-16 h-screen relative flex flex-col gap-10">
      <div className="flex items-center gap-2">
        <IoIosPlanet size={28} className="text-primary" />
        <GradientText
          colors={["#ffffff", "#a78bfa", "#6c6eff"]}
          animationSpeed={8}
          showBorder={false}
          className="text-2xl font-bold tracking-tight leading-tight"
        >
          About Me
        </GradientText>
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight leading-tight">
          Crafting digital experiences with
        </h1>
        <GradientText
          colors={["#ffffff", "#a78bfa", "#6c6eff"]}
          animationSpeed={8}
          showBorder={false}
          className="text-4xl font-bold tracking-tight leading-tight"
        >
          Passion & Purpose
        </GradientText>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground text-base tracking-widest">
          I&apos;m a frontend developer who enjoys crafting clean, thoughtful,
          and engaging digital experiences. I care about both how a product
          looks and how it feels to use, from responsive layouts to smooth
          interactions and small visual details.
        </p>
        <p className="text-muted-foreground text-base tracking-widest">
          Through my projects, I’ve built interfaces for e-commerce platforms,
          realtime chat applications, QR ordering systems, and modern landing
          pages. Each project helps me improve the way I think about user
          experience, structure, and product quality.
        </p>
      </div>
      <button className="gradient-button w-fit px-10 py-6">
        <div className="gradient-button-blob1"></div>
        <div className="gradient-button-blob2"></div>
        <div className="gradient-button-inner flex items-center gap-2">
          <IoIosRocket size={20} className="text-primary" />
          <span className="text-sm">Explore My Projects</span>
        </div>
      </button>
    </div>
  );
};

export default AboutMe;
