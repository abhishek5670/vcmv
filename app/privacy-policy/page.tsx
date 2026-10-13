import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPageClient from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy | V C M V & Associates LLP",
  description:
    "Privacy Policy for V C M V & Associates LLP — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <VCMVNavbar />
      <PrivacyPageClient />
      <Footer />
    </main>
  );
}
