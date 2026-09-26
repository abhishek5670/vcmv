"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, ReactNode } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ServiceSection {
  title: string;
  items: string[];
}

interface ServicePageLayoutProps {
  heroHeading: string;
  heroDescription: string;
  heroDark?: boolean;
  sections: ServiceSection[];
  ctaText: string;
  ctaHref?: string;
  children?: ReactNode;
  imageSrc?: string;
}

function ServiceAccordionItem({
  section,
  index,
  isOpen,
  onToggle,
}: {
  section: ServiceSection;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b"
      style={{ borderColor: "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)" }}
    >
      <button
        onClick={onToggle}
        className="w-full py-8 lg:py-10 flex items-center justify-between text-left group outline-none"
      >
        <div className="flex items-center gap-6 lg:gap-12">
          <span
            className="text-sm lg:text-base font-semibold tracking-[0.2em] transition-colors duration-300"
            style={{
              fontFamily: "var(--font-inter)",
              color: isOpen ? "var(--vcmv-gold)" : "color-mix(in srgb, var(--vcmv-gold) 50%, transparent)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className="text-2xl md:text-3xl lg:text-4xl transition-colors duration-300"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 500,
              color: isOpen ? "var(--vcmv-gold)" : "var(--vcmv-ivory)",
            }}
          >
            {section.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-6 flex-shrink-0"
        >
          <ChevronDown
            size={28}
            strokeWidth={1.5}
            style={{
              color: isOpen ? "var(--vcmv-gold)" : "color-mix(in srgb, var(--vcmv-ivory) 40%, transparent)",
            }}
            className="transition-colors duration-300 group-hover:text-[var(--vcmv-gold)]"
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-[4.5rem] lg:pl-[6.5rem]">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-4 group/item"
                  >
                    <span className="mt-2.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--vcmv-gold)] transition-transform duration-300 group-hover/item:scale-150" />
                    <span className="text-[color-mix(in_srgb,var(--vcmv-cream)_80%,transparent)] text-[0.95rem] lg:text-base font-light leading-relaxed group-hover/item:text-[var(--vcmv-ivory)] transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicePageLayout({
  heroHeading,
  heroDescription,
  sections,
  ctaText,
  ctaHref = "/contact",
  children,
  imageSrc,
}: ServicePageLayoutProps) {
  // Always keep first section open by default for better UX
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenSectionIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {imageSrc ? (
        <section className="relative w-full min-h-[65vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[var(--vcmv-charcoal)] pt-24 pb-16">
          <div className="absolute inset-0 bg-[var(--vcmv-charcoal)]/60 z-10 pointer-events-none" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src={imageSrc}
            alt={heroHeading}
            className="absolute inset-0 w-full h-full object-cover filter grayscale-[10%] contrast-[1.1] z-0"
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--vcmv-charcoal)] to-transparent z-10 pointer-events-none" />
          
          <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 lg:px-20 text-center mt-10 md:mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                color: "var(--vcmv-ivory)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              {heroHeading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-inter)",
                color: "color-mix(in srgb, var(--vcmv-cream) 90%, transparent)",
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              {heroDescription}
            </motion.p>
          </div>
        </section>
      ) : (
        <PageHero heading={heroHeading} description={heroDescription} dark />
      )}

      {/* Custom children section (if any) */}
      {children}

      {/* Accordion Service Sections */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--vcmv-charcoal)" }}
      >
        <div className="max-w-[70rem] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-24">
          <div 
            className="border-t"
            style={{ borderColor: "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)" }}
          >
            {sections.map((section, i) => (
              <ServiceAccordionItem
                key={section.title}
                section={section}
                index={i}
                isOpen={openSectionIndex === i}
                onToggle={() => toggleSection(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Minimal CTA Section */}
      <section
        className="relative"
        style={{ backgroundColor: "var(--vcmv-ivory)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-[color-mix(in_srgb,var(--vcmv-gold)_20%,transparent)]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col items-center"
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-5xl mb-10 text-[var(--vcmv-charcoal)]"
              style={{ fontFamily: "var(--font-cormorant)", lineHeight: 1.1, fontWeight: 600 }}
            >
              Ready to discuss your requirements?
            </h2>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center transition-all duration-300 group overflow-hidden relative"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--vcmv-gold)",
                backgroundColor: "var(--vcmv-charcoal)",
                textDecoration: "none",
                padding: "1.25rem 3rem",
              }}
            >
              <span className="absolute inset-0 w-full h-full bg-[var(--vcmv-gold)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
              <span className="relative z-10 group-hover:text-[var(--vcmv-charcoal)] transition-colors duration-500 flex items-center gap-3">
                {ctaText.replace(" →", "")}
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
      </section>
    </>
  );
}
