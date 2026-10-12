import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About V C M V & Associates LLP | Chartered Accountants",
  description:
    "V C M V & Associates LLP is a modern CA firm founded by Big4 alumni and experienced professionals specializing in tax, assurance, litigation and business advisory in Chennai.",
  keywords: [
    "About V C M V",
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
