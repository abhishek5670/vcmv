import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MAClient from "./MAClient";


export const metadata: Metadata = {
  title: "Mergers & Acquisitions Advisory | V C M V",
  description:
    "Target identification, deal advisory, valuation, due diligence and transaction support for mergers, acquisitions and business combinations. V C M V & Associates LLP, Chennai.",
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
