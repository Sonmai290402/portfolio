"use client";

import Image from "next/image";
import { IoIosPlanet, IoIosRocket } from "react-icons/io";
import GradientText from "../ui/GradientText";
import { Badge } from "../ui/badge";

const MAIN_TECHNOLOGIES = [
  {
    label: "React",
  },
  {
    label: "Next.js",
  },
  {
    label: "TypeScript",
  },
  {
    label: "Tailwind CSS",
  },
  {
    label: "Zustand",
  },
  {
    label: "Responsive Design",
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden px-5 py-24 sm:px-8 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 lg:flex-row lg:justify-between">
        {/* Left content */}
        <div className="flex w-full flex-col gap-8 lg:w-[52%]">
          <div className="flex items-center gap-2">
            <IoIosPlanet size={28} className="text-primary" />

            <GradientText
              colors={["#ffffff", "#a78bfa", "#6c6eff"]}
              animationSpeed={8}
              showBorder={false}
              className="text-2xl font-bold leading-tight tracking-tight"
            >
              About Me
            </GradientText>
          </div>

          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Crafting digital experiences with
            </h2>

            <GradientText
              colors={["#ffffff", "#a78bfa", "#6c6eff"]}
              animationSpeed={8}
              showBorder={false}
              className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              Passion & Purpose
            </GradientText>
          </div>

          <div className="flex max-w-2xl flex-col gap-5">
            <p className="text-base leading-8 tracking-wide text-muted-foreground md:text-lg">
              I&apos;m a frontend developer who enjoys crafting clean,
              thoughtful, and engaging digital experiences. I care about both
              how a product looks and how it feels to use, from responsive
              layouts to smooth interactions and small visual details.
            </p>

            <p className="text-base leading-8 tracking-wide text-muted-foreground md:text-lg">
              Through my projects, I&apos;ve built interfaces for e-commerce
              platforms, realtime chat applications, QR ordering systems, and
              modern landing pages. Each project helps me improve the way I
              think about user experience, structure, and product quality.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {MAIN_TECHNOLOGIES.map((technology) => (
              <Badge variant={"outline"} key={technology.label}>
                {technology.label}
              </Badge>
            ))}
          </div>

          <button className="gradient-button w-fit px-10 py-6">
            <div className="gradient-button-blob1" />
            <div className="gradient-button-blob2" />

            <div className="gradient-button-inner flex items-center gap-2">
              <IoIosRocket size={20} className="text-primary" />
              <span className="text-sm font-medium">Explore My Projects</span>
            </div>
          </button>
        </div>

        {/* Right image */}
        <div className="relative flex w-full justify-center lg:w-[42%]">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/20 blur-[120px]" />

          <Image
            src="/chibi-image.png"
            alt="3D chibi developer figure of Son Mai"
            width={1024}
            height={1536}
            className="h-auto w-full max-w-[320px] object-contain sm:max-w-[380px] lg:max-w-[460px] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
