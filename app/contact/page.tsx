import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact V C M V & Associates LLP | Chennai",
  description:
    "Get in touch with V C M V & Associates LLP for tax advisory, assurance, litigation or business advisory requirements. Office in Nungambakkam, Chennai.",
  keywords: [
    "Contact V C M V Associates",
    "CA Firm Chennai Contact",
    "Tax Advisory Contact",
    "V C M V Chennai Office",
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
