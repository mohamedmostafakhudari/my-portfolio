"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { MotionDiv } from "@/app/use-client";
import { Variants, useCycle } from "framer-motion";
import Menu from "@/components/ui/menu/";
import NavItem from "@/components/ui/nav-item";
import Navigation from "@/components/ui/navigation";
const navItems = [
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



function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const navRef = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0,
      },
    );
    if (navRef && navRef.current) {
      observer.observe(navRef.current);
    }
    return () => observer.disconnect();
  }, [])

  const pathname = usePathname();
  return (
    <nav ref={navRef} className="fixed left-0 right-0 top-0 z-10 bg-white/20 text-foreground filter backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <div className="w-full">
          <Navigation className="hidden items-center justify-end gap-8 md:flex ">
            {navItems.map(({ label, href }) => (
              <NavItem
                key={`${label}-desktop`}
                label={label}
                href={href}
                pathname={pathname}
                className={`text-center`}
              />
            ))}
          </Navigation>
          <Menu
            isOpen={isOpen}
            toggleOpen={toggleOpen}
            className={"md:hidden"}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
