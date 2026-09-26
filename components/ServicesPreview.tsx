"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { services } from "@/content/site-content";
import Link from "next/link";

export default function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--vcmv-charcoal)" }}
    >
      {/* Decorative Top Border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: "color-mix(in srgb, var(--vcmv-gold) 15%, transparent)" }}
      />
      
      {/* Decorative Gold Glow */}
      <motion.div 
        className="absolute -left-[20%] top-[30%] w-[50%] h-[50%] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--vcmv-gold) 40%, transparent) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 xl:py-40 z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "100%" } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex items-center gap-6 mb-12 lg:mb-16 overflow-hidden"
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
              What We Do
            </span>
            <span
              className="flex-1 h-px w-full"
              style={{ backgroundColor: "color-mix(in srgb, var(--vcmv-gold) 15%, transparent)" }}
            />
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            <h2
              className="max-w-[700px]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                fontWeight: 600,
                color: "var(--vcmv-ivory)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              {[
                { text: "Expertise", em: false },
                { text: " that", em: false },
                { text: " moves", em: true },
                { text: " your", em: false },
                { text: " business", em: false },
                { text: " forward.", em: true },
              ].map((chunk, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -30 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block origin-bottom mr-[0.25em]"
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full border border-color-mix(in srgb, var(--vcmv-gold) 30%, transparent) text-[var(--vcmv-gold)] transition-colors duration-300 hover:text-[var(--vcmv-charcoal)]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  borderColor: "color-mix(in srgb, var(--vcmv-gold) 30%, transparent)"
                }}
              >
                <span className="absolute inset-0 w-full h-full bg-[var(--vcmv-gold)] translate-y-[110%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]"></span>
                <span className="relative flex items-center gap-3">
                  View All Services
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xl leading-none"
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-px lg:bg-[color-mix(in_srgb,var(--vcmv-gold)_15%,transparent)] lg:border-t lg:border-b lg:border-[color-mix(in_srgb,var(--vcmv-gold)_15%,transparent)]">
          {services.map((service, i) => (
            <Link href={`/services/${service.id}`} key={service.id} passHref legacyBehavior>
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex flex-col group bg-[var(--vcmv-charcoal)] h-full rounded-sm border border-[color-mix(in_srgb,var(--vcmv-gold)_15%,transparent)] lg:border-none lg:rounded-none z-0 hover:z-10"
                style={{
                  padding: "3.5rem 2.5rem",
                  textDecoration: "none",
                  boxShadow: hovered === service.id ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  transition: "box-shadow 0.5s ease",
                  transform: hovered === service.id ? "translateY(-4px)" : "translateY(0)",
                }}
              >
                {/* Number */}
                <span
                  className="block mb-6 text-xs tracking-[0.2em] font-semibold"
                  style={{
                    color: hovered === service.id ? "var(--vcmv-gold)" : "color-mix(in srgb, var(--vcmv-cream) 40%, transparent)",
                    fontFamily: "var(--font-inter)",
                    transition: "color 0.4s ease",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Hover Reveal Highlight Line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ease-[0.19,1,0.22,1]"
                  style={{
                    backgroundColor: "var(--vcmv-gold)",
                    opacity: hovered === service.id ? 1 : 0,
                    transform: hovered === service.id ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top"
                  }}
                />
                
                {/* Hover Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--vcmv-gold) 8%, transparent) 0%, transparent 60%)"
                  }}
                />

                {/* Title */}
                <h3
                  className="mb-4 transition-colors duration-400"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: hovered === service.id ? "var(--vcmv-gold)" : "var(--vcmv-ivory)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="flex-grow mb-8"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "1rem",
                    color: "color-mix(in srgb, var(--vcmv-cream) 70%, transparent)",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {service.description}
                </p>

                {/* Animated Arrow CTA */}
                <div 
                  className="overflow-hidden mt-auto pt-4 border-t border-color-mix(in srgb, var(--vcmv-gold) 15%, transparent) flex items-center justify-between transition-transform duration-500 ease-[0.19,1,0.22,1]"
                  style={{
                    transform: hovered === service.id ? "scale(1.03)" : "scale(1)",
                    transformOrigin: "left center"
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300"
                    style={{
                      color: hovered === service.id ? "var(--vcmv-gold)" : "color-mix(in srgb, var(--vcmv-cream) 50%, transparent)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    Learn more
                  </span>
                  <span
                    className="transition-transform duration-500 ease-[0.19,1,0.22,1] text-lg"
                    style={{
                      color: "var(--vcmv-gold)",
                      transform: hovered === service.id ? "translateX(0)" : "translateX(-120%)",
                      opacity: hovered === service.id ? 1 : 0
                    }}
                  >
                    →
                  </span>
                </div>
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
