"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowLeft } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  focus: string;
  image: string;
  phone: string;
  email: string;
  education: string[];
  icaiStatus: string;
  experience: string;
  previousExperience: string;
  areasOfExpertise: string[];
  industryExperience: string[];
  summary: string;
}

interface Props {
  member: TeamMember;
}

export default function TeamMemberClient({ member }: Props) {
  return (
    <>
      {/* Hero / Header */}
      <section
        className="relative overflow-hidden pt-20 md:pt-24 lg:pt-32 pb-8 md:pb-10 lg:pb-12 lg:pt-40 lg:pb-16"
        style={{ backgroundColor: "var(--vcmv-charcoal)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 50%, color-mix(in srgb, var(--vcmv-gold) 6%, transparent) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase transition-colors duration-200"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                color:
                  "color-mix(in srgb, var(--vcmv-cream) 50%, transparent)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--vcmv-gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "color-mix(in srgb, var(--vcmv-cream) 50%, transparent)")
              }
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Our Team
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 md:gap-8 lg:gap-12 lg:gap-10 md:gap-14 lg:gap-20 items-start">
            {/* Left — Portrait + Contact */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              {/* Image */}
              <div
                className="relative w-full mb-8 overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.designation}, VCMV & Associates LLP`}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 340px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, color-mix(in srgb, var(--vcmv-charcoal) 55%, transparent) 100%)",
                  }}
                />
                {/* Gold accent bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: "var(--vcmv-gold)" }}
                />
              </div>

              {/* Contact buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 px-5 py-3.5 transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    color:
                      "color-mix(in srgb, var(--vcmv-cream) 70%, transparent)",
                    textDecoration: "none",
                    border:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 25%, transparent)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--vcmv-gold)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--vcmv-gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "color-mix(in srgb, var(--vcmv-gold) 25%, transparent)";
                    (e.currentTarget as HTMLElement).style.color =
                      "color-mix(in srgb, var(--vcmv-cream) 70%, transparent)";
                  }}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "var(--vcmv-gold)" }} />
                  {member.email}
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-3 px-5 py-3.5 transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    color:
                      "color-mix(in srgb, var(--vcmv-cream) 70%, transparent)",
                    textDecoration: "none",
                    border:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 25%, transparent)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--vcmv-gold)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--vcmv-gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "color-mix(in srgb, var(--vcmv-gold) 25%, transparent)";
                    (e.currentTarget as HTMLElement).style.color =
                      "color-mix(in srgb, var(--vcmv-cream) 70%, transparent)";
                  }}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "var(--vcmv-gold)" }} />
                  {member.phone}
                </a>
              </div>
            </motion.div>

            {/* Right — Profile content */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
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
                  {member.designation}
                </span>
              </div>

              <h1
                className="mb-2"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                  fontWeight: 600,
                  color: "var(--vcmv-ivory)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                {member.name}
              </h1>

              <p
                className="mb-2"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.95rem",
                  color: "var(--vcmv-gold)",
                  fontWeight: 500,
                }}
              >
                {member.focus}
              </p>

              <div
                className="h-px w-16 my-6"
                style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.5 }}
              />

              {/* Summary */}
              <p
                className="mb-8 max-w-2xl"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  color:
                    "color-mix(in srgb, var(--vcmv-cream) 68%, transparent)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {member.summary}
              </p>

              {/* Details grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Education */}
                <div
                  className="py-6 pr-8"
                  style={{
                    borderTop:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                    borderBottom:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                  }}
                >
                  <p
                    className="mb-3 text-xs tracking-[0.16em] uppercase"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color:
                        "color-mix(in srgb, var(--vcmv-gold) 60%, transparent)",
                      fontWeight: 500,
                    }}
                  >
                    Education
                  </p>
                  {member.education.map((edu, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-inter)",
                        color:
                          "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                        fontWeight: 300,
                      }}
                    >
                      {edu}
                    </p>
                  ))}
                </div>

                {/* Experience */}
                <div
                  className="py-6 pl-0 md:pl-8"
                  style={{
                    borderTop:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                    borderBottom:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 18%, transparent)",
                    borderLeft:
                      "0px solid color-mix(in srgb, var(--vcmv-gold) 12%, transparent)",
                  }}
                >
                  <p
                    className="mb-3 text-xs tracking-[0.16em] uppercase"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color:
                        "color-mix(in srgb, var(--vcmv-gold) 60%, transparent)",
                      fontWeight: 500,
                    }}
                  >
                    Previous Experience
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color:
                        "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                      fontWeight: 300,
                    }}
                  >
                    {member.previousExperience}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise + Industry */}
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 md:gap-8 lg:gap-12 lg:gap-16">
            {/* Areas of Expertise */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
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
                  Areas of Expertise
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {member.areasOfExpertise.map((area, i) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="px-4 py-2"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.82rem",
                      fontWeight: 400,
                      color: "var(--vcmv-charcoal)",
                      border:
                        "1px solid color-mix(in srgb, var(--vcmv-gold) 30%, transparent)",
                      backgroundColor: "var(--vcmv-ivory)",
                    }}
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Industry Experience */}
            {member.industryExperience.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
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
                    Industry Experience
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {member.industryExperience.map((ind, i) => (
                    <motion.span
                      key={ind}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="px-4 py-2"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.82rem",
                        fontWeight: 400,
                        color: "var(--vcmv-taupe)",
                        border:
                          "1px solid color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
                        backgroundColor: "var(--vcmv-ivory)",
                      }}
                    >
                      {ind}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Experience detail */}
      <section
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
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
                  Experience
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  color:
                    "color-mix(in srgb, var(--vcmv-cream) 70%, transparent)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {member.experience}
              </p>
            </motion.div>
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
              Discuss Your Requirement →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
