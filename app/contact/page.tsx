import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact VCMV & Associates LLP | Chennai",
  description:
    "Get in touch with VCMV & Associates LLP for tax advisory, assurance, litigation or business advisory requirements. Office in Nungambakkam, Chennai.",
  keywords: [
    "Contact VCMV Associates",
    "CA Firm Chennai Contact",
    "Tax Advisory Contact",
    "VCMV Chennai Office",
    "Nungambakkam CA",
  ],
};

export default function ContactPage() {
  return (
    <main>
      <VCMVNavbar />
      <ContactPageClient />
      <Footer />
    </main>
  );
}
