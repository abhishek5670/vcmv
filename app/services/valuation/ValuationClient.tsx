"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function ValuationClient() {
  return (
    <ServicePageLayout
      imageSrc="/services/ValuationClient.avif"
      heroHeading="Valuation That Supports Critical Decisions"
      heroDescription="Independent and purpose-driven valuation support for transactions, regulatory compliance, financial reporting, restructuring and strategic decision-making."
      ctaText="Discuss Your Valuation Requirement →"
      sections={[
        {
          title: "Regulatory Valuation",
          items: [
            "ODI requirements under FEMA",
            "Share swap certificates",
            "FEMA-related valuation for investments",
            "Income Tax Rule 11UA valuation",
            "Companies Act requirements",
            "Financial reporting valuation",
            "Impairment testing",
            "Purchase price allocation (PPA)",
          ],
        },
        {
          title: "Transaction Valuation",
          items: [
            "Business and enterprise valuation",
            "Equity valuation for sale or acquisition",
            "Swap ratio determination",
            "Fixed asset valuation",
            "ESOP valuation (Black-Scholes / other models)",
            "Fairness opinions",
            "Unlisted equity valuation",
            "M&A transaction valuation",
            "Joint venture valuation",
            "Private placement valuation",
            "Startup and early-stage valuation",
          ],
        },
      ]}
    />
  );
}
