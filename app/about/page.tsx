import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About VCMV & Associates LLP | Chartered Accountants",
  description:
    "VCMV & Associates LLP is a modern CA firm founded by Big4 alumni and experienced professionals specializing in tax, assurance, litigation and business advisory in Chennai.",
  keywords: [
    "About VCMV",
    "Chartered Accountants Chennai",
    "CA Firm Chennai",
    "Big4 Alumni",
    "Tax Advisory Firm",
  ],
};

export default function AboutPage() {
  return (
    <main>
      <VCMVNavbar />
      <AboutPageClient />
      <Footer />
    </main>
  );
}
