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
    "V C M V & Associates LLP is a multidisciplinary firm of Chartered Accountants specialising in Direct Tax, International Tax, Transfer Pricing, GST, Assurance and Business Advisory.",
  keywords: [
    "Chartered Accountants",
    "Tax Advisory",
    "International Tax",
    "Transfer Pricing",
    "GST",
    "Assurance",
    "Business Advisory",
    "V C M V",
    "CA firm Chennai",
    "Nungambakkam CA",
  ],
  openGraph: {
    title: "V C M V & Associates LLP",
    description:
      "Professional expertise. Practical thinking. Lasting value. CA, Tax, Assurance & Business Advisory.",
    type: "website",
    url: BASE_URL,
    siteName: "V C M V & Associates LLP",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "V C M V & Associates LLP",
    description:
      "Professional expertise. Practical thinking. Lasting value. CA, Tax, Assurance & Business Advisory.",
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
    },
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "V C M V & Associates LLP",
  alternateName: "VCMV & Associates",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  description:
    "V C M V & Associates LLP is a multidisciplinary firm of Chartered Accountants providing Direct Tax, International Tax, Transfer Pricing, GST, Assurance and Business Advisory services.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Willingdon Crescent, 4th Floor, No. 6/2, Dr. S.S. Badrinath Road, Thousand Lights West, Nungambakkam",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600006",
    addressCountry: "IN",
  },
  telephone: "+919962869428",
  email: "monish@vcmv.in",
  openingHours: "Mo-Fr 09:30-18:30",
  priceRange: "$$",
  areaServed: "India",
  sameAs: [],
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
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="default"
          themes={["default", "green", "slate"]}
          disableTransitionOnChange
        >
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
