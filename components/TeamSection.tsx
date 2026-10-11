"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { teamPageContent, TeamMember } from "@/content/team-content";

const shapeClasses = [
  "rounded-t-full bg-orange-500", // Arch style
  "rounded-[3rem] bg-emerald-600", // Super rounded square
  "rounded-b-full bg-indigo-500", // Reverse arch
];

export default function TeamSection() {
  const { hero, members } = teamPageContent;

  return (
    <section id="team" className="py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 md:mb-24 text-center">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "var(--foreground)" }}
          >
            {hero.heading}
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", color: "var(--muted-foreground)" }}
          >
            {hero.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 md:gap-8 lg:gap-12">
          {members.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
              shapeClass={member.shapeClass || shapeClasses[index % shapeClasses.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  index,
  shapeClass,
}: {
  member: TeamMember;
  index: number;
  shapeClass: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      {/* Image Container with Geometric Shape */}
      <Link href={`/team/${member.id}`} className="block focus:outline-none">
        <div className={cn("relative w-full aspect-square overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02] bg-muted", shapeClass)}>
          {/* Background color that appears on hover (if image has transparency) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-current -z-10" />

          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-all duration-700 ease-out group-hover:grayscale z-10"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Tint overlay for JPGs that don't have transparency */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 mix-blend-color bg-current z-20 pointer-events-none" />
        </div>
      </Link>

      {/* Text Area */}
      <div className="flex flex-col items-center text-center">
        <Link href={`/team/${member.id}`} className="group-hover:underline focus:outline-none">
          <h3
            className="text-2xl mb-1"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            {member.name}
          </h3>
        </Link>
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-inter)", color: "var(--muted-foreground)", fontWeight: 400 }}
        >
          {member.designation} · {member.focus}
        </p>

        {/* Contact Icons */}
        <div className="flex items-center gap-4 mt-5">
          {member.phone && (
            <a
              href={`tel:${member.phone.replace(/\s+/g, '')}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`Call ${member.name}`}
            >
              <Phone className="w-5 h-5" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

