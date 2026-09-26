"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

// Lucide dropped brand icons — using inline SVGs instead
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: LinkedInIcon },
  { name: "X / Twitter", href: "#", icon: XIcon },
  { name: "Instagram", href: "#", icon: InstagramIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "var(--vcmv-charcoal)" }}
      className="relative overflow-hidden"
    >
      {/* ── Top gold rule ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: "color-mix(in srgb, var(--vcmv-gold) 25%, transparent)" }}
      />

      {/* ── Split section: Nav left | Contact right ── */}
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 md:gap-8 lg:gap-12 lg:gap-16 lg:gap-0 pt-16 pb-10"
        style={{ borderBottom: "1px solid color-mix(in srgb, var(--vcmv-gold) 12%, transparent)" }}
      >
        {/* Left — Navigation + Socials */}
        <div
          className="flex flex-col justify-between lg:pr-16"
          style={{ borderRight: "0px" }}
        >
          {/* Logo mark */}
          <div className="mb-10">
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--vcmv-ivory)",
                letterSpacing: "0.02em",
              }}
            >
              VCMV{" "}
              <span style={{ color: "var(--vcmv-gold)", fontWeight: 400 }}>
                &amp; Associates LLP
              </span>
            </span>
            <p
              className="mt-1 text-xs tracking-[0.18em] uppercase"
              style={{ color: "var(--vcmv-taupe)", fontFamily: "var(--font-inter)" }}
            >
              Chartered Accountants &amp; Advisors
            </p>
          </div>

          {/* Nav links */}
          <nav className="mb-12">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-xs tracking-[0.18em] uppercase transition-colors duration-200"
                    style={{
                      color: "color-mix(in srgb, var(--vcmv-cream) 55%, transparent)",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--vcmv-gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "color-mix(in srgb, var(--vcmv-cream) 55%, transparent)";
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
                    color: "color-mix(in srgb, var(--vcmv-cream) 50%, transparent)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--vcmv-gold)";
                    el.style.color = "var(--vcmv-gold)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)";
                    el.style.color = "color-mix(in srgb, var(--vcmv-cream) 50%, transparent)";
                  }}
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right — Contact block */}
        <div
          className="flex flex-col justify-between lg:pl-16"
          style={{ borderLeft: "1px solid color-mix(in srgb, var(--vcmv-gold) 12%, transparent)" }}
        >
          {/* Statement */}
          <div className="mb-10">
            <p
              className="uppercase tracking-[0.18em] leading-relaxed"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.72rem",
                fontWeight: 500,
                color: "var(--vcmv-ivory)",
                letterSpacing: "0.18em",
                lineHeight: 1.85,
              }}
            >
              A multidisciplinary firm of
              <br />
              chartered accountants delivering
              <br />
              expertise that creates lasting value.
            </p>
          </div>

          {/* Contact prompt */}
          <div className="mb-8">
            <p
              className="uppercase tracking-[0.15em] mb-4"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.68rem",
                color: "color-mix(in srgb, var(--vcmv-cream) 40%, transparent)",
              }}
            >
              Have a tax, advisory or regulatory challenge?
              <br />
              Let&apos;s find the right way forward.
            </p>

            {/* Start a project link */}
            <Link
              href="/contact"
              className="inline-block text-xs tracking-[0.18em] uppercase transition-colors duration-200"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                color: "var(--vcmv-gold)",
                textDecoration: "none",
                paddingBottom: "3px",
                borderBottom: "1px solid color-mix(in srgb, var(--vcmv-gold) 40%, transparent)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--vcmv-gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "color-mix(in srgb, var(--vcmv-gold) 40%, transparent)";
              }}
            >
              Start a Conversation →
            </Link>
          </div>

          {/* Email */}
          <div className="mb-10">
            <Link
              href="mailto:contact@vcmvassociates.com"
              className="inline-flex items-center gap-2 transition-colors duration-200"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.8rem",
                color: "color-mix(in srgb, var(--vcmv-cream) 60%, transparent)",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--vcmv-ivory)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "color-mix(in srgb, var(--vcmv-cream) 60%, transparent)";
              }}
            >
              <Mail className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "var(--vcmv-gold)" }} />
              contact@vcmvassociates.com
            </Link>
          </div>

          {/* Copyright */}
          <p
            className="text-xs uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-inter)",
              color: "color-mix(in srgb, var(--vcmv-cream) 25%, transparent)",
              fontWeight: 300,
            }}
          >
            &copy; {year} VCMV &amp; Associates LLP. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── Oversized Brand Wordmark ── */}
      <div
        className="relative overflow-hidden"
        style={{ borderBottom: "1px solid color-mix(in srgb, var(--vcmv-gold) 12%, transparent)" }}
      >
        <div
          className="whitespace-nowrap text-center select-none leading-none py-4"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 700,
            fontSize: "clamp(5rem, 18vw, 18rem)",
            color: "color-mix(in srgb, var(--vcmv-gold) 7%, transparent)",
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
          }}
          aria-hidden="true"
        >
          VCMV
        </div>

        {/* Centred tagline over the wordmark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p
            className="text-center text-xs uppercase tracking-[0.28em]"
            style={{
              fontFamily: "var(--font-inter)",
              color: "color-mix(in srgb, var(--vcmv-gold) 45%, transparent)",
              fontWeight: 400,
            }}
          >
            Experience &nbsp;·&nbsp; Integrity &nbsp;·&nbsp; Value
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <p
          className="text-xs uppercase tracking-[0.14em]"
          style={{
            fontFamily: "var(--font-inter)",
            color: "color-mix(in srgb, var(--vcmv-cream) 20%, transparent)",
            fontWeight: 300,
          }}
        >
          CA · Tax · Assurance · Business Advisory
        </p>
        <div className="flex items-center gap-4">
          {["Privacy Policy", "Terms of Use", "Disclaimer"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-xs tracking-wide transition-colors duration-200"
              style={{
                fontFamily: "var(--font-inter)",
                color: "color-mix(in srgb, var(--vcmv-cream) 20%, transparent)",
                textDecoration: "none",
                fontWeight: 300,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "color-mix(in srgb, var(--vcmv-cream) 50%, transparent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "color-mix(in srgb, var(--vcmv-cream) 20%, transparent)";
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
