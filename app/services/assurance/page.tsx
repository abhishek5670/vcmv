import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssuranceClient from "./AssuranceClient";

export const metadata: Metadata = {
  title: "Audit & Assurance Services | VCMV & Associates LLP",
  description:
    "Statutory audit, tax audit, internal audit, forensic audit and IFRS reporting services. Independent assurance that builds confidence in your financial reporting. VCMV, Chennai.",
  keywords: [
    "Audit Services Chennai",
    "Statutory Audit",
    "Internal Audit",
    "Forensic Audit",
    "IFRS Reporting",
    "IFC Testing",
  ],
};

export default function AssurancePage() {
  return (
    <main>
      <VCMVNavbar />
      <AssuranceClient />
      <Footer />
    </main>
  );
}
