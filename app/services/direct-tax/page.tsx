import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DirectTaxClient from "./DirectTaxClient";

export const metadata: Metadata = {
  title: "Direct Tax Advisory & Corporate Tax Services | VCMV",
  description:
    "Corporate tax planning, transaction tax advisory, withholding tax compliance and return filing for businesses in India. Direct Tax services by VCMV & Associates LLP, Chennai.",
  keywords: [
    "Direct Tax Advisory Chennai",
    "Corporate Tax",
    "Withholding Tax",
    "Tax Returns India",
    "TDS Compliance",
    "MAT",
  ],
};

export default function DirectTaxPage() {
  return (
    <main>
      <VCMVNavbar />
      <DirectTaxClient />
      <Footer />
    </main>
  );
}
