"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function IntlTaxClient() {
  const splitRef = useRef(null);
  const isInView = useInView(splitRef, { once: true, margin: "-80px" });

  const inbound = [
    "Indian entry structuring and entity selection",
    "Investment structures and holding company advisory",
    "Permanent Establishment analysis and management",
    "Cross-border transaction tax advisory",
    "Withholding tax on payments to non-residents",
    "BEPS considerations and local implementation",
  ];

  const outbound = [
    "Outbound business and investment structuring",
    "International tax planning and optimization",
    "Multi-tier holding structure advisory",
    "Cross-border acquisitions and disposals",
    "IP migration and intangible asset planning",
    "Foreign tax credit utilization",
    "Global minimum tax (Pillar Two) considerations",
  ];

  return (
    <>
      <PageHero
        heading="Navigate Cross-Border Tax With Confidence"
        description="Practical international tax advice for businesses investing, operating and expanding across borders—from India entry to global expansion."
        dark
      />

      {/* Split Layout — Inbound | Outbound */}
      <section
        ref={splitRef}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Inbound */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75 }}
              className="relative"
              style={{
                padding: "3rem",
                borderRight:
                  "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                borderTop:
                  "3px solid var(--vcmv-gold)",
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
                  Inbound Advisory
                </span>
              </div>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.7rem, 2.5vw, 2.4rem)",
                  fontWeight: 600,
                  color: "var(--vcmv-ivory)",
                  lineHeight: 1.15,
                }}
              >
                Entering India
              </h2>
              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.9rem",
                  color:
                    "color-mix(in srgb, var(--vcmv-cream) 60%, transparent)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                For foreign businesses and investors establishing an Indian
                presence or undertaking cross-border transactions with India.
              </p>
              <div
                className="h-px w-12 mb-8"
                style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.5 }}
              />
              <ul className="space-y-4">
                {inbound.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.875rem",
                      color:
                        "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    <span
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "var(--vcmv-gold)" }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Outbound */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="relative"
              style={{
                padding: "3rem",
                borderTop:
                  "3px solid color-mix(in srgb, var(--vcmv-gold) 45%, transparent)",
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
                  Outbound Advisory
                </span>
              </div>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.7rem, 2.5vw, 2.4rem)",
                  fontWeight: 600,
                  color: "var(--vcmv-ivory)",
                  lineHeight: 1.15,
                }}
              >
                Expanding Globally
              </h2>
              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.9rem",
                  color:
                    "color-mix(in srgb, var(--vcmv-cream) 60%, transparent)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                For Indian businesses investing, acquiring or establishing
                operations in overseas markets.
              </p>
              <div
                className="h-px w-12 mb-8"
                style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.5 }}
              />
              <ul className="space-y-4">
                {outbound.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.875rem",
                      color:
                        "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    <span
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "var(--vcmv-gold)" }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Talk to Our International Tax Team →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
