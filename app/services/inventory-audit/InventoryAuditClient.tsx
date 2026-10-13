"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const scopeItems = [
  {
    title: "Physical Stock Verification",
    description:
      "On-site physical count and verification of inventory across warehouses, retail outlets, manufacturing floors and storage sites. We design count procedures customised to your business.",
  },
  {
    title: "Book vs Physical Reconciliation",
    description:
      "Systematic reconciliation of physical count results against your ERP / accounting records to identify discrepancies, variances, and root causes.",
  },
  {
    title: "Valuation Review",
    description:
      "Assessment of inventory valuation methodology — FIFO, weighted average, NRV — to confirm consistency with applicable accounting standards (Ind AS / ICAI).",
  },
  {
    title: "Shrinkage & Pilferage Analysis",
    description:
      "Quantification and analysis of inventory shrinkage, spoilage, and pilferage patterns, with recommendations to improve controls and reduce losses.",
  },
  {
    title: "Slow-Moving & Obsolete Inventory",
    description:
      "Identification and classification of slow-moving, non-moving and obsolete stock, with provisioning recommendations and disposal advisory.",
  },
  {
    title: "Process & Controls Review",
    description:
      "Review of warehousing, receiving, dispatch, cycle-count, and stocktaking processes to identify weaknesses and recommend process improvements.",
  },
];

const sectors = [
  "Retail & E-commerce",
  "Manufacturing",
  "Pharmaceuticals",
  "FMCG & Consumer Goods",
  "Automotive & Ancillaries",
  "Textiles & Apparel",
  "Construction & Real Estate",
  "Trading Companies",
  "Food & Beverage",
  "Logistics & Warehousing",
];

const deliverables = [
  "Detailed stock count sheets and count summary",
  "Book vs physical variance report",
  "Valuation assessment note",
  "Shrinkage and loss quantification",
  "Management letter with observations and recommendations",
  "Internal control gap assessment",
];

export default function InventoryAuditClient() {
  const scopeRef = useRef(null);
  const sectorsRef = useRef(null);
  const delivRef = useRef(null);
  const ctaRef = useRef(null);

  const scopeInView = useInView(scopeRef, { once: true, margin: "-80px" });
  const sectorsInView = useInView(sectorsRef, { once: true, margin: "-80px" });
  const delivInView = useInView(delivRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      <PageHero
        eyebrow="ASSURANCE"
        heading={"Inventory Audit\n& Stock Verification"}
        description="Independent, systematic verification of your inventory — from physical count and reconciliation to valuation review and process controls — giving management and stakeholders reliable assurance on stock."
      />

      {/* Scope of Services */}
      <section
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <motion.div
            ref={scopeRef}
            initial={{ opacity: 0, y: 24 }}
            animate={scopeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
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
                Our Scope
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                fontWeight: 500,
                color: "var(--vcmv-charcoal)",
                lineHeight: 1.15,
              }}
            >
              What our inventory audit covers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={scopeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="p-7"
                style={{
                  border:
                    "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                  backgroundColor: "var(--vcmv-ivory)",
                }}
              >
                <div
                  className="w-8 h-px mb-5"
                  style={{ backgroundColor: "var(--vcmv-gold)" }}
                />
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--vcmv-charcoal)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.875rem",
                    color: "var(--vcmv-taupe)",
                    fontWeight: 300,
                    lineHeight: 1.75,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors & Deliverables */}
      <section
        style={{ backgroundColor: "var(--vcmv-charcoal)" }}
        className="relative"
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Sectors */}
            <motion.div
              ref={sectorsRef}
              initial={{ opacity: 0, x: -24 }}
              animate={sectorsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
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
                  Sectors We Serve
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sectors.map((sector, i) => (
                  <motion.div
                    key={sector}
                    initial={{ opacity: 0, x: -16 }}
                    animate={sectorsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--vcmv-gold)" }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.875rem",
                        color: "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                        fontWeight: 300,
                      }}
                    >
                      {sector}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Deliverables */}
            <motion.div
              ref={delivRef}
              initial={{ opacity: 0, x: 24 }}
              animate={delivInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
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
                  Key Deliverables
                </span>
              </div>
              <div className="space-y-4">
                {deliverables.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    animate={delivInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-4 py-4"
                    style={{
                      borderBottom:
                        "1px solid color-mix(in srgb, var(--vcmv-gold) 12%, transparent)",
                    }}
                  >
                    <span
                      className="text-xs mt-0.5 flex-shrink-0"
                      style={{
                        fontFamily: "var(--font-inter)",
                        color: "var(--vcmv-gold)",
                        fontWeight: 500,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.875rem",
                        color: "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: "var(--vcmv-ivory)" }}
        className="relative"
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
                fontWeight: 500,
                color: "var(--vcmv-charcoal)",
                lineHeight: 1.2,
              }}
            >
              Need inventory assurance for your business?
            </h2>
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.9rem",
                color: "var(--vcmv-taupe)",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Talk to our team to understand how we can design an inventory
              audit programme suited to your industry, scale and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color: "var(--vcmv-charcoal)",
                  backgroundColor: "var(--vcmv-gold)",
                  textDecoration: "none",
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
              </Link>
              <Link
                href="/services/assurance"
                className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color: "var(--vcmv-charcoal)",
                  border:
                    "1px solid color-mix(in srgb, var(--vcmv-gold) 40%, transparent)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--vcmv-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "color-mix(in srgb, var(--vcmv-gold) 40%, transparent)";
                }}
              >
                All Assurance Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
