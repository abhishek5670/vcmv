import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://vcmv.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "V C M V & Associates LLP — CA, Tax, Assurance & Business Advisory",
    template: "%s | V C M V & Associates LLP",
  },
  description:
    "V C M V & Associates LLP is a multidisciplinary firm of Chartered Accountants in Chennai specialising in Direct Tax, International Tax, Transfer Pricing, GST, Assurance, Forensic Audit, Business Valuation and Advisory.",
  keywords: [
    "Chartered Accountants Chennai",
    "CA Firm Chennai",
    "Tax Advisory Chennai",
    "International Tax",
    "Transfer Pricing India",
    "GST Consultants Chennai",
    "Assurance and Audit",
    "Business Advisory",
    "V C M V",
    "VCMV & Associates",
    "Nungambakkam CA Firm",
    "Big4 Alumni CA",
    "Forensic Audit Chennai",
    "Business Valuation India",
    "M&A Advisory India",
    "India Entry Strategy",
  ],
  authors: [{ name: "V C M V & Associates LLP", url: BASE_URL }],
  creator: "V C M V & Associates LLP",
  publisher: "V C M V & Associates LLP",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "V C M V & Associates LLP — CA, Tax, Assurance & Business Advisory",
    description:
      "Professional expertise. Practical thinking. Lasting value. Multidisciplinary CA firm founded by Big4 alumni in Chennai, India.",
    type: "website",
    url: BASE_URL,
    siteName: "V C M V & Associates LLP",
    locale: "en_IN",
    images: [
      {
        url: "/VCMV-logo.png",
        width: 1200,
        height: 630,
        alt: "V C M V & Associates LLP — Chartered Accountants & Advisors",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V C M V & Associates LLP — CA, Tax, Assurance & Business Advisory",
    description:
      "Professional expertise. Practical thinking. Lasting value. CA, Tax, Assurance & Business Advisory in Chennai, India.",
    images: ["/VCMV-logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Finance & Legal Services",
};

// Comprehensive JSON-LD Schema for SEO, AEO, and GEO (Local & Answer Engines)
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AccountingService", "ProfessionalService"],
      "@id": `${BASE_URL}/#organization`,
      name: "V C M V & Associates LLP",
      alternateName: ["VCMV & Associates", "VCMV", "VCMV CA Firm Chennai"],
      legalName: "V C M V & Associates LLP",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/VCMV-logo.png`,
        width: 1200,
        height: 630,
      },
      image: `${BASE_URL}/VCMV-logo.png`,
      description:
        "V C M V & Associates LLP is a multidisciplinary Chartered Accountants firm founded by Big4 alumni in Chennai, India. Specialising in Direct Tax, International Tax, Transfer Pricing, GST, Assurance, Forensic Audit, Business Valuation, M&A, and India Entry Advisory.",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Willingdon Crescent, 4th Floor, No. 6/2, Dr. S.S. Badrinath Road, Thousand Lights West, Nungambakkam",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600006",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.0604,
        longitude: 80.2496,
      },
      telephone: "+919962869428",
      email: "monish@vcmv.in",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:30",
          closes: "18:30",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "INR, USD, EUR, GBP, SGD, AED",
      paymentAccepted: "Bank Transfer, Wire Transfer, UPI, Credit Card, Cheque",
      areaServed: [
        { "@type": "City", name: "Chennai" },
        { "@type": "State", name: "Tamil Nadu" },
        { "@type": "Country", name: "India" },
        { "@type": "AdministrativeArea", name: "Global / Cross-Border" },
      ],
      founder: [
        {
          "@type": "Person",
          name: "Monish Gupta D",
          jobTitle: "Partner — GST & Assurance",
          alumniOf: "The Institute of Chartered Accountants of India (ICAI)",
          url: `${BASE_URL}/team/monish-gupta-d`,
        },
        {
          "@type": "Person",
          name: "Vinay Kumar Jain",
          jobTitle: "Partner — Direct Tax & Investment Advisory",
          alumniOf: "The Institute of Chartered Accountants of India (ICAI)",
          url: `${BASE_URL}/team/vinay-kumar-jain`,
        },
        {
          "@type": "Person",
          name: "Rakesh Kumar",
          jobTitle: "Partner — Audit & Forensic Advisory",
          alumniOf: "The Institute of Chartered Accountants of India (ICAI)",
          url: `${BASE_URL}/team/rakesh-kumar`,
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Chartered Accountancy & Advisory Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Direct Tax Advisory",
              url: `${BASE_URL}/services/direct-tax`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "International Tax",
              url: `${BASE_URL}/services/international-tax`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transfer Pricing",
              url: `${BASE_URL}/services/transfer-pricing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "GST & Indirect Tax",
              url: `${BASE_URL}/services/gst-indirect-tax`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Assurance & Audit",
              url: `${BASE_URL}/services/assurance`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Forensic Audit",
              url: `${BASE_URL}/services/forensic-audit`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Valuation",
              url: `${BASE_URL}/services/valuation`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mergers & Acquisitions",
              url: `${BASE_URL}/services/mergers-acquisitions`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "India Entry Strategies",
              url: `${BASE_URL}/services/india-entry`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IPO Advisory",
              url: `${BASE_URL}/services/ipo-advisory`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Inventory Audit",
              url: `${BASE_URL}/services/inventory-audit`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Taxation of Expatriates",
              url: `${BASE_URL}/services/expatriates`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tax Litigation",
              url: `${BASE_URL}/services/litigation`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "V C M V & Associates LLP",
      description: "Chartered Accountants, Tax & Business Advisory in Chennai, India",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* GEO — AI answer engine discovery */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs manifest" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs full content" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Theming option (commented out) */}
        {/* <ThemeProvider
          attribute="data-theme"
          defaultTheme="default"
          themes={["default", "green", "slate"]}
          disableTransitionOnChange
        > */}
          {children}
          {/* <ThemeSwitcher />
        </ThemeProvider> */}
      </body>
    </html>
  );
}
