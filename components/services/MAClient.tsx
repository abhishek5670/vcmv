"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Target / Buyer Search",
    description:
      "Identify, screen and evaluate suitable acquisition targets or prospective buyers aligned to strategic and financial objectives.",
  },
  {
    number: "02",
    title: "Deal Advisory",
    description:
      "Support decision-making throughout the transaction—from initial evaluation and structuring through negotiation and documentation.",
  },
  {
    number: "03",
    title: "Valuation",
    description:
      "Determine the financial value and commercial implications of the transaction using appropriate valuation methodologies.",
  },
  {
    number: "04",
    title: "Due Diligence",
    description:
      "Identify financial, tax, regulatory and business considerations that could affect the transaction or its value.",
  },
  {
    number: "05",
    title: "Implementation & Closing",
    description:
      "Support the transaction through execution, documentation review, regulatory filings and successful completion.",
  },
];

export default function MAClient() {
  const stepsRef = useRef(null);
  const isInView = useInView(stepsRef, { once: true, margin: "-80px" });

  return (
    <>
      <PageHero
        heading="From Opportunity\nto Transaction"
        description="The right transaction starts with the right target and requires disciplined execution from initial evaluation through closing. Our team provides focused support across the deal lifecycle."
        dark
      />

      {/* Process Steps */}
      <section
        ref={stepsRef}
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
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
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
                Our Process
              </span>
              <span
                className="inline-block h-px w-8"
                style={{ backgroundColor: "var(--vcmv-gold)" }}
              />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                fontWeight: 600,
                color: "var(--vcmv-ivory)",
                lineHeight: 1.18,
              }}
            >
              A structured approach to every transaction.
            </h2>
          </motion.div>

          {/* Steps — Vertical on mobile, horizontal display */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-6 md:gap-8 lg:gap-12 items-start"
                style={{
                  padding: "2.5rem 0",
                  borderTop:
                    "1px solid color-mix(in srgb, var(--vcmv-gold) 15%, transparent)",
                }}
              >
                {/* Number */}
                <div className="flex items-center gap-6">
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "3.5rem",
                      fontWeight: 600,
                      color:
                        "color-mix(in srgb, var(--vcmv-gold) 22%, transparent)",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 md:gap-6 md:gap-8 lg:gap-12 lg:gap-16">
                  <h3
                    className="mb-3 lg:mb-0 lg:w-64 flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "var(--vcmv-gold)",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.9rem",
                      color:
                        "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                      lineHeight: 1.78,
                      fontWeight: 300,
                      maxWidth: "560px",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
            {/* Last divider */}
            <div
              style={{
                borderTop:
                  "1px solid color-mix(in srgb, var(--vcmv-gold) 15%, transparent)",
              }}
            />
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
              Discuss a Transaction →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
