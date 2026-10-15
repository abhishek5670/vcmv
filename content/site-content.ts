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
  body: "V C M V & Associates LLP is a multidisciplinary firm of Chartered Accountants specialising in Direct Tax, International Tax, Transfer Pricing, GST, Assurance and Business Advisory. We bring together deep regulatory knowledge and practical commercial insight to help clients navigate complexity—confidently and effectively.",
  cta: "Discover V C M V",
  image:
    "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1000&q=80&fit=crop",
};

export const services = [
  {
    id: "forensic-audit",
    title: "Forensic Audit & Investigations",
    description:
      "In-depth forensic accounting, fraud investigations, fund diversion detection, IBC audits, and dispute resolution advisory.",
  },
  {
    id: "inventory-audit",
    title: "Stock Audit & Inventory Verification",
    description:
      "Independent physical stock counts, bank consortium audits, warehouse verification, reconciliation, and shrinkage analysis.",
  },
  {
    id: "ipo-advisory",
    title: "IPO Advisory & Capital Markets",
    description:
      "SME & Mainboard IPO readiness, restatement of financial statements, DRHP assistance, and capital market structuring.",
  },
  {
    id: "india-entry",
    title: "Foreign Company Incorporation & India Entry",
    description:
      "End-to-end entity setup, wholly owned subsidiaries, FDI regulations, RBI & FEMA compliance, and cross-border structuring.",
  },
  {
    id: "direct-tax",
    title: "Direct Tax",
    description:
      "Strategic tax structuring, corporate tax planning, and advisory that minimises liability while keeping you fully compliant.",
  },
  {
    id: "international-tax",
    title: "International Tax",
    description:
      "Cross-border tax planning and treaty advisory for businesses operating across multiple international jurisdictions.",
  },
  {
    id: "transfer-pricing",
    title: "Transfer Pricing",
    description:
      "Documentation, benchmarking, master/local file compliance, and dispute resolution for inter-company transactions.",
  },
  {
    id: "gst-indirect-tax",
    title: "GST & Indirect Tax",
    description:
      "End-to-end GST compliance, refund processing, supply chain tax optimization, and litigation representation.",
  },
  {
    id: "assurance",
    title: "Assurance & Audit",
    description:
      "Statutory, tax, internal, and IFC audits that deliver rigorous transparency and build stakeholder confidence.",
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
  ctaHref: "/contact",
};
