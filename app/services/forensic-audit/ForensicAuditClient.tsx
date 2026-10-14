"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

export default function ForensicAuditClient() {
  return (
    <ServicePageLayout
      imageSrc="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2000&auto=format&fit=crop"
      heroHeading="Forensic Audit & Investigation Services"
      heroDescription="Uncovering financial anomalies, investigating fraud, tracing diverted funds, and delivering defensible evidentiary insights for corporate boards, lenders, investors, and legal proceedings."
      ctaText="Consult Our Forensic Team →"
      sections={[
        {
          title: "Corporate Fraud & Financial Irregularity Investigations",
          items: [
            "Investigation of revenue inflation, premature revenue recognition, and fictitious sales",
            "Detection of phantom vendors, unauthorized disbursements, and circular trading schemes",
            "Investigation of employee embezzlement, kickbacks, procurement fraud, and conflict of interest",
            "Review of unusual journal entries, off-balance sheet transactions, and reserve manipulations",
            "Executive-level and board-mandated confidential investigations",
            "Root-cause analysis and identification of systemic internal control failures",
          ],
        },
        {
          title: "Fund Flow Analysis & Asset Tracing",
          items: [
            "End-to-end tracing of borrowed funds, equity investments, and government subsidies",
            "Uncovering fund diversion to promoter-related entities, shell companies, and overseas tax havens",
            "Complex transaction reconstruction across multiple bank accounts, ledgers, and entities",
            "Identification of beneficial ownership, benami transactions, and concealed assets",
            "Assistance with asset preservation and legal recovery proceedings",
            "Anti-Money Laundering (PMLA) compliance reviews and suspicious transaction reporting",
          ],
        },
        {
          title: "Bank Mandated & NPA Forensic Audits",
          items: [
            "Forensic audits mandated by banks and financial institutions for Non-Performing Assets (NPAs)",
            "Audits under RBI guidelines on Red Flagged Accounts (RFA) and early warning signals (EWS)",
            "Assessment of willful default criteria and siphoning / diversion of working capital funds",
            "Consortium lending stock and book debt verification audits for distressed borrower accounts",
            "End-use verification of term loans, letter of credit (LC) facilities, and project advances",
            "Preparation of comprehensive forensic audit reports for Joint Lenders' Meetings (JLM) and CBI/ED referrals",
          ],
        },
        {
          title: "Insolvency & Bankruptcy (IBC) Transaction Audits",
          items: [
            "Transaction audits under the Insolvency and Bankruptcy Code (IBC, 2016) for Resolution Professionals (RP)",
            "Identification and quantification of Preferential Transactions under Section 43",
            "Investigation of Undervalued Transactions under Section 45",
            "Detection of Extortionate Credit Transactions under Section 50",
            "Investigation and forensic evidence compilation for Fraudulent Trading under Section 66",
            "Drafting expert reports and affidavits for filing before the National Company Law Tribunal (NCLT)",
          ],
        },
        {
          title: "Dispute Advisory, Digital Forensics & Expert Witness",
          items: [
            "Quantification of commercial damages, lost profits, and breach-of-contract financial impacts",
            "Shareholder, partner, and post-merger earnout dispute financial analysis",
            "Forensic data extraction, email analysis, database querying, and digital audit trail reviews",
            "Expert witness reports and testimony before arbitral tribunals, High Courts, and regulatory authorities",
            "Independent assessment of opposing party financial claims and vulnerability analysis",
            "Fraud risk management, anti-fraud policy design, and whistleblower mechanism implementation",
          ],
        },
      ]}
    />
  );
}
