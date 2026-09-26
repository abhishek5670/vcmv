"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { navItems } from "@/content/site-content";

export default function VCMVNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        {/* Logo */}
        <a
          href="/"
          className="relative z-20 flex items-center gap-2 px-2 py-1 no-underline"
          style={{ textDecoration: "none" }}
        >
          <span
            className="text-base font-semibold tracking-tight text-white group-[.is-scrolled]:text-[var(--vcmv-charcoal)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", letterSpacing: "0.01em" }}
          >
            VCMV <span className="font-normal text-white group-[.is-scrolled]:text-[var(--vcmv-gold)] transition-colors duration-300">&amp; Associates</span>
            <span
              className="block text-[10px] tracking-[0.18em] uppercase font-normal text-white/80 group-[.is-scrolled]:text-[var(--vcmv-taupe)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              LLP
            </span>
          </span>
        </a>

        {/* Nav Links */}
        <NavItems items={navItems} />

        {/* CTA */}
        <div className="flex items-center gap-3 relative z-30">
          <NavbarButton
            variant="secondary"
            href="#contact"
            className="hidden lg:inline-block text-white group-[.is-scrolled]:hidden"
          >
            Contact
          </NavbarButton>
          <NavbarButton variant="primary" href="#contact">
            Let&apos;s Talk
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          {/* Logo */}
          <a href="/" className="relative z-20 flex items-center gap-2 px-2">
            <span
              className="text-base font-semibold text-white group-[.is-scrolled]:text-[var(--vcmv-charcoal)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem" }}
            >
              VCMV <span className="font-normal text-white group-[.is-scrolled]:text-[var(--vcmv-gold)] transition-colors duration-300">&amp; Associates LLP</span>
            </span>
          </a>
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
