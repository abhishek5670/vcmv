import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LitigationClient from "./LitigationClient";

export const metadata: Metadata = {
  title: "Tax Litigation & Dispute Resolution Services | VCMV",
  description:
    "Tax litigation, appeals and dispute resolution across income tax, GST, customs, central excise and service tax forums. VCMV & Associates LLP, Chennai.",
  keywords: [
    "Tax Litigation India",
    "Income Tax Appeals",
    "GST Litigation",
    "ITAT Representation",
    "Tax Dispute Resolution",
    "DRP India",
  ],
};

export default function LitigationPage() {
  return (
    <main>
      <VCMVNavbar />
      <LitigationClient />
      <Footer />
    </main>
  );
}
