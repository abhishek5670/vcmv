"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutContent } from "@/content/site-content";
import Link from "next/link";

// Animated word-by-word paragraph
function AnimatedParagraph({
  text,
  delay = 0,
  isInView,
}: {
  text: string;
  delay?: number;
  isInView: boolean;
}) {
  const words = text.split(" ");
  return (
    <p className="leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "1.125rem", color: "var(--vcmv-charcoal)", fontWeight: 400, opacity: 0.9 }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + i * 0.02, ease: "easeOut" }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

// Bold stat block
function StatItem({
  value,
  label,
  delay,
  isInView,
}: {
  value: string;
  label: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
    >
      <span
        className="block"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
          fontWeight: 700,
          color: "var(--vcmv-gold)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </span>
      <span
        className="block mt-3"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.85rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--vcmv-charcoal)",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

const stats = [
  { value: "25+", label: "Years Combined Expertise" },
  { value: "Big4", label: "Alumni Background" },
  { value: "100+", label: "Clients Served" },
  { value: "10+", label: "Practice Areas" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Parallax effects for multiple elements
  const image1Y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const image2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--vcmv-ivory)" }}
    >
      {/* Background Animated Decor */}
      <motion.div 
        className="absolute -right-[20%] top-[10%] w-[60%] h-[80%] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--vcmv-gold) 15%, transparent) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden 2xl:block opacity-5"
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "24rem",
          fontWeight: 700,
          color: "var(--vcmv-charcoal)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        VCMV
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24 xl:py-40" ref={containerRef}>

        {/* ── TOP ROW: Label + Eyebrow line ─────────────── */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={isInView ? { opacity: 1, width: "100%" } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center gap-6 mb-16 lg:mb-24 overflow-hidden"
        >
          <span
            className="shrink-0"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--vcmv-gold)",
            }}
          >
            Who We Are
          </span>
          <span
            className="flex-1 h-px w-full"
            style={{ backgroundColor: "color-mix(in srgb, var(--vcmv-charcoal) 15%, transparent)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-24 xl:gap-32 items-center mb-16 lg:mb-36">
          <div className="relative z-10">
            {/* Animated Heading */}
            <h2
              className="mb-10 lg:mb-12"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                fontWeight: 600,
                color: "var(--vcmv-charcoal)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              {[
                { text: "Professional", em: false },
                { text: " expertise.", em: true },
                { text: " Practical", em: false },
                { text: " thinking.", em: true },
                { text: " Lasting", em: false },
                { text: " value.", em: true },
              ].map((chunk, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -30 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block origin-bottom"
                  style={
                    chunk.em
                      ? {
                          color: "var(--vcmv-gold)",
                          fontStyle: "italic",
                          fontWeight: 400,
                        }
                      : {}
                  }
                >
                  {chunk.text}
                </motion.span>
              ))}
            </h2>

            {/* Animated body */}
            <div className="mb-12 lg:mb-16 max-w-xl pl-4 lg:pl-8" style={{ borderLeft: "1px solid color-mix(in srgb, var(--vcmv-gold) 30%, transparent)" }}>
              <AnimatedParagraph
                text={aboutContent.body}
                delay={0.6}
                isInView={isInView}
              />
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-[var(--vcmv-charcoal)] text-white"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                <span className="absolute inset-0 w-full h-full bg-[var(--vcmv-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]"></span>
                <span className="relative flex items-center gap-3">
                  {aboutContent.cta}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xl leading-none"
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Dynamic Image Collage */}
          <div className="relative h-[600px] lg:h-[750px] w-full mt-10 lg:mt-0">
            
            {/* Rotating Badge */}
            <motion.div 
              style={{ rotate: rotateBadge, zIndex: 10 }}
              className="absolute -left-10 lg:-left-20 top-1/4 w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-[var(--vcmv-gold)] flex items-center justify-center bg-[var(--vcmv-ivory)] shadow-2xl"
            >
              <div className="relative w-full h-full rounded-full flex items-center justify-center text-[var(--vcmv-charcoal)]">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow" style={{ animationDuration: "20s" }}>
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[10.5px] uppercase tracking-[0.2em] font-semibold" style={{ fontFamily: "var(--font-inter)", fill: "currentColor" }}>
                    <textPath href="#circlePath" startOffset="0%">
                      • VCMV & ASSOCIATES LLP • CHARTERED ACCOUNTANTS 
                    </textPath>
                  </text>
                </svg>
                {/* Inner Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--vcmv-gold)]"></div>
                </div>
              </div>
            </motion.div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              animate={isInView ? { opacity: 1, clipPath: "inset(0 0 0 0)" } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="absolute top-0 right-0 w-[85%] h-[75%] lg:h-[80%] z-0 overflow-hidden rounded-sm"
            >
              <motion.img
                style={{ y: image1Y, width: "100%", height: "120%", objectFit: "cover" }}
                src={aboutContent.image}
                alt="VCMV & Associates — professional advisory"
                className="filter grayscale-[15%] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--vcmv-charcoal)]/40 to-transparent mix-blend-multiply" />
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={isInView ? { opacity: 1, clipPath: "inset(0 0 0 0)" } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="absolute bottom-0 left-0 w-[55%] h-[45%] lg:h-[50%] z-10 overflow-hidden shadow-2xl rounded-sm border-4 border-[var(--vcmv-ivory)]"
            >
              <motion.img
                style={{ y: image2Y, width: "100%", height: "130%", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&fit=crop"
                alt="VCMV Detail"
                className="filter grayscale-[30%] contrast-100"
              />
            </motion.div>
            
            {/* Decorative Gold Frame */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="absolute top-8 right-8 w-[85%] h-[75%] lg:h-[80%] border border-[var(--vcmv-gold)] -z-10 pointer-events-none"
            />
          </div>
        </div>

        {/* ── STATS STRIP ──────────────────────────────── */}
        <div className="mt-20 lg:mt-10">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
            style={{
              borderTop: "1px solid color-mix(in srgb, var(--vcmv-charcoal) 10%, transparent)",
              paddingTop: "4rem",
            }}
          >
            {stats.map((stat, i) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={0.8 + i * 0.15}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
