import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GSTClient from "./GSTClient";

export const metadata: Metadata = {
  title: "GST & Indirect Tax Advisory Services | VCMV",
  description:
    "GST advisory, compliance, refund assistance, SVB registration and indirect tax litigation services in India. VCMV & Associates LLP, Chennai.",
  keywords: [
    "GST Advisory Chennai",
    "GST Compliance",
    "Indirect Tax India",
    "GST Refund",
    "SVB Registration",
    "Foreign Trade Policy Advisory",
  ],
};

export default function GSTPage() {
  return (
    <main>
      <VCMVNavbar />
      <GSTClient />
      <Footer />
    </main>
  );
}
