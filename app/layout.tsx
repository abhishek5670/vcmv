import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VCMV & Associates LLP — CA, Tax, Assurance & Business Advisory",
  description:
    "VCMV & Associates LLP is a multidisciplinary firm of Chartered Accountants specialising in Direct Tax, International Tax, Transfer Pricing, GST, Assurance and Business Advisory.",
  keywords: [
    "Chartered Accountants",
    "Tax Advisory",
    "International Tax",
    "Transfer Pricing",
    "GST",
    "Assurance",
    "Business Advisory",
    "VCMV",
  ],
  openGraph: {
    title: "VCMV & Associates LLP",
    description:
      "Professional expertise. Practical thinking. Lasting value. CA, Tax, Assurance & Business Advisory.",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
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

