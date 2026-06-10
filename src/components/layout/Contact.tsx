"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import GradientText from "../ui/GradientText";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "sonmai290402@gmail.com",
    href: "mailto:sonmai290402@gmail.com",
    icon: <Mail className="size-5" />,
    description: "Drop me a message",
  },
  {
    label: "Phone",
    value: "+84 352 623 179",
    href: "tel:+84352623179",
    icon: <Phone className="size-5" />,
    description: "Feel free to call me",
  },
  {
    label: "GitHub",
    value: "Sonmai290402",
    href: "https://github.com/Sonmai290402",
    icon: <FaGithub className="size-5" />,
    description: "See my code",
    external: true,
  },
  // {
  //   label: "LinkedIn",
  //   value: "Son Mai",
  //   href: "https://linkedin.com/in/sonmai",
  //   icon: <FaLinkedinIn className="size-5" />,
  //   description: "Let's connect",
  //   external: true,
  // },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <MdContactMail size={28} className="text-primary" />
            <GradientText
              colors={["#ffffff", "#a78bfa", "#6c6eff"]}
              animationSpeed={8}
              showBorder={false}
              className="text-2xl font-bold leading-tight tracking-tight"
            >
              Contact
            </GradientText>
          </div>

          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Let&apos;s work
            </h2>
            <GradientText
              colors={["#ffffff", "#a78bfa", "#6c6eff"]}
              animationSpeed={8}
              showBorder={false}
              className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              together
            </GradientText>
          </div>

          <p className="max-w-xl text-base leading-8 tracking-wide text-muted-foreground">
            I&apos;m open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out through any of the channels
            below.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(108,110,255,0.1)]"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {item.description}
                </p>
                <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {item.value}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
