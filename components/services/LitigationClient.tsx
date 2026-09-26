"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const forumSteps = [
  { label: "Assessing Officer", abbr: "AO" },
  { label: "Commissioner (Appeals)", abbr: "CIT(A)" },
  { label: "Dispute Resolution Panel", abbr: "DRP" },
  { label: "Income Tax Appellate Tribunal", abbr: "ITAT" },
  { label: "High Court", abbr: "HC" },
];

const areas = [
  "Income Tax",
  "Goods & Services Tax (GST)",
  "Customs",
  "Central Excise",
  "Service Tax",
];

export default function LitigationClient() {
  const forumsRef = useRef(null);
  const areasRef = useRef(null);
  const forumsInView = useInView(forumsRef, { once: true, margin: "-80px" });
  const areasInView = useInView(areasRef, { once: true, margin: "-80px" });

  return (
    <>
      <PageHero
        heading="Strong Representation.\nStrategic Resolution."
        description="Tax disputes require technical knowledge, thorough preparation and the right representation. Our team supports clients across multiple stages of tax litigation with structured, evidence-based advocacy."
        dark
      />

      {/* Forum Progression */}
      <section
        ref={forumsRef}
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={forumsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16"
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
                Representation Forums
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                fontWeight: 600,
                color: "var(--vcmv-ivory)",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                maxWidth: "520px",
              }}
            >
              We represent clients at every stage.
            </h2>
          </motion.div>

          {/* Forum steps */}
          <div className="relative">
            {/* Connector line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={forumsInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="absolute top-10 left-0 right-0 h-px hidden lg:block"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--vcmv-gold) 30%, transparent)",
                transformOrigin: "left",
              }}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0">
              {forumSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={forumsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                  style={{ padding: "0 1.5rem 2rem" }}
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={forumsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                    className="w-5 h-5 rounded-full mb-5 z-10 hidden lg:block"
                    style={{
                      backgroundColor: "var(--vcmv-gold)",
                      boxShadow:
                        "0 0 0 4px color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
                    }}
                  />

                  {/* Step number */}
                  <span
                    className="block mb-3 text-xs"
                    style={{
                      color:
                        "color-mix(in srgb, var(--vcmv-gold) 40%, transparent)",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                    }}
                  >
                    STAGE {i + 1}
                  </span>

                  <span
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "var(--vcmv-gold)",
                    }}
                  >
                    {step.abbr}
                  </span>

                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.78rem",
                      color:
                        "color-mix(in srgb, var(--vcmv-cream) 55%, transparent)",
                      lineHeight: 1.5,
                      fontWeight: 300,
                    }}
                  >
                    {step.label}
                  </span>

                  {/* Arrow for lg */}
                  {i < forumSteps.length - 1 && (
                    <span
                      className="absolute right-0 top-10 text-xs hidden lg:block"
                      style={{
                        color:
                          "color-mix(in srgb, var(--vcmv-gold) 35%, transparent)",
                        transform: "translateX(50%) translateY(-50%)",
                      }}
                    >
                      →
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas + Support */}
      <section
        ref={areasRef}
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--vcmv-ivory)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 md:gap-8 lg:gap-12 lg:gap-16 lg:gap-10 md:gap-8 md:gap-6 md:gap-8 lg:gap-12 lg:gap-16 lg:gap-24">
            {/* Areas */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={areasInView ? { opacity: 1, x: 0 } : {}}
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
                  Areas of Practice
                </span>
              </div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.7rem, 2.5vw, 2.4rem)",
                  fontWeight: 600,
                  color: "var(--vcmv-charcoal)",
                  lineHeight: 1.18,
                }}
              >
                Tax types we litigate.
              </h2>
              <div className="flex flex-wrap gap-3">
                {areas.map((area, i) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={areasInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                    className="px-5 py-2.5"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.83rem",
                      fontWeight: 500,
                      color: "var(--vcmv-charcoal)",
                      border:
                        "1px solid color-mix(in srgb, var(--vcmv-gold) 35%, transparent)",
                      backgroundColor: "var(--vcmv-ivory)",
                    }}
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Litigation Support note */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={areasInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="relative"
              style={{
                padding: "3rem",
                borderLeft:
                  "1px solid color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
              }}
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
                  Litigation Support
                </span>
              </div>
              <h3
                className="mb-5"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.55rem",
                  fontWeight: 600,
                  color: "var(--vcmv-charcoal)",
                  lineHeight: 1.2,
                }}
              >
                Senior counsel coordination.
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.9rem",
                  color: "var(--vcmv-taupe)",
                  lineHeight: 1.78,
                  fontWeight: 300,
                }}
              >
                Where matters require representation before High Courts or
                specialized tax forums, VCMV coordinates with experienced senior
                counsels and tax lawyers to ensure appropriate legal
                representation alongside our technical support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative"
        style={{ backgroundColor: "var(--vcmv-charcoal)" }}
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
                color: "var(--vcmv-ivory)",
              }}
            >
              Facing a tax dispute?
            </p>
            <Link
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
                  "var(--vcmv-cream)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--vcmv-gold)";
              }}
            >
              Discuss Your Dispute →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
