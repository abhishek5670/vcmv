"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
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
        {/* Left — Navigation */}
        <div
          className="flex flex-col justify-between lg:pr-16"
          style={{ borderRight: "0px" }}
        >
          {/* Logo mark */}
          <div className="mb-10">
            <Link href="/" className="inline-block" style={{ textDecoration: "none" }}>
              <img
                src="/VCMV-logo.png"
                alt="VCMV Logo"
                className="h-9 md:h-11 w-auto mb-2 object-contain"
              />
            </Link>
            <p
              className="mt-1 text-xs tracking-[0.18em] uppercase"
              style={{ color: "var(--vcmv-taupe)", fontFamily: "var(--font-inter)" }}
            >
              Chartered Accountants &amp; Advisors
            </p>
          </div>

          {/* Nav links */}
          <nav className="mb-6">
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

          {/* Office Timing */}
          <div className="mb-10">
            <p
              className="uppercase tracking-[0.15em] mb-1.5 text-[0.68rem]"
              style={{
                fontFamily: "var(--font-inter)",
                color: "var(--vcmv-gold)",
                fontWeight: 500,
              }}
            >
              Office Hours
            </p>
            <p
              className="text-xs tracking-wider"
              style={{
                fontFamily: "var(--font-inter)",
                color: "color-mix(in srgb, var(--vcmv-cream) 60%, transparent)",
                fontWeight: 300,
              }}
            >
              Monday – Friday: 9:30 AM – 6:30 PM IST
            </p>
          </div>

          {/* Contact info: Phone/WhatsApp & Email */}
          <div className="mb-10 space-y-3">
            <div>
              <a
                href="https://wa.me/919962869428"
                target="_blank"
                rel="noopener noreferrer"
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
                <Phone className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "var(--vcmv-gold)" }} />
                +91 99628 69428 (WhatsApp)
              </a>
            </div>
            <div>
              <Link
                href="mailto:monish@vcmv.in"
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
                monish@vcmv.in
              </Link>
            </div>
          </div>

          {/* Copyright & Credit */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs tracking-[0.1em] uppercase">
            <p
              style={{
                fontFamily: "var(--font-inter)",
                color: "color-mix(in srgb, var(--vcmv-cream) 25%, transparent)",
                fontWeight: 300,
              }}
            >
              &copy; {year} V C M V &amp; Associates LLP. All rights reserved.
            </p>
            <span
              className="hidden md:inline"
              style={{ color: "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)" }}
            >
              ·
            </span>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                color: "color-mix(in srgb, var(--vcmv-cream) 35%, transparent)",
                fontWeight: 300,
              }}
            >
              Created by{" "}
              <a
                href="https://zgendigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[var(--vcmv-gold)] underline-offset-4 hover:underline"
                style={{ color: "var(--vcmv-gold)", fontWeight: 500 }}
              >
                zgendigital.com
              </a>
            </p>
          </div>
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
            letterSpacing: "0.08em",
            lineHeight: 0.9,
          }}
          aria-hidden="true"
        >
          V C M V
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
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Use", href: "#" },
            { label: "Disclaimer", href: "#" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
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
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
