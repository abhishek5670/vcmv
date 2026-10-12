import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssuranceClient from "./AssuranceClient";

export const metadata: Metadata = {
  title: "Audit & Assurance Services | V C M V & Associates LLP",
  description:
    "Statutory audit, inventory audit, tax audit, internal audit, forensic audit and IFRS reporting services. Independent assurance that builds confidence in your financial reporting. V C M V, Chennai.",
  keywords: [
    "Audit Services Chennai",
    "Statutory Audit",
    "Inventory Audit",
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
