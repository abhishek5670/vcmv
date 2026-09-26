"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  dark?: boolean;
}

export default function PageHero({
  eyebrow,
  heading,
  description,
  dark = false,
}: PageHeroProps) {
  const bg = dark ? "var(--vcmv-charcoal)" : "var(--vcmv-ivory)";
  const headingColor = dark ? "var(--vcmv-ivory)" : "var(--vcmv-charcoal)";
  const bodyColor = dark
    ? "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)"
    : "var(--vcmv-taupe)";

  return (
    <section
      className="relative overflow-hidden pt-20 md:pt-24 lg:pt-32 pb-20 lg:pt-40 lg:pb-28"
      style={{ backgroundColor: bg }}
    >
      {/* Decorative background grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, color-mix(in srgb, var(--vcmv-gold) 8%, transparent) 0%, transparent 65%)",
        }}
      />

      {/* Top gold rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="inline-block h-px w-8"
              style={{ backgroundColor: "var(--vcmv-gold)" }}
            />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{
                color: "var(--vcmv-gold)",
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
              }}
            >
              {eyebrow}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="whitespace-pre-line mb-6"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
            fontWeight: 600,
            color: headingColor,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            maxWidth: "800px",
          }}
        >
          {heading.replace(/\\n/g, '\n')}
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="h-px w-16 mb-6"
          style={{
            backgroundColor: "var(--vcmv-gold)",
            opacity: 0.6,
            transformOrigin: "left",
          }}
        />

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="whitespace-pre-line"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1.05rem",
              color: bodyColor,
              lineHeight: 1.78,
              fontWeight: 300,
              maxWidth: "620px",
            }}
          >
            {description.replace(/\\n/g, '\n')}
          </motion.p>
        )}
      </div>
    </section>
  );
}
