import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ValuationClient from "./ValuationClient";

export const metadata: Metadata = {
  title: "Business & Equity Valuation Services | VCMV",
  description:
    "Independent business valuation for transactions, regulatory compliance, financial reporting and strategic decisions. FEMA, Companies Act and income tax valuation services.",
  keywords: [
    "Business Valuation Services India",
    "Equity Valuation",
    "FEMA Valuation",
    "ESOP Valuation",
    "M&A Valuation",
    "Startup Valuation India",
  ],
};

export default function ValuationPage() {
  return (
    <main>
      <VCMVNavbar />
      <ValuationClient />
      <Footer />
    </main>
  );
}
