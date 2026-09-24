"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { closingCTA } from "@/content/site-content";

export default function ClosingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--vcmv-charcoal)" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, color-mix(in srgb, var(--vcmv-gold) 6%, transparent) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, color-mix(in srgb, var(--vcmv-gold) 4%, transparent) 0%, transparent 55%)",
        }}
      />

      {/* Top gold border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: "color-mix(in srgb, var(--vcmv-gold) 30%, transparent)" }} />

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-28 lg:py-40 text-center relative z-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="inline-block h-px w-8" style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.6 }} />
          <span
            className="text-xs tracking-[0.22em] uppercase"
            style={{ color: "var(--vcmv-gold)", fontFamily: "var(--font-inter)", fontWeight: 500 }}
          >
            Get in Touch
          </span>
          <span className="inline-block h-px w-8" style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.6 }} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="mb-6 whitespace-pre-line"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 4vw, 3.6rem)",
            fontWeight: 600,
            color: "var(--vcmv-ivory)",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          {closingCTA.heading}
        </motion.h2>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-8 h-px w-16"
          style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.6, transformOrigin: "center" }}
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="mb-12 mx-auto max-w-lg"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1rem",
            color: "color-mix(in srgb, var(--vcmv-cream) 72%, transparent)",
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          {closingCTA.body}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.38 }}
        >
          <a
            href={closingCTA.ctaHref}
            className="inline-flex items-center justify-center transition-all duration-250 group"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--vcmv-charcoal)",
              backgroundColor: "var(--vcmv-gold)",
              textDecoration: "none",
              padding: "1rem 2.5rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--vcmv-cream)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--vcmv-gold)";
            }}
          >
            {closingCTA.cta}
          </a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 text-xs"
          style={{
            color: "color-mix(in srgb, var(--vcmv-cream) 30%, transparent)",
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            letterSpacing: "0.06em",
          }}
        >
          VCMV &amp; Associates LLP · Chartered Accountants &amp; Advisors
        </motion.p>
      </div>
    </section>
  );
}
