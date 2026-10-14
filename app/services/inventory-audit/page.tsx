import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InventoryAuditClient from "./InventoryAuditClient";

export const metadata: Metadata = {
  title:
    "Stock Audit & Inventory Verification Services | V C M V & Associates LLP",
  description:
    "Independent stock audit, physical inventory verification, bank consortium audits, warehouse verification, reconciliation, and shrinkage analysis. V C M V & Associates LLP, Chennai.",
  keywords: [
    "Stock Audit Chennai",
    "Inventory Verification Services",
    "Bank Stock Audit CA",
    "Consortium Lender Stock Audit",
    "Warehouse Physical Verification",
    "Book vs Physical Reconciliation",
    "Inventory Valuation",
    "Shrinkage Analysis",
    "V C M V",
  ],
};

export default function InventoryAuditPage() {
  return (
    <main>
      <VCMVNavbar />
      <InventoryAuditClient />
      <Footer />
    </main>
  );
}
