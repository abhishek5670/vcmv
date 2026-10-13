import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InventoryAuditClient from "./InventoryAuditClient";

export const metadata: Metadata = {
  title: "Inventory Audit Services | V C M V & Associates LLP",
  description:
    "Independent inventory audit, stock verification, physical count, valuation and shrinkage analysis across warehouses, retail outlets and manufacturing units. V C M V & Associates LLP, Chennai.",
  keywords: [
    "Inventory Audit Chennai",
    "Stock Audit CA",
    "Physical Verification",
    "Warehouse Audit",
    "Inventory Valuation",
    "Stock Count",
    "Shrinkage Analysis",
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
