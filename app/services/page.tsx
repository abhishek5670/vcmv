import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services | Tax, Assurance & Advisory | VCMV & Associates LLP",
  description:
    "Specialized CA services across direct tax, international tax, transfer pricing, GST, assurance, litigation, valuation, M&A and India entry advisory. VCMV & Associates LLP, Chennai.",
  keywords: [
    "CA Services Chennai",
    "Tax Advisory",
    "GST Services",
    "Assurance Services",
    "Business Advisory",
    "VCMV",
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <VCMVNavbar />
      <ServicesPageClient />
      <Footer />
    </main>
  );
}
