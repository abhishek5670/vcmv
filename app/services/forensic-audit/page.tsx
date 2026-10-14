import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ForensicAuditClient from "./ForensicAuditClient";

export const metadata: Metadata = {
  title: "Forensic Audit & Investigation Services | V C M V & Associates LLP",
  description:
    "Expert forensic audit, fraud investigation, fund flow tracing, IBC Section 43/45/50/66 audits, NPA investigation, and dispute advisory. V C M V & Associates LLP, Chennai.",
  keywords: [
    "Forensic Audit Chennai",
    "Fraud Investigation CA",
    "Fund Flow Tracing",
    "Bank Forensic Audit",
    "IBC Transaction Audit Section 66",
    "NPA Investigation",
    "Expert Witness Financial Dispute",
    "V C M V",
  ],
};

export default function ForensicAuditPage() {
  return (
    <main>
      <VCMVNavbar />
      <ForensicAuditClient />
      <Footer />
    </main>
  );
}
