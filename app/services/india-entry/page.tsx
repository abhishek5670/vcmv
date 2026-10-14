import type { Metadata } from "next";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndiaEntryClient from "./IndiaEntryClient";

export const metadata: Metadata = {
  title:
    "Foreign Company Incorporation & India Entry Advisory | V C M V & Associates LLP",
  description:
    "End-to-end foreign company incorporation, FDI regulations, RBI & FEMA compliance, wholly owned subsidiary (WOS) setup, branch office and joint venture advisory in India. V C M V & Associates LLP, Chennai.",
  keywords: [
    "Foreign Company Incorporation India",
    "India Entry Advisory",
    "FDI Approval RBI",
    "FEMA Compliance CA",
    "Wholly Owned Subsidiary Setup",
    "Liaison Office Branch Office India",
    "Overseas Company Registration Chennai",
    "V C M V",
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
