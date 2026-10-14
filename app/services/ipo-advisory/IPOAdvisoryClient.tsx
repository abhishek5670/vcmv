"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function IPOAdvisoryClient() {
  return (
    <ServicePageLayout
      imageSrc="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop"
      heroHeading="IPO Advisory & Capital Market Services"
      heroDescription="Navigating the transition from private ownership to the public capital markets with structured readiness planning, regulatory compliance, financial restatement, and transaction guidance."
      ctaText="Discuss Your IPO Journey →"
      sections={[
        {
          title: "IPO Readiness & Pre-Listing Assessment",
          items: [
            "Diagnostic review of financial records, accounting policies, and capital structure",
            "Assessment of internal financial controls (IFC) and corporate governance standards",
            "Gap analysis against SEBI (ICDR) Regulations and Stock Exchange listing criteria",
            "Promoter shareholding clean-up, capitalization, and dilution roadmaps",
            "SME Exchange (BSE SME / NSE Emerge) vs. Mainboard suitability evaluation",
            "Resolution of historical non-compliances, contingent liabilities, and related party transactions",
          ],
        },
        {
          title: "Restatement of Financial Statements",
          items: [
            "Conversion and alignment of past financial statements to Ind AS",
            "Preparation of restated consolidated and standalone financial statements per SEBI ICDR guidelines",
            "Pro-forma financial information preparation for acquisitions, demergers, or structural changes",
            "Reconciliation between previous GAAP and Ind AS with notes on material adjustments",
            "Audit documentation and coordination with statutory and peer review auditors",
            "Key Performance Indicators (KPI) and Non-GAAP metric certifications",
          ],
        },
        {
          title: "Offer Document & DRHP Assistance",
          items: [
            "Financial section drafting and review for Draft Red Herring Prospectus (DRHP) / RHP",
            "Review of Capital Structure, Objects of the Offer, and Management Discussion & Analysis (MD&A)",
            "Financial disclosures, basis for issue price calculations, and peer comparison data",
            "Preparation of Capital History and Promoter Contribution certifications",
            "Addressing technical financial queries from Merchant Bankers (BRLMs), Legal Counsel, and SEBI",
            "Assistance with Registrar of Companies (ROC) and Stock Exchange in-principle approval filings",
          ],
        },
        {
          title: "Pre-IPO Structuring & Corporate Reorganization",
          items: [
            "Group restructuring, demergers, and business transfers for optimal public-listing vehicle",
            "Pre-IPO capital raising: preferential allotment, private placement, rights issue, and convertible instruments",
            "Bonus issue planning, capital consolidation, and ESOP scheme restructuring",
            "Valuation and fairness opinion support for pre-IPO funding rounds",
            "Tax-efficient restructuring of promoter and investor holdings",
            "Stamp duty optimization and regulatory approvals across NCLT / ROC / RBI",
          ],
        },
        {
          title: "Post-Listing Compliance & Investor Governance",
          items: [
            "Compliance with SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (LODR)",
            "Quarterly and annual financial results preparation and limited review coordination",
            "Assistance with Audit Committee, Nomination & Remuneration Committee governance frameworks",
            "Prohibition of Insider Trading (PIT) compliance policies and structured digital database (SDD) controls",
            "Related party transaction (RPT) threshold tracking, policy design, and omnibus approval processes",
            "Ongoing secretarial, ROC, and stock exchange disclosure advisory",
          ],
        },
      ]}
    />
  );
}
