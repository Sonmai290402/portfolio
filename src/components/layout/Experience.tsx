"use client";

import { MdWorkHistory } from "react-icons/md";
import GradientText from "../ui/GradientText";

type ExperienceItem = {
  year: string;
  role: string;
  description: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    year: "2026",
    role: "Frontend Developer",
    description:
      "Continued building and refining real-world web interfaces with a stronger focus on user experience, clean UI structure, responsive design, and maintainable frontend architecture. I also explored AI-assisted workflows to improve development speed, problem-solving, and productivity.",
  },
  {
    year: "2025",
    role: "Frontend Developer",
    description:
      "Contributed to production-level web applications by building responsive UI components, integrating APIs, handling complex forms, and improving user workflows. This experience helped me understand how frontend development works in real product environments, from collaboration to code quality and maintainability.",
  },
  {
    year: "2024",
    role: "Project-Based Frontend Development",
    description:
      "Joined as a frontend intern and supported several web projects by implementing UI components, fixing layout issues, improving responsive interfaces, and assisting with frontend tasks under team guidance. This experience helped me get familiar with real project workflows, collaboration, and code structure.",
  },
  {
    year: "2023",
    role: "Web Development Foundation",
    description:
      "Built my foundation in frontend development through continuous practice with HTML, CSS, JavaScript, React, and modern UI patterns. I focused on understanding how websites are structured, how users interact with interfaces, and how to create clean, responsive layouts.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden px-5 pb-24 sm:px-8 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[400px] w-[600px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <MdWorkHistory size={28} className="text-primary" />
            <GradientText
              colors={["#ffffff", "#a78bfa", "#6c6eff"]}
              animationSpeed={8}
              showBorder={false}
              className="text-2xl font-bold leading-tight tracking-tight"
            >
              Experience
            </GradientText>
          </div>

          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              My journey as a
            </h2>
            <GradientText
              colors={["#ffffff", "#a78bfa", "#6c6eff"]}
              animationSpeed={8}
              showBorder={false}
              className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              Frontend Developer
            </GradientText>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col">
          {/* Center vertical line — hidden on mobile, shown md+ */}
          <div className="absolute left-4 top-0 h-full w-px bg-linear-to-b from-primary/60 via-primary/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-0">
            {EXPERIENCES.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className="group relative flex pb-14 last:pb-0 md:items-start"
                >
                  {/* Mobile layout: simple left-aligned */}
                  <div className="flex gap-6 md:hidden">
                    {/* Dot */}
                    <div className="relative flex shrink-0 flex-col items-center pt-1">
                      <div className="relative z-10 h-3 w-3 rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-125 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(108,110,255,0.6)]" />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-bold tabular-nums text-primary">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {item.role}
                      </h3>
                      <p className="text-base leading-8 tracking-wide text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop layout: alternating */}
                  <div className="hidden w-full md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8">
                    {/* Left slot */}
                    {isLeft ? (
                      <div className="flex flex-col gap-2 pr-8 text-right">
                        <span className="text-sm font-bold tabular-nums text-primary">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
                          {item.role}
                        </h3>
                        <p className="text-base leading-8 tracking-wide text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}

                    {/* Center dot */}
                    <div className="flex flex-col items-center pt-1">
                      <div className="relative z-10 h-3 w-3 rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-125 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(108,110,255,0.6)]" />
                    </div>

                    {/* Right slot */}
                    {!isLeft ? (
                      <div className="flex flex-col gap-2 pl-8">
                        <span className="text-sm font-bold tabular-nums text-primary">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
                          {item.role}
                        </h3>
                        <p className="text-base leading-8 tracking-wide text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
