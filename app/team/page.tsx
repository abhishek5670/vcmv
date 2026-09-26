import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  title: "Chartered Accountants & Tax Advisors | VCMV Team",
  description:
    "Meet the partners of VCMV & Associates LLP — experienced Chartered Accountants specializing in international tax, transfer pricing, GST, assurance, litigation and advisory in Chennai.",
  keywords: [
    "CA Firm Chennai Partners",
    "Chartered Accountants Chennai",
    "International Tax Expert India",
    "Transfer Pricing Expert India",
    "GST Consultant Chennai",
  ],
};

export default function TeamPage() {
  return (
    <main>
      <VCMVNavbar />
      <TeamPageClient />
      <Footer />
    </main>
  );
}
