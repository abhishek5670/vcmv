import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndiaEntryClient from "./IndiaEntryClient";

export const metadata: Metadata = {
  title: "India Entry Strategy & Business Setup Advisory | VCMV",
  description:
    "Guidance on entry structures, tax and regulatory considerations for foreign businesses establishing an Indian presence. WOS, JV, LLP, liaison office, branch and project office advisory.",
  keywords: [
    "India Entry Advisory",
    "Foreign Company India Setup",
    "WOS India",
    "Liaison Office India",
    "Joint Venture India",
    "Branch Office India",
  ],
};

export default function IndiaEntryPage() {
  return (
    <main>
      <VCMVNavbar />
      <IndiaEntryClient />
      <Footer />
    </main>
  );
}
