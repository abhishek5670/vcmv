"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import { aboutPageContent } from "@/content/about-content";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutPageClient() {
  const storyRef = useRef(null);
  const philosophyRef = useRef(null);
  const approachRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const philosophyInView = useInView(philosophyRef, {
    once: true,
    margin: "-80px",
  });
  const approachInView = useInView(approachRef, { once: true, margin: "-80px" });

  const { hero, story, philosophy, approach } = aboutPageContent;

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        description={hero.description}
      />

      {/* ── Our Story ── */}
      <section
        ref={storyRef}
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--vcmv-charcoal)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, color-mix(in srgb, var(--vcmv-gold) 5%, transparent) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 md:gap-8 lg:gap-12 lg:gap-16 lg:gap-10 md:gap-8 md:gap-6 md:gap-8 lg:gap-12 lg:gap-16 lg:gap-24 items-start">
            {/* Left */}
            <motion.div
              initial={fadeUp.initial}
              animate={storyInView ? fadeUp.animate : {}}
              transition={{ duration: 0.75 }}
            >
              <div className="flex items-center gap-3 mb-8">
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
                  Our Story
                </span>
              </div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                  fontWeight: 600,
                  color: "var(--vcmv-ivory)",
                  lineHeight: 1.18,
                  letterSpacing: "-0.01em",
                }}
              >
                {story.heading}
              </h2>
              <div
                className="h-px w-12 mb-8"
                style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.5 }}
              />
              {story.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={i < story.paragraphs.length - 1 ? "mb-5" : ""}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "1rem",
                    color:
                      "color-mix(in srgb, var(--vcmv-cream) 70%, transparent)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Right — Stats */}
            <motion.div
              initial={fadeUp.initial}
              animate={storyInView ? fadeUp.animate : {}}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="grid grid-cols-2 gap-0 self-center"
              style={{
                borderTop:
                  "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                borderLeft:
                  "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
              }}
            >
              {story.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-10"
                  style={{
                    borderBottom:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                    borderRight:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                  }}
                >
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 600,
                      color: "var(--vcmv-gold)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs tracking-[0.16em] uppercase"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color:
                        "color-mix(in srgb, var(--vcmv-cream) 50%, transparent)",
                      fontWeight: 400,
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Philosophy ── */}
      <section
        ref={philosophyRef}
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--vcmv-ivory)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-36">
          <motion.div
            initial={fadeUp.initial}
            animate={philosophyInView ? fadeUp.animate : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
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
                Our Philosophy
              </span>
              <span
                className="inline-block h-px w-8"
                style={{ backgroundColor: "var(--vcmv-gold)" }}
              />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.9rem, 3.2vw, 3rem)",
                fontWeight: 600,
                color: "var(--vcmv-charcoal)",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
              }}
            >
              The principles that guide everything we do.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {philosophy.map((item, i) => (
              <motion.div
                key={item.id}
                initial={fadeUp.initial}
                animate={philosophyInView ? fadeUp.animate : {}}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                className="relative group"
                style={{
                  padding: "3rem 2.5rem",
                  borderLeft:
                    i > 0
                      ? "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)"
                      : "none",
                  borderTop: "3px solid transparent",
                  transition: "border-top-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderTopColor =
                    "var(--vcmv-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderTopColor =
                    "transparent";
                }}
              >
                <span
                  className="block mb-6 select-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "3.5rem",
                    fontWeight: 600,
                    color: "color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
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
                  {item.title}
                </h3>
                <div
                  className="h-px w-8 mb-5"
                  style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.6 }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9rem",
                    color: "var(--vcmv-taupe)",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section
        ref={approachRef}
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--vcmv-charcoal)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-36">
          <motion.div
            initial={fadeUp.initial}
            animate={approachInView ? fadeUp.animate : {}}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
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
                Our Approach
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.9rem, 3.2vw, 3rem)",
                fontWeight: 600,
                color: "var(--vcmv-ivory)",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                maxWidth: "560px",
              }}
            >
              How we work with every client.
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal connector line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={approachInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="absolute top-8 left-0 right-0 h-px hidden lg:block"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--vcmv-gold) 25%, transparent)",
                transformOrigin: "left",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {approach.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={fadeUp.initial}
                  animate={approachInView ? fadeUp.animate : {}}
                  transition={{ duration: 0.65, delay: 0.3 + i * 0.15 }}
                  className="relative"
                  style={{
                    padding: "3rem 2.5rem",
                    borderRight:
                      i < approach.length - 1
                        ? "1px solid color-mix(in srgb, var(--vcmv-gold) 12%, transparent)"
                        : "none",
                  }}
                >
                  {/* Dot on timeline */}
                  <div
                    className="absolute top-7 left-10 w-2.5 h-2.5 hidden lg:block"
                    style={{
                      backgroundColor: "var(--vcmv-gold)",
                      borderRadius: "50%",
                    }}
                  />

                  <span
                    className="block mb-8 mt-6 lg:mt-10"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "4rem",
                      fontWeight: 600,
                      color:
                        "color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.55rem",
                      fontWeight: 600,
                      color: "var(--vcmv-gold)",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <div
                    className="h-px w-8 mb-5"
                    style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.4 }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.875rem",
                      color:
                        "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative"
        style={{ backgroundColor: "var(--vcmv-ivory)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                fontWeight: 600,
                color: "var(--vcmv-charcoal)",
              }}
            >
              Ready to work with our team?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center transition-all duration-250"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--vcmv-charcoal)",
                backgroundColor: "var(--vcmv-gold)",
                textDecoration: "none",
                padding: "1rem 2.5rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--vcmv-charcoal)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--vcmv-gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--vcmv-gold)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--vcmv-charcoal)";
              }}
            >
              Get in Touch →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
