"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { teamPageContent } from "@/content/team-content";
import { Mail, Phone } from "lucide-react";

export default function TeamPageClient() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });
  const { hero, members } = teamPageContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        description={hero.description}
      />

      {/* Team Grid */}
      <section
        ref={gridRef}
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
            {members.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="group flex flex-col"
              >
                {/* Image */}
                <div
                  className="relative w-full mb-6 overflow-hidden"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.designation} at VCMV & Associates LLP`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, color-mix(in srgb, var(--vcmv-charcoal) 70%, transparent) 100%)",
                    }}
                  />
                  {/* Gold accent bar on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: "var(--vcmv-gold)" }}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col">
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "var(--vcmv-charcoal)",
                      lineHeight: 1.2,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="mb-1 text-sm"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color: "var(--vcmv-taupe)",
                      fontWeight: 400,
                    }}
                  >
                    {member.designation}
                  </p>
                  <p
                    className="text-xs mb-4"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color: "var(--vcmv-gold)",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {member.focus}
                  </p>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {member.areasOfExpertise.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 text-xs"
                        style={{
                          fontFamily: "var(--font-inter)",
                          color: "var(--vcmv-taupe)",
                          border:
                            "1px solid color-mix(in srgb, var(--vcmv-gold) 25%, transparent)",
                          backgroundColor: "var(--vcmv-ivory)",
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-4 mb-5">
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="transition-colors duration-200"
                      style={{ color: "var(--vcmv-taupe)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--vcmv-gold)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--vcmv-taupe)")
                      }
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      aria-label={`Call ${member.name}`}
                      className="transition-colors duration-200"
                      style={{ color: "var(--vcmv-taupe)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--vcmv-gold)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--vcmv-taupe)")
                      }
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>

                  {/* View Profile */}
                  <Link
                    href={`/team/${member.id}`}
                    className="mt-auto inline-block text-xs tracking-[0.12em] uppercase transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      color: "var(--vcmv-charcoal)",
                      textDecoration: "none",
                      paddingBottom: "3px",
                      borderBottom:
                        "1px solid color-mix(in srgb, var(--vcmv-gold) 40%, transparent)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--vcmv-gold)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--vcmv-gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--vcmv-charcoal)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "color-mix(in srgb, var(--vcmv-gold) 40%, transparent)";
                    }}
                  >
                    View Profile →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative"
        style={{ backgroundColor: "var(--vcmv-charcoal)" }}
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
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--vcmv-gold)",
              }}
            >
              Work with us
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 600,
                color: "var(--vcmv-ivory)",
                lineHeight: 1.18,
              }}
            >
              Talk to the right expert for your requirement.
            </h2>
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
                  "var(--vcmv-cream)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--vcmv-gold)";
              }}
            >
              Get in Touch →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
