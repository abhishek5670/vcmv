"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function GSTClient() {
  return (
    <ServicePageLayout
      imageSrc="/services/GSTClient.avif"
      heroHeading="GST & Indirect Tax Solutions for a Changing Business Environment"
      heroDescription="GST influences pricing, cash flow, contracts, supply chains, reporting and technology. Our team helps businesses manage these interconnected challenges with clear, practical advice."
      ctaText="Get GST Advisory →"
      sections={[
        {
          title: "GST Advisory",
          items: [
            "GST impact assessment for business changes",
            "Supply-chain tax assessment",
            "GST implementation support",
            "Accounting and reporting under GST",
            "Compliance framework design",
            "SOP development for GST processes",
            "Post-transition reviews",
            "GST training for finance teams",
          ],
        },
        {
          title: "Strategic Advisory",
          items: [
            "Supply-chain structuring for GST efficiency",
            "Indirect tax optimization",
            "Foreign Trade Policy advisory",
            "Input tax credit optimization",
            "Place of supply and valuation advisory",
          ],
        },
        {
          title: "Registration & Compliance",
          items: [
            "GST registration and amendments",
            "Import Export Code (IEC) assistance",
            "Licenses and approvals",
            "Refund application and assistance",
            "GST return preparation and filing",
            "Reconciliations and ITC matching",
          ],
        },
        {
          title: "SVB & Appeals",
          items: [
            "Special Valuation Branch (SVB) registration",
            "Importer-supplier agreement review",
            "CA certifications for customs",
            "SVB questionnaire preparation",
            "SVB renewal and renewal support",
            "Appeals before GST and Customs authorities",
          ],
        },
      ]}
    />
  );
}
