"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const primaryServices = [
  {
    title: "Statutory Audit",
    description:
      "Independent audit of financial statements with an approach grounded in understanding the business, its industry, and its risk profile. Our audit process is rigorous and transparent.",
  },
  {
    title: "Tax Audit",
    description:
      "Comprehensive support for reviewing tax-related financial information and applicable tax audit requirements under the Income Tax Act, ensuring complete and accurate disclosure.",
  },
  {
    title: "IFRS & Financial Reporting",
    description:
      "Support with IFRS transition, Ind AS adoption, accounting policy changes, and financial reporting requirements to ensure your financials meet applicable standards.",
  },
];

const internalAuditServices = [
  "Financial Transaction Audit",
  "Compliance Audit",
  "Internal Control Review",
  "IFC Documentation & Testing",
  "Fixed Asset Audit",
  "Stock Audit",
  "Payroll Audit",
  "Store Audit",
  "ROI Audit",
  "Business Process Review",
];

const additionalServices = [
  {
    title: "Forensic Audit",
    description:
      "Investigation and analysis of financial irregularities, suspected fraud or misconduct, with structured reporting and documentation.",
  },
  {
    title: "Business Valuation",
    description:
      "Independent valuation support for transactions, regulatory compliance, impairment testing and financial reporting.",
  },
  {
    title: "Business Projections",
    description:
      "Preparation and review of business projections and financial models for lending, investment or strategic purposes.",
  },
  {
    title: "Product Cost Analysis",
    description:
      "Detailed cost analysis and profitability review at product or business unit level.",
  },
  {
    title: "E-way Bill Support",
    description:
      "Assistance with e-way bill compliance, reconciliation and resolution of discrepancies.",
  },
];

export default function AssuranceClient() {
  const primaryRef = useRef(null);
  const internalRef = useRef(null);
  const additionalRef = useRef(null);
  const primaryInView = useInView(primaryRef, { once: true, margin: "-80px" });
  const internalInView = useInView(internalRef, { once: true, margin: "-80px" });
  const additionalInView = useInView(additionalRef, { once: true, margin: "-80px" });

  return (
    <>
      <PageHero
        heading="Assurance That Builds Confidence"
        description="Independent, structured assurance services designed to strengthen financial reporting, internal controls and business processes."
        dark
      />

      {/* Primary Audit Services */}
      <section
        ref={primaryRef}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {primaryServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={primaryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                className="relative"
                style={{
                  padding: "3rem 2.5rem",
                  borderLeft:
                    i > 0
                      ? "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)"
                      : "none",
                  borderTop: i === 0 ? "3px solid var(--vcmv-gold)" : "3px solid transparent",
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    color: "var(--vcmv-ivory)",
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
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
                      "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Audit */}
      <section
        ref={internalRef}
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
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={internalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14"
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
                Internal Audit
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                fontWeight: 600,
                color: "var(--vcmv-charcoal)",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                maxWidth: "520px",
              }}
            >
              Risk-based internal audit across all business areas.
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {internalAuditServices.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={internalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="p-4"
                style={{
                  border:
                    "1px solid color-mix(in srgb, var(--vcmv-gold) 22%, transparent)",
                  backgroundColor: "var(--vcmv-ivory)",
                  transition: "background-color 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "color-mix(in srgb, var(--vcmv-gold) 8%, transparent)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "color-mix(in srgb, var(--vcmv-gold) 45%, transparent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--vcmv-ivory)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "color-mix(in srgb, var(--vcmv-gold) 22%, transparent)";
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.82rem",
                    color: "var(--vcmv-taupe)",
                    lineHeight: 1.4,
                    fontWeight: 400,
                  }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Assurance Services */}
      <section
        ref={additionalRef}
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
            animate={additionalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14"
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
                Additional Services
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
              }}
            >
              Beyond the audit.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0">
            {additionalServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={additionalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{
                  padding: "2.5rem 2rem",
                  borderLeft:
                    i > 0
                      ? "1px solid color-mix(in srgb, var(--vcmv-gold) 12%, transparent)"
                      : "none",
                  borderTop:
                    "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--vcmv-gold)",
                    lineHeight: 1.25,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.83rem",
                    color:
                      "color-mix(in srgb, var(--vcmv-cream) 55%, transparent)",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
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
              Discuss Your Audit Requirements →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
