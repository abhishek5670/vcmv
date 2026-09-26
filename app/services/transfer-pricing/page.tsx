import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransferPricingClient from "./TransferPricingClient";

export const metadata: Metadata = {
  title: "Transfer Pricing Advisory & Compliance Services | VCMV",
  description:
    "End-to-end transfer pricing compliance, benchmarking, documentation and controversy management. Form 3CEB, APA, MAP and TPO representation by VCMV & Associates LLP.",
  keywords: [
    "Transfer Pricing Services India",
    "Form 3CEB",
    "APA India",
    "Transfer Pricing Documentation",
    "Country-by-Country Reporting",
    "TPO Representation",
  ],
};

export default function TransferPricingPage() {
  return (
    <main>
      <VCMVNavbar />
      <TransferPricingClient />
      <Footer />
    </main>
  );
}
