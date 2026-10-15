"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
  useNavbar,
} from "@/components/ui/resizable-navbar";
import { navItems } from "@/content/site-content";

function NavbarBrandLogo({
  visible: propVisible,
  className = "h-8 md:h-10",
}: {
  visible?: boolean;
  className?: string;
}) {
  const { visible: contextVisible } = useNavbar();
  const isScrolled = propVisible ?? contextVisible;

  return (
    <div className="relative flex items-center">
      <img
        src="/VCMV-white.png"
        alt="VCMV Logo"
        className={cn(
          "w-auto object-contain transition-opacity duration-300",
          className,
          isScrolled ? "opacity-0 absolute inset-0 pointer-events-none" : "opacity-100 relative"
        )}
      />
      <img
        src="/VCMV-logo.png"
        alt="VCMV Logo"
        className={cn(
          "w-auto object-contain transition-opacity duration-300",
          className,
          isScrolled ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
        )}
      />
    </div>
  );
}

export default function VCMVNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        {/* Logo */}
        <Link
          href="/"
          className="relative z-20 flex items-center px-2 py-1 no-underline"
          style={{ textDecoration: "none" }}
        >
          <NavbarBrandLogo className="h-16 w-24" />
        </Link>

        {/* Nav Links */}
        <NavItems items={navItems} />

        {/* CTA */}
        <div className="flex items-center gap-3 relative z-30">
          <NavbarButton variant="primary" href="/contact">
            Let&apos;s Talk
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          {/* Logo */}
          <Link href="/" className="relative z-20 flex items-center px-1">
            <NavbarBrandLogo className="h-10 sm:h-9" />
          </Link>
          <div className="relative z-30">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm tracking-wide py-1 transition-colors duration-200"
              style={{ color: "var(--vcmv-taupe)", fontFamily: "var(--font-inter)" }}
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-3 pt-2 border-t" style={{ borderColor: "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)" }}>
            <NavbarButton
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full text-center relative z-30"
            >
              Let&apos;s Talk
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
