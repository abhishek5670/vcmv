"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <VCMVNavbar />
      <section
        className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "var(--vcmv-ivory)" }}
      >
        {/* Background watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="text-[20vw] font-bold leading-none tracking-tighter opacity-[0.04]"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "var(--vcmv-charcoal)",
            }}
          >
            404
          </span>
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs tracking-[0.28em] uppercase mb-6"
              style={{
                fontFamily: "var(--font-inter)",
                color: "var(--vcmv-gold)",
                fontWeight: 500,
              }}
            >
              Page Not Found
            </p>
            <h1
              className="mb-6 tracking-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 500,
                color: "var(--vcmv-charcoal)",
                lineHeight: 1.1,
              }}
            >
              This page doesn&apos;t exist.
            </h1>
            <p
              className="mb-10 leading-relaxed"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.95rem",
                color: "var(--vcmv-taupe)",
                fontWeight: 300,
              }}
            >
              The page you&apos;re looking for may have been moved or removed.
              Return to our homepage or explore our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/"
                className="px-8 py-4 text-xs tracking-widest uppercase transition-all duration-200"
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
                Back to Home
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color: "var(--vcmv-charcoal)",
                  border: "1px solid color-mix(in srgb, var(--vcmv-gold) 40%, transparent)",
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
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
