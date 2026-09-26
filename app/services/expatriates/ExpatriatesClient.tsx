"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const services = [
  {
    title: "Expatriate Secondment Advisory",
    description:
      "Tax, permanent establishment risk, salary structuring, social security and foreign exchange considerations for inbound and outbound assignees.",
  },
  {
    title: "Visa & Banking Support",
    description:
      "Documentation assistance for employment visa applications and banking requirements for expatriates with Indian assignments.",
  },
  {
    title: "FRRO Registration",
    description:
      "Support with applicable Foreigners Regional Registration Office (FRRO) registration requirements for foreign nationals.",
  },
  {
    title: "PAN Assistance",
    description:
      "PAN application and related documentation support for expatriates with Indian tax obligations.",
  },
  {
    title: "Withholding & Tax Equalization",
    description:
      "Salary tax calculations, withholding return compliance and tax equalization support for assignees and their employers.",
  },
  {
    title: "Income Tax Returns",
    description:
      "Income-tax return filing for expatriates in India, including foreign asset and liability disclosure under the Black Money Act.",
  },
  {
    title: "Exit Formalities",
    description:
      "Support with tax clearance certificates and relevant departure formalities when an assignment concludes.",
  },
];

export default function ExpatriatesClient() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <>
      <PageHero
        heading="Making International Mobility Simpler"
        description="Practical tax and regulatory support for expatriates and businesses managing international employee assignments in India — from arrival through exit."
        dark
      />

      {/* Services Cards */}
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative"
                style={{
                  padding: "2.5rem 2rem",
                  backgroundColor:
                    "color-mix(in srgb, var(--vcmv-gold) 4%, transparent)",
                  border:
                    "1px solid color-mix(in srgb, var(--vcmv-gold) 15%, transparent)",
                  transition: "border-color 0.3s ease, background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "color-mix(in srgb, var(--vcmv-gold) 45%, transparent)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "color-mix(in srgb, var(--vcmv-gold) 8%, transparent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "color-mix(in srgb, var(--vcmv-gold) 15%, transparent)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "color-mix(in srgb, var(--vcmv-gold) 4%, transparent)";
                }}
              >
                {/* Number */}
                <span
                  className="block mb-5 select-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.5rem",
                    fontWeight: 600,
                    color:
                      "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--vcmv-ivory)",
                    lineHeight: 1.25,
                  }}
                >
                  {service.title}
                </h3>
                <div
                  className="h-px w-8 mb-4"
                  style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.5 }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.875rem",
                    color:
                      "color-mix(in srgb, var(--vcmv-cream) 60%, transparent)",
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
              Discuss Expatriate Tax Requirements →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
