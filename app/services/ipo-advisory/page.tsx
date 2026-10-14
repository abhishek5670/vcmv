import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IPOAdvisoryClient from "./IPOAdvisoryClient";

export const metadata: Metadata = {
  title: "IPO Advisory & Capital Market Services | V C M V & Associates LLP",
  description:
    "End-to-end IPO readiness, SME and Mainboard listing advisory, financial statement restatement per SEBI ICDR, DRHP assistance, and capital market structuring. V C M V & Associates LLP, Chennai.",
  keywords: [
    "IPO Advisory Chennai",
    "SME IPO Consultant",
    "SEBI ICDR Restated Accounts",
    "DRHP Preparation",
    "BSE SME NSE Emerge Advisory",
    "Capital Market Services CA",
    "Pre-IPO Due Diligence",
    "V C M V",
  ],
};

export default function IPOAdvisoryPage() {
  return (
    <main>
      <VCMVNavbar />
      <IPOAdvisoryClient />
      <Footer />
    </main>
  );
}
