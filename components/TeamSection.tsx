"use client";

import React from "react";
import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const teamMembers = [
  {
    name: "Vikram R",
    role: "Partner, VCMV & Associates LLP",
    image: "/team/Vikram.jpg",
    education: "B.Com — R.K.M. Vivekananda College, Chennai | Fellow Member, ICAI",
    experience: "15 years of experience",
    former: "Former Associate Director, International Tax & Transfer Pricing at B S R & Co. LLP (KPMG)",
    expertise: "International Tax, FEMA, Valuation, Transfer Pricing, Business Advisory, APA & MAP",
    industries: "Automotive, NBFC, IT/ITeS, Electronics, FMCG, Engineering, Power & Logistics",
    phone: "98841 91001",
    email: "vikram@vcmv.in",
    shapeClass: "rounded-[4rem] rounded-tl-none rounded-br-none bg-blue-600", // "Clover" edge style
  },
  {
    name: "Monish Gupta D",
    role: "Partner, VCMV & Associates LLP",
    image: "/team/monish.png",
    education: "B.Com — University of Madras | Fellow Member, ICAI",
    experience: "12+ years of experience",
    former: "Former Partner at a reputed Chennai CA firm",
    expertise: "GST, Indirect Tax Litigation & Assurance. Has advised entrepreneurs and worked with Central & State Governments.",
    industries: "",
    phone: "99628 69428",
    email: "monish@vcmv.in",
    shapeClass: "rounded-t-full bg-orange-500", // Arch style
  },
  {
    name: "Vinay Kumar Jain",
    role: "Partner, VCMV & Associates LLP",
    image: "/team/vinay.png",
    education: "B.Com — University of Madras | Fellow Member, ICAI",
    experience: "12+ years of experience",
    former: "Former Partner heading Income Tax & Audit services at a reputed Chennai CA firm",
    expertise: "Income Tax, Tax Litigation, Audit, Investment Advisory & Finance. Works with companies, entrepreneurs and government projects.",
    industries: "",
    phone: "98842 72661",
    email: "vinay@vcmv.in",
    shapeClass: "rounded-[3rem] bg-emerald-600", // Super rounded square
  },
  {
    name: "Rakesh Kumar",
    role: "Partner, VCMV & Associates LLP",
    image: "/team/rakesh.jpg",
    education: "B.Com — University of Madras | Associate Member, ICAI",
    experience: "7+ years at R.G.N Price & Co.",
    former: "Former Deputy Manager at Royal Enfield — Forensics & Internal Audits",
    expertise: "Statutory Audit, Forensic Audit, Internal Audit & IFC",
    industries: "Manufacturing, Stock Broking, Trading & IT",
    phone: "98414 55618",
    email: "rakesh@vcmv.in",
    shapeClass: "rounded-b-full bg-indigo-500", // Reverse arch
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 md:mb-24 text-center">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, color: "var(--foreground)" }}
          >
            Creative Team Showcase
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", color: "var(--muted-foreground)" }}
          >
            A grid of animated profile cards for showcasing a team's members, roles, and social links.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      {/* Image Container with Geometric Shape */}
      <div className={cn("relative w-full aspect-square overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02] bg-muted", member.shapeClass)}>
        
        {/* Background color that appears on hover (if image has transparency) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-current -z-10" />

        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-all duration-700 ease-out group-hover:grayscale z-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Tint overlay for JPGs that don't have transparency (optional, gives a colorful tint on hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 mix-blend-color bg-current z-20 pointer-events-none" />
      </div>

      {/* Text Area (Unbounded & Centered) */}
      <div className="flex flex-col items-center text-center">
        <h3
          className="text-2xl mb-1"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          {member.name}
        </h3>
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-inter)", color: "var(--muted-foreground)", fontWeight: 400 }}
        >
          {member.role}
        </p>

        {/* Social / Contact Icons */}
        <div className="flex items-center gap-4 mt-5">
          <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`Call ${member.name}`}>
            <Globe className="w-5 h-5" />
          </a>
          <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`Email ${member.name}`}>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
