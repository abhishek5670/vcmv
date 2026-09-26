"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function DirectTaxClient() {
  return (
    <ServicePageLayout
      heroHeading="Direct Tax Solutions That Support Better Business Decisions"
      heroDescription="Navigate India's direct tax environment with practical, well-reasoned advice covering corporate tax, transactions, compliance and withholding requirements."
      ctaText="Discuss Your Tax Requirement →"
      sections={[
        {
          title: "Corporate Tax",
          items: [
            "Corporate tax planning and management",
            "Transaction-stage tax advisory",
            "Advance tax evaluation and planning",
            "Corporate income tax return filing",
            "MAT and dividend distribution tax considerations",
            "Tax-efficient business structuring",
          ],
        },
        {
          title: "Transaction Tax",
          items: [
            "Mergers, acquisitions and demergers",
            "Business reorganizations and restructuring",
            "Tax due diligence for transactions",
            "Tax treaty considerations and positions",
            "Anti-avoidance provisions and GAAR",
            "Stamp duty and indirect tax on transactions",
          ],
        },
        {
          title: "Withholding Tax",
          items: [
            "TDS planning and deduction advisory",
            "TDS computation and reconciliation",
            "Quarterly e-TDS return preparation",
            "Withholding compliance reviews",
            "Vendor and contractor payment reviews",
            "Lower or nil deduction certificates",
          ],
        },
        {
          title: "Returns & Certification",
          items: [
            "Income-tax return preparation and filing",
            "Advance tax computation and support",
            "Lower deduction certificate applications",
            "15CA / 15CB certification",
            "Tax reporting and disclosure support",
            "Liaison with income-tax authorities",
          ],
        },
      ]}
    />
  );
}
