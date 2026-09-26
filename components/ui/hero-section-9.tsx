"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps["variant"];
  className?: string;
}

export interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

// ─── Animation Variants ────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 } as Transition,
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } as Transition,
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } as Transition,
  },
};

const floatingTransition: Transition = {
  duration: 3.5,
  repeat: Infinity,
  ease: "easeInOut",
};

// ─── Component ────────────────────────────────────────────────────────────────
const HeroSection = ({
  title,
  subtitle,
  actions,
  stats,
  images,
  className,
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-background py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 sm:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 lg:py-28 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 lg:py-32",
        className,
      )}
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-6 md:gap-8 lg:gap-12 px-6 lg:grid-cols-2 lg:gap-8 md:gap-6 md:gap-8 lg:gap-12 lg:gap-16 lg:px-12">
        {/* ── Left: Text ───────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Category label */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-3"
          >
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
              CA · Tax · Assurance · Advisory
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              fontWeight: 600,
              color: "var(--vcmv-charcoal)",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-md"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1rem",
              color: "var(--vcmv-taupe)",
              lineHeight: 1.78,
              fontWeight: 300,
              margin: "1.5rem 0 0",
            }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                onClick={action.onClick}
                variant={action.variant}
                size="lg"
                className={action.className}
              >
                {action.text}
              </Button>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "var(--vcmv-cream)",
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <p
                    style={{
                      color: "var(--vcmv-charcoal)",
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.45rem",
                      fontWeight: 600,
                      lineHeight: 1.1,
                      margin: 0,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      color: "var(--vcmv-taupe)",
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.7rem",
                      fontWeight: 400,
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                      margin: "2px 0 0",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Image Collage ─────────────────────────────────── */}
        <motion.div
          className="relative h-[420px] w-full sm:h-[520px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative floating shapes */}
          <motion.div
            className="absolute -top-3 left-1/4 h-14 w-14 rounded-full"
            style={{ backgroundColor: "color-mix(in srgb, var(--vcmv-gold) 18%, transparent)" }}
            animate={{ y: [0, -10, 0] }}
            transition={floatingTransition}
          />
          <motion.div
            className="absolute bottom-2 right-1/4 h-10 w-10"
            style={{
              backgroundColor: "color-mix(in srgb, var(--vcmv-taupe) 13%, transparent)",
              borderRadius: "3px",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ ...floatingTransition, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-2 h-5 w-5 rounded-full"
            style={{ backgroundColor: "color-mix(in srgb, var(--vcmv-gold) 22%, transparent)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ ...floatingTransition, delay: 1 }}
          />

          {/* Top-centre image */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 h-52 w-52 p-1.5 shadow-xl sm:h-64 sm:w-64"
            style={{
              backgroundColor: "var(--vcmv-cream)",
              border: "1px solid color-mix(in srgb, var(--vcmv-gold) 35%, transparent)",
              transformOrigin: "bottom center",
            }}
            variants={imageVariants}
          >
            <img
              src={images[0]}
              alt="VCMV advisory professionals"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Bottom-right image */}
          <motion.div
            className="absolute right-0 top-1/3 h-40 w-40 p-1.5 shadow-xl sm:h-56 sm:w-56"
            style={{
              backgroundColor: "var(--vcmv-cream)",
              border: "1px solid color-mix(in srgb, var(--vcmv-gold) 35%, transparent)",
              transformOrigin: "left center",
            }}
            variants={imageVariants}
          >
            <img
              src={images[1]}
              alt="Tax and financial documentation"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Bottom-left image */}
          <motion.div
            className="absolute bottom-0 left-0 h-32 w-32 p-1.5 shadow-xl sm:h-48 sm:w-48"
            style={{
              backgroundColor: "var(--vcmv-cream)",
              border: "1px solid color-mix(in srgb, var(--vcmv-gold) 35%, transparent)",
              transformOrigin: "top right",
            }}
            variants={imageVariants}
          >
            <img
              src={images[2]}
              alt="Client collaboration and advisory"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Bottom-right gold accent rule */}
          <div
            className="absolute -bottom-3 right-0 h-px"
            style={{
              width: "50%",
              backgroundColor: "var(--vcmv-gold)",
              opacity: 0.45,
            }}
          />

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute right-4 bottom-20 sm:right-6 sm:bottom-24 px-4 py-3"
            style={{
              backgroundColor: "var(--vcmv-charcoal)",
              zIndex: 10,
            }}
          >
            <p
              style={{
                color: "var(--vcmv-gold)",
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.15rem",
                fontWeight: 600,
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Trusted Advisors
            </p>
            <p
              style={{
                color: "color-mix(in srgb, var(--vcmv-cream) 62%, transparent)",
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.68rem",
                letterSpacing: "0.07em",
                margin: "3px 0 0",
              }}
            >
              Since Establishment
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
