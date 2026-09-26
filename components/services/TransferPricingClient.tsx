"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function TransferPricingClient() {
  return (
    <ServicePageLayout
      heroHeading="Transfer Pricing Built Around Your Business"
      heroDescription="From compliance and benchmarking to complex cross-border transactions and dispute resolution, we provide end-to-end transfer pricing support tailored to your group structure."
      ctaText="Discuss Your Transfer Pricing Requirement →"
      sections={[
        {
          title: "Compliance",
          items: [
            "Form 3CEB preparation and certification",
            "Transfer pricing documentation",
            "International transactions analysis",
            "Specified domestic transactions",
            "Master File preparation",
            "Country-by-Country Reporting (CbCR)",
          ],
        },
        {
          title: "Advisory",
          items: [
            "Transfer pricing studies and policy design",
            "Intra-group services benchmarking",
            "Loans and guarantees pricing",
            "Intangibles and royalty analysis",
            "R&D centre characterisation",
            "Business restructuring advisory",
            "Global transfer pricing policies",
          ],
        },
        {
          title: "Controversy Management",
          items: [
            "Advance Pricing Agreements (APA)",
            "TPO audit representation",
            "Commissioner (Appeals) representation",
            "Dispute Resolution Panel (DRP)",
            "ITAT representation",
            "Mutual Agreement Procedure (MAP)",
            "Safe Harbour rule advisory",
          ],
        },
        {
          title: "Benchmarking",
          items: [
            "Functional and risk profiling",
            "Comparable uncontrolled price analysis",
            "Transactional net margin method studies",
            "Indian and international database analysis",
            "Inter-quartile range computation",
            "Benchmarking report preparation",
          ],
        },
      ]}
    />
  );
}
