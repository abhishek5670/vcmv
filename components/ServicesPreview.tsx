"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { services } from "@/content/site-content";

export default function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--vcmv-charcoal)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-block h-px w-8"
              style={{ backgroundColor: "var(--vcmv-gold)" }}
            />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ color: "var(--vcmv-gold)", fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              What We Do
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.9rem, 3.2vw, 3rem)",
                fontWeight: 600,
                color: "var(--vcmv-ivory)",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                maxWidth: "540px",
              }}
            >
              Expertise that moves your business forward.
            </h2>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--vcmv-gold)",
                textDecoration: "none",
                flexShrink: 0,
                paddingBottom: "3px",
                borderBottom: "1px solid color-mix(in srgb, var(--vcmv-gold) 40%, transparent)",
                alignSelf: "flex-end",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--vcmv-gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--vcmv-gold) 40%, transparent)")}
            >
              View All Services →
            </a>
          </div>
        </motion.div>

        {/* Service list */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ borderTop: "1px solid color-mix(in srgb, var(--vcmv-gold) 15%, transparent)" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative group cursor-default"
              style={{
                borderBottom: "1px solid color-mix(in srgb, var(--vcmv-gold) 15%, transparent)",
                borderRight: "1px solid color-mix(in srgb, var(--vcmv-gold) 8%, transparent)",
                padding: "2.5rem 2rem",
                transition: "background-color 0.3s ease",
                backgroundColor: hovered === service.id ? "color-mix(in srgb, var(--vcmv-gold) 5%, transparent)" : "transparent",
              }}
            >
              {/* Number */}
              <span
                className="block mb-4 text-xs tracking-[0.18em]"
                style={{
                  color: hovered === service.id ? "var(--vcmv-gold)" : "color-mix(in srgb, var(--vcmv-gold) 40%, transparent)",
                  fontFamily: "var(--font-inter)",
                  transition: "color 0.3s ease",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Gold accent line on hover */}
              <div
                className="absolute left-0 top-0 bottom-0 w-px transition-all duration-300"
                style={{
                  backgroundColor: "var(--vcmv-gold)",
                  opacity: hovered === service.id ? 1 : 0,
                }}
              />

              {/* Title */}
              <h3
                className="mb-3 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.45rem",
                  fontWeight: 600,
                  color: hovered === service.id ? "var(--vcmv-gold)" : "var(--vcmv-cream)",
                  lineHeight: 1.25,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.875rem",
                  color: "color-mix(in srgb, var(--vcmv-cream) 60%, transparent)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {service.description}
              </p>

              {/* Arrow */}
              <span
                className="inline-block mt-5 text-xs transition-all duration-300"
                style={{
                  color: hovered === service.id ? "var(--vcmv-gold)" : "transparent",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.06em",
                  transform: hovered === service.id ? "translateX(4px)" : "translateX(0)",
                }}
              >
                Learn more →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
