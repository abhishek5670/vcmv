"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import PageHero from "@/components/PageHero";
import { servicesOverviewContent } from "@/content/services-content";
import {
  Scale,
  Globe,
  BarChart3,
  Receipt,
  Users,
  ShieldCheck,
  Gavel,
  TrendingUp,
  Handshake,
  Building2,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import type { LucideProps } from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Scale,
  Globe,
  BarChart3,
  Receipt,
  Users,
  ShieldCheck,
  Gavel,
  TrendingUp,
  Handshake,
  Building2,
  Briefcase,
};

export default function ServicesPageClient() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<string | null>(null);

  const { hero, services } = servicesOverviewContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        description={hero.description}
      />

      {/* High-End Services Grid (No Images, Typography & Flow Focus) */}
      <section
        ref={gridRef}
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--vcmv-charcoal)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)" }}
        />
        
        {/* Decorative Gold Glow */}
        <motion.div 
          className="absolute -right-[20%] top-[10%] w-[60%] h-[60%] rounded-full opacity-10 blur-[150px] pointer-events-none"
          style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--vcmv-gold) 40%, transparent) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 xl:py-40 z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-px lg:bg-[color-mix(in_srgb,var(--vcmv-gold)_15%,transparent)] lg:border lg:border-[color-mix(in_srgb,var(--vcmv-gold)_15%,transparent)]">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Link href={service.href} key={service.id} passHref legacyBehavior>
                  <motion.a
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
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
                        background: "radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--vcmv-gold) 6%, transparent) 0%, transparent 60%)"
                      }}
                    />

                    {/* Header Row: Number + Icon */}
                    <div className="flex items-start justify-between mb-8">
                      <span
                        className="block text-xs tracking-[0.2em] font-semibold"
                        style={{
                          color: hovered === service.id ? "var(--vcmv-gold)" : "color-mix(in srgb, var(--vcmv-cream) 30%, transparent)",
                          fontFamily: "var(--font-inter)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {IconComponent && (
                        <div
                          className="w-6 h-6 transition-all duration-500 ease-[0.19,1,0.22,1]"
                          style={{
                            color: hovered === service.id ? "var(--vcmv-gold)" : "color-mix(in srgb, var(--vcmv-cream) 40%, transparent)",
                            transform: hovered === service.id ? "scale(1.2)" : "scale(1)",
                          }}
                        >
                          <IconComponent className="w-full h-full stroke-[1.5]" />
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-4 transition-colors duration-400"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.9rem",
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
                        fontSize: "0.95rem",
                        color: "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Animated Arrow CTA */}
                    <div 
                      className="overflow-hidden mt-auto pt-5 border-t border-color-mix(in srgb, var(--vcmv-gold) 15%, transparent) flex items-center justify-between transition-transform duration-500 ease-[0.19,1,0.22,1]"
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
                        Explore Service
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
