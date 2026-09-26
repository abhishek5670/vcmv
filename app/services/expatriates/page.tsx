import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpatriatesClient from "./ExpatriatesClient";

export const metadata: Metadata = {
  title: "Expatriate Tax Services India | VCMV & Associates LLP",
  description:
    "Tax and regulatory support for expatriates and businesses managing international employee assignments in India. PAN, FRRO, visa, withholding and tax equalization services.",
  keywords: [
    "Expatriate Tax India",
    "Expat Tax Services",
    "FRRO Registration",
    "Tax Equalization India",
    "International Secondment India",
  ],
};

export default function ExpatriatesPage() {
  return (
    <main>
      <VCMVNavbar />
      <ExpatriatesClient />
      <Footer />
    </main>
  );
}
