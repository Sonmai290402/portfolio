"use client";

import Image from "next/image";
import { IoPlanet } from "react-icons/io5";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import GradientText from "../ui/GradientText";
import { Badge } from "../ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Fitlt Fashion Store",
    description:
      "FITLY is a fashion-focused e-commerce web application that allows users to browse, search, and purchase products with a seamless experience. It features advanced filtering, real-time cart updates, secure authentication, order tracking, and review functionalities. FITLY is designed with scalability, performance, and user experience in mind.",
    image: "/fitly.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Firebase"],
    liveUrl: "https://fitly-fashion-store.vercel.app/",
    githubUrl: "https://github.com/Sonmai290402/fitly-fashion-store",
    featured: true,
  },
  // {
  //   id: 2,
  //   title: "Realtime Chat App",
  //   description:
  //     "A modern messaging application supporting private and group conversations, real-time notifications, and media sharing. Designed for speed and reliability.",
  //   image: "/projects/chat-preview.png",
  //   tags: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: true,
  // },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(108,110,255,0.12)]">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-muted sm:h-56">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/10 to-transparent" />
        {/* Placeholder pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 opacity-30">
            <div className="h-16 w-16 rounded-xl bg-primary/40" />
            <div className="h-2 w-28 rounded-full bg-primary/30" />
            <div className="h-2 w-20 rounded-full bg-primary/20" />
          </div>
        </div>
        <Image
          src={project.image}
          alt={`Preview of ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => {}}
        />
        {project.featured && (
          <div className="absolute left-3 top-3">
            <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          {project.title}
        </h3>

        <p className="flex-1 text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 border-t border-border pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <FiGithub size={16} />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20"
            >
              <span>Live Demo</span>
              <FiExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-5 pt-24 sm:px-8 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <IoPlanet size={28} className="text-primary" />
            <GradientText
              colors={["#ffffff", "#a78bfa", "#6c6eff"]}
              animationSpeed={8}
              showBorder={false}
              className="text-2xl font-bold leading-tight tracking-tight"
            >
              Featured Projects
            </GradientText>
          </div>

          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Things I&apos;ve built with
            </h2>
            <GradientText
              colors={["#ffffff", "#a78bfa", "#6c6eff"]}
              animationSpeed={8}
              showBorder={false}
              className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              Care & Craft
            </GradientText>
          </div>

          {/* <p className="max-w-2xl text-base leading-8 tracking-wide text-muted-foreground md:text-lg">
            A collection of projects that reflect my journey as a frontend
            developer — from e-commerce to real-time apps, each one built to
            solve real problems.
          </p> */}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <button
            className="gradient-button px-10 py-6"
            onClick={() =>
              window.open("https://github.com/Sonmai290402", "_blank")
            }
          >
            <div className="gradient-button-blob1" />
            <div className="gradient-button-blob2" />
            <div className="gradient-button-inner flex items-center gap-2">
              <FiGithub size={18} className="text-primary" />
              <span className="text-sm font-medium">View All on GitHub</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
