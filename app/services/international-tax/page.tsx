import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntlTaxClient from "./IntlTaxClient";

export const metadata: Metadata = {
  title: "International Tax Advisory Services in India | VCMV",
  description:
    "Cross-border tax structuring, treaty advisory and international tax planning for businesses investing in India or expanding globally. VCMV & Associates LLP, Chennai.",
  keywords: [
    "International Tax Advisory India",
    "Cross-border Tax",
    "Tax Treaty India",
    "Inbound Tax Advisory",
    "Outbound Tax Planning",
    "BEPS India",
  ],
};

export default function IntlTaxPage() {
  return (
    <main>
      <VCMVNavbar />
      <IntlTaxClient />
      <Footer />
    </main>
  );
}
