import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsPageClient from "./InsightsPageClient";

export const metadata: Metadata = {
  title: "Tax & Regulatory Insights | VCMV",
  description:
    "Tax updates, GST insights, international tax and regulatory articles from VCMV & Associates LLP. Stay informed on developments affecting your business.",
  keywords: [
    "Tax Insights India",
    "GST Updates",
    "International Tax News",
    "Transfer Pricing Updates",
    "Budget Analysis India",
    "Tax Case Law",
  ],
};

export default function InsightsPage() {
  return (
    <main>
      <VCMVNavbar />
      <InsightsPageClient />
      <Footer />
    </main>
  );
}
