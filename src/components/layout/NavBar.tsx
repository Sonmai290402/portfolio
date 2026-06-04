"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };
  return (
    <div className="bg-white/10 backdrop-blur-sm flex lg:gap-10 py-4 lg:px-10 rounded-full gap-6 px-6 fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {NAV_ITEMS.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className={cn(
            "text-white/80 hover:text-primary transition-colors",
            isActive(item.href) && "text-primary",
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
