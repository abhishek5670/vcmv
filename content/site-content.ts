// VCMV site content — single source of truth for all copy

export const navItems = [
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Team", link: "/team" },
  { name: "Insights", link: "/insights" },
  { name: "Contact", link: "/contact" },
];

export const heroSection = {
  images: [
    // Top-centre: boardroom / advisory
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop",
    // Bottom-right: documents / finance
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&fit=crop",
    // Bottom-left: team collaboration
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop",
  ],
};

export const heroSlides = [
  {
    id: 1,
    heading: "Strategic Tax & Advisory Solutions",
    body: "Helping businesses navigate complex tax, regulatory and financial challenges with clarity and confidence.",
    cta: "Explore Our Services →",
    ctaHref: "#services",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80&fit=crop",
  },
  {
    id: 2,
    heading: "Expertise That Goes Beyond Compliance",
    body: "Practical tax and regulatory solutions designed around your business, not just the rulebook.",
    cta: "Our Expertise →",
    ctaHref: "#expertise",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80&fit=crop",
  },
  {
    id: 3,
    heading: "Clarity for Complex Business Decisions",
    body: "From transactions and restructuring to valuation and advisory, turn complexity into confident decisions.",
    cta: "Discover Our Expertise →",
    ctaHref: "#expertise",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1800&q=80&fit=crop",
  },
  {
    id: 4,
    heading: "Experience. Integrity. Value.",
    body: "Experienced professionals delivering thoughtful advice with a clear focus on what matters—your business.",
    cta: "Meet Our Team →",
    ctaHref: "#team",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800&q=80&fit=crop",
  },
];

export const aboutContent = {
  label: "WHO WE ARE",
  heading: "Professional expertise.\nPractical thinking.\nLasting value.",
  body: "VCMV & Associates LLP is a multidisciplinary firm of Chartered Accountants specialising in Direct Tax, International Tax, Transfer Pricing, GST, Assurance and Business Advisory. We bring together deep regulatory knowledge and practical commercial insight to help clients navigate complexity—confidently and effectively.",
  cta: "Discover VCMV →",
  image:
    "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1000&q=80&fit=crop",
};

export const services = [
  {
    id: "direct-tax",
    title: "Direct Tax",
    description:
      "Strategic tax structuring and advisory that minimises liability while keeping you fully compliant.",
  },
  {
    id: "international-tax",
    title: "International Tax",
    description:
      "Cross-border tax planning and treaty advisory for businesses operating across multiple jurisdictions.",
  },
  {
    id: "transfer-pricing",
    title: "Transfer Pricing",
    description:
      "Documentation, benchmarking and dispute resolution to protect your inter-company positions.",
  },
  {
    id: "gst-indirect-tax",
    title: "GST & Indirect Tax",
    description:
      "End-to-end GST compliance, planning and litigation support tailored to your business model.",
  },
  {
    id: "assurance",
    title: "Assurance",
    description:
      "Independent, rigorous audits that give stakeholders the confidence your numbers deserve.",
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    description:
      "Valuations, restructuring and strategic guidance that help you make better decisions, faster.",
  },
];

export const whyVCMV = {
  heading: "More than advice.\nA perspective you can rely on.",
  pillars: [
    {
      id: "expertise",
      label: "Expertise",
      copy: "Decades of collective experience across tax, assurance and advisory disciplines — brought to every engagement.",
    },
    {
      id: "integrity",
      label: "Integrity",
      copy: "Honest advice, delivered without compromise. Our independence and professional objectivity are non-negotiable.",
    },
    {
      id: "practical-thinking",
      label: "Practical Thinking",
      copy: "Solutions grounded in commercial reality — not textbook theory. We understand how business actually works.",
    },
    {
      id: "client-value",
      label: "Client Value",
      copy: "Every engagement is measured by the tangible difference it makes to your business, not just billable hours.",
    },
  ],
};

export const closingCTA = {
  heading: "Complex challenge?\nLet's find the right way forward.",
  body: "Talk to our team about your tax, advisory or business requirements.",
  cta: "Start a Conversation →",
  ctaHref: "#contact",
};
