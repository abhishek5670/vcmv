"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { whyVCMV } from "@/content/site-content";

export default function WhyVCMV() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="expertise"
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--vcmv-ivory)" }}
    >
      {/* Decorative vertical rule */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
        style={{ backgroundColor: "color-mix(in srgb, var(--vcmv-gold) 12%, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ backgroundColor: "var(--vcmv-gold)" }} />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ color: "var(--vcmv-gold)", fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              Why VCMV
            </span>
            <span className="inline-block h-px w-8" style={{ backgroundColor: "var(--vcmv-gold)" }} />
          </div>
          <h2
            className="whitespace-pre-line mx-auto"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)",
              fontWeight: 600,
              color: "var(--vcmv-charcoal)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
              maxWidth: "640px",
            }}
          >
            {whyVCMV.heading}
          </h2>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {whyVCMV.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: "easeOut" }}
              className="relative group"
              style={{
                padding: "3rem 2.5rem",
                borderLeft: i > 0 ? "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)" : "none",
                borderTop: "3px solid transparent",
                transition: "border-top-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderTopColor = "var(--vcmv-gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderTopColor = "transparent";
              }}
            >
              {/* Large serif number */}
              <span
                className="block mb-6 select-none"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "4rem",
                  fontWeight: 600,
                  color: "color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                  lineHeight: 1,
                  transition: "color 0.3s ease",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.55rem",
                  fontWeight: 600,
                  color: "var(--vcmv-charcoal)",
                  lineHeight: 1.2,
                }}
              >
                {pillar.label}
              </h3>

              {/* Gold rule */}
              <div
                className="mb-5 h-px w-8"
                style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.6 }}
              />

              {/* Copy */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.875rem",
                  color: "var(--vcmv-taupe)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {pillar.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
