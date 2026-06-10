"use client";

import { Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const CONTACT_ITEMS = [
  {
    label: "Email",
    href: "mailto:sonmai@gmail.com",
    icon: <Mail className="size-4" />,
  },
  {
    label: "Phone",
    href: "tel:+84352623179",
    phone: "+84 352623179",
    icon: <Phone className="size-4" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Sonmai290402",
    icon: <FaGithub className="size-4" />,
  },
];

const Footer = () => {
  return (
    <div className="w-full max-w-7xl px-16 border-t border-border flex flex-col gap-6 items-center justify-center py-8">
      {/* <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-sm text-muted-foreground">Contact me via</p>
        <div className="flex gap-4">
          {CONTACT_ITEMS.map((item) =>
            item.phone ? (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    {item.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Call {item.phone}</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                href={item.href}
                key={item.label}
                target="_blank"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                {item.icon}
              </Link>
            ),
          )}
        </div>
      </div> */}
      <p className="text-sm text-muted-foreground">
        &copy; 2026 Son Mai. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
