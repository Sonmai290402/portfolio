"use client";

import LogoLoop from "../ui/LogoLoop";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDocker, SiFigma, SiGit, SiRedux } from "react-icons/si";
import { IoLogoFirebase, IoPlanet } from "react-icons/io5";
import { BsClaude } from "react-icons/bs";
import ZustandIcon from "../icons/ZustandIcon";
import GradientText from "../ui/GradientText";

const FRONTEND_TECHNOLOGIES = [
  { node: <FaReact />, title: "React", href: "https://react.dev" },
  { node: <RiNextjsFill />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <BsTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <RiTailwindCssFill />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <ZustandIcon width={60} height={60} />,
    title: "Zustand",
    href: "https://zustand.docs.pmnd.rs/learn/getting-started/introduction",
  },
  {
    node: <SiRedux />,
    title: "Redux",
    href: "https://redux.js.org",
  },
];

const TOOL_TECHNOLOGIES = [
  {
    node: <SiGit />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    node: <IoLogoFirebase />,
    title: "Firebase",
    href: "https://www.firebase.com",
  },
  {
    node: <BsClaude />,
    title: "Claude",
    href: "https://www.anthropic.com",
  },
];

const TechStack = () => {
  return (
    <div className="w-full max-w-[1440px] h-screen relative flex flex-col gap-10 items-center justify-center">
      <div className="flex items-center gap-2">
        <IoPlanet size={28} className="text-primary" />
        <GradientText
          colors={["#ffffff", "#a78bfa", "#6c6eff"]}
          animationSpeed={4}
          showBorder={false}
          className="text-2xl font-bold tracking-tight leading-tight"
        >
          Tech Stack
        </GradientText>
      </div>
      <div className="px-32 w-full">
        <LogoLoop
          logos={FRONTEND_TECHNOLOGIES}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology Stacks"
        />
      </div>
      <div className="px-48 w-full">
        <LogoLoop
          logos={TOOL_TECHNOLOGIES}
          speed={100}
          direction="right"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology Stacks"
        />
      </div>
    </div>
  );
};

export default TechStack;
