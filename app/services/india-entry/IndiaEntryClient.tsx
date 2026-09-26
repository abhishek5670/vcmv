"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const entryModes = [
  {
    title: "Wholly Owned Subsidiary",
    description:
      "Full ownership and control for foreign entities looking to establish a significant, long-term business presence in India. Suitable for manufacturing, services and technology businesses.",
  },
  {
    title: "Joint Venture",
    description:
      "Structuring considerations for businesses partnering with Indian entities — covering equity structure, governance, tax efficiency and exit planning.",
  },
  {
    title: "Limited Liability Partnership (LLP)",
    description:
      "Guidance on establishing an LLP structure where appropriate, including eligibility, regulatory requirements, FDI compliance and tax considerations.",
  },
  {
    title: "Liaison Office",
    description:
      "Support for foreign businesses establishing a representative presence in India for market research and communication activities. Not permitted to undertake commercial operations.",
  },
  {
    title: "Branch Office",
    description:
      "Advisory around establishing and operating a branch in India — covering regulatory approvals, permitted activities, PE risks and tax obligations.",
  },
  {
    title: "Project Office",
    description:
      "Assistance for foreign entities executing specific projects in India — project office setup, regulatory requirements, withholding tax and project completion formalities.",
  },
];

export default function IndiaEntryClient() {
  const gridRef = useRef(null);
  const ctaRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <>
      <PageHero
        heading="Your Gateway to\nDoing Business in India"
        description="Understand the structural, tax and regulatory considerations involved in establishing an Indian presence. We help foreign businesses evaluate entry options and navigate the setup process."
        dark
      />

      {/* Entry modes */}
      <section
        ref={gridRef}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {entryModes.map((mode, i) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
                style={{
                  padding: "3rem 2.5rem",
                  borderTop:
                    "1px solid color-mix(in srgb, var(--vcmv-gold) 15%, transparent)",
                  borderLeft:
                    i % 3 !== 0
                      ? "1px solid color-mix(in srgb, var(--vcmv-gold) 15%, transparent)"
                      : "none",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "color-mix(in srgb, var(--vcmv-gold) 5%, transparent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                }}
              >
                {/* Top accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: "var(--vcmv-gold)" }}
                />

                <span
                  className="block mb-6 select-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "3rem",
                    fontWeight: 600,
                    color:
                      "color-mix(in srgb, var(--vcmv-gold) 15%, transparent)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--vcmv-ivory)",
                    lineHeight: 1.2,
                    transition: "color 0.3s ease",
                  }}
                >
                  {mode.title}
                </h3>
                <div
                  className="h-px w-8 mb-5"
                  style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.5 }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.875rem",
                    color:
                      "color-mix(in srgb, var(--vcmv-cream) 60%, transparent)",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {mode.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
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
              Plan Your India Entry →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
