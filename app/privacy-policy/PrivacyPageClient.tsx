"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";

const sections = [
  {
    title: "Information We Collect",
    content: `When you use our contact form, we collect the personal information you voluntarily provide — including your name, company name, email address, phone number, and the nature of your enquiry. We may also collect technical data such as your browser type and IP address through server logs for security and analytics purposes.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information you provide solely to respond to your enquiry, to provide the professional services you have requested, and to send you relevant communications related to V C M V & Associates LLP. We do not sell, rent, or otherwise transfer your personal information to third parties for marketing purposes.`,
  },
  {
    title: "Data Storage & Security",
    content: `Your information is stored securely and accessible only to authorised personnel at V C M V & Associates LLP. We implement reasonable administrative, technical, and physical safeguards to protect personal data from unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet is completely secure.`,
  },
  {
    title: "Cookies & Analytics",
    content: `Our website may use cookies to improve your browsing experience. We may use analytics tools (such as Google Analytics) to understand how visitors interact with our site. This data is aggregated and anonymised. You may disable cookies through your browser settings, though this may affect certain site functionality.`,
  },
  {
    title: "Third-Party Services",
    content: `Our website may contain links to third-party websites and embeds (such as Google Maps). We are not responsible for the privacy practices or content of these external sites. We recommend reviewing their privacy policies before providing any personal information.`,
  },
  {
    title: "Retention",
    content: `We retain your personal data only for as long as is necessary to fulfil the purposes set out in this policy, or as required by applicable law or professional obligations. Enquiry data is typically retained for a period of three years unless a professional engagement commences.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, correct, or request deletion of the personal data we hold about you. To exercise any of these rights, please contact us at the details below. We will respond within a reasonable timeframe in accordance with applicable data protection laws.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact:\n\nV C M V & Associates LLP\nWillingdon Crescent, 4th Floor, No. 6/2, Dr. S.S. Badrinath Road,\nThousand Lights West, Nungambakkam, Chennai, Tamil Nadu – 600 006\nEmail: monish@vcmv.in\nPhone: +91 99628 69428`,
  },
];

export default function PrivacyPageClient() {
  const heroRef = useRef(null);

  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        heading="Privacy Policy"
        description="This policy explains how V C M V & Associates LLP collects, uses, and protects your personal information."
      />

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
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <p
            className="mb-10 text-sm"
            style={{
              fontFamily: "var(--font-inter)",
              color: "var(--vcmv-taupe)",
              fontWeight: 300,
            }}
          >
            Last updated: October 2024
          </p>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <SectionBlock key={section.title} section={section} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionBlock({
  section,
  index,
}: {
  section: { title: string; content: string };
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="inline-block h-px w-6 flex-shrink-0"
          style={{ backgroundColor: "var(--vcmv-gold)" }}
        />
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.4rem",
            fontWeight: 600,
            color: "var(--vcmv-charcoal)",
          }}
        >
          {section.title}
        </h2>
      </div>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.9rem",
          color: "var(--vcmv-taupe)",
          fontWeight: 300,
          lineHeight: 1.85,
          whiteSpace: "pre-line",
        }}
      >
        {section.content}
      </p>
    </motion.div>
  );
}
