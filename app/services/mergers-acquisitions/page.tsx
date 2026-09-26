import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MAClient from "./MAClient";


export const metadata: Metadata = {
  title: "Mergers & Acquisitions Advisory | VCMV",
  description:
    "Target identification, deal advisory, valuation, due diligence and transaction support for mergers, acquisitions and business combinations. VCMV & Associates LLP, Chennai.",
  keywords: [
    "M&A Advisory India",
    "Mergers Acquisitions Chennai",
    "Due Diligence India",
    "Deal Advisory",
    "Transaction Advisory",
    "Business Acquisition India",
  ],
};

export default function MAPage() {
  return (
    <main>
      <VCMVNavbar />
      <MAClient />
      <Footer />
    </main>
  );
}
