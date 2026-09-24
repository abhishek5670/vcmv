"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutContent } from "@/content/site-content";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--vcmv-ivory)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="inline-block h-px w-8"
                style={{ backgroundColor: "var(--vcmv-gold)" }}
              />
              <span
                className="text-xs tracking-[0.22em] uppercase"
                style={{ color: "var(--vcmv-gold)", fontFamily: "var(--font-inter)", fontWeight: 500 }}
              >
                {aboutContent.label}
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mb-8 whitespace-pre-line"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontWeight: 600,
                color: "var(--vcmv-charcoal)",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
              }}
            >
              {aboutContent.heading}
            </h2>

            {/* Divider */}
            <div
              className="mb-8 h-px w-16"
              style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.5 }}
            />

            {/* Body */}
            <p
              className="mb-10 max-w-lg"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "1rem",
                color: "var(--vcmv-taupe)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              {aboutContent.body}
            </p>

            {/* CTA Link */}
            <a
              href="#services"
              className="inline-flex items-center gap-2 group"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--vcmv-charcoal)",
                textDecoration: "none",
                paddingBottom: "4px",
                borderBottom: "1px solid var(--vcmv-gold)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--vcmv-gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--vcmv-charcoal)";
              }}
            >
              {aboutContent.cta}
            </a>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Gold frame accent */}
            <div
              className="absolute -top-4 -right-4 w-full h-full"
              style={{
                border: "1px solid color-mix(in srgb, var(--vcmv-gold) 30%, transparent)",
                zIndex: 0,
              }}
            />

            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", zIndex: 1 }}>
              <img
                src={aboutContent.image}
                alt="VCMV & Associates — professional advisory environment"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(15%) contrast(1.04)" }}
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 60%, color-mix(in srgb, var(--vcmv-charcoal) 25%, transparent) 100%)" }}
              />
            </div>

            {/* Floating stat chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 px-6 py-4"
              style={{
                backgroundColor: "var(--vcmv-charcoal)",
                zIndex: 2,
              }}
            >
              <p
                className="text-2xl font-semibold mb-0.5"
                style={{ color: "var(--vcmv-gold)", fontFamily: "var(--font-cormorant)" }}
              >
                25+
              </p>
              <p
                className="text-xs tracking-wider uppercase"
                style={{ color: "color-mix(in srgb, var(--vcmv-cream) 70%, transparent)", fontFamily: "var(--font-inter)", fontWeight: 400 }}
              >
                Years of Combined Expertise
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
