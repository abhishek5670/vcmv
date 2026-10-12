export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  focus: string;
  image: string;
  phone: string;
  email: string;
  education: string[];
  icaiStatus: string;
  experience: string;
  previousExperience: string;
  areasOfExpertise: string[];
  industryExperience: string[];
  summary: string;
  shapeClass?: string;
}

export interface TeamPageContent {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  members: TeamMember[];
}

export const teamPageContent: TeamPageContent = {
  hero: {
    eyebrow: "OUR PEOPLE",
    heading: "Experienced Professionals.\nSpecialized Expertise.",
    description:
      "Our partners bring experience across Big4, established CA practices and corporate environments, with focused expertise across tax, assurance, litigation and advisory.",
  },
  members: [

    {
      id: "monish-gupta-d",
      name: "Monish Gupta D",
      designation: "Partner",
      focus: "GST & Assurance",
      image: "/team/monish.jpeg",
      phone: "+91 99628 69428",
      email: "monish@vcmv.in",
      education: [
        "B.Com, University of Madras",
        "Fellow Member, Institute of Chartered Accountants of India (ICAI)",
      ],
      icaiStatus: "Fellow Member (FCA)",
      experience:
        "12+ years of experience in indirect tax advisory, GST litigation, assurance and audit services. Has advised entrepreneurs and worked on advisory matters with Central and State Government bodies.",
      previousExperience:
        "Partner at a reputed Chennai CA firm, heading Indirect Tax and Assurance practice",
      areasOfExpertise: [
        "GST Advisory & Compliance",
        "Indirect Tax Litigation",
        "Statutory Audit",
        "Assurance Services",
        "Supply Chain Tax Optimization",
        "Government Advisory",
      ],
      industryExperience: [],
      summary:
        "Monish has over 12 years of experience in GST, indirect tax and assurance. He has led the indirect tax and assurance practice at a reputed Chennai firm and continues to advise a diverse range of businesses including entrepreneurial ventures and government-linked entities.",
    },
    {
      id: "vinay-kumar-jain",
      name: "Vinay Kumar Jain",
      designation: "Partner",
      focus: "Income Tax & Investment Advisory",
      image: "/team/vinay.jpeg",
      phone: "+91 98842 72661",
      email: "vinay@vcmv.in",
      education: [
        "B.Com, University of Madras",
        "Fellow Member, Institute of Chartered Accountants of India (ICAI)",
        "Forensic Accounting and Fraud Detection (FAFD, ICAI)",
        "Certificate Course on Concurrent Audit of Banks (CCAB, ICAI)",
      ],
      icaiStatus: "Fellow Member (FCA)",
      experience:
        "12+ years of experience in income tax advisory, tax litigation, audit services and investment advisory. Works extensively with companies, entrepreneurs and government-linked projects.",
      previousExperience:
        "Partner heading Income Tax and Audit services at a reputed Chennai CA firm",
      areasOfExpertise: [
        "Income Tax Advisory",
        "Tax Litigation",
        "Statutory Audit",
        "Investment Advisory",
        "Finance & Fundraising",
        "Corporate Tax",
      ],
      industryExperience: [],
      summary:
        "Vinay brings 12+ years of experience in income tax, audit and investment advisory. He has led the income tax and audit practice at a reputed Chennai firm and works with a broad base of clients including corporates, entrepreneurs and government-related projects.",
    },
    {
      id: "rakesh-kumar",
      name: "Rakesh Kumar",
      designation: "Partner",
      focus: "Audit & Forensic Advisory",
      image: "/team/rakesh.jpg",
      phone: "+91 98414 55618",
      email: "rakesh@vcmv.in",
      education: [
        "B.Com, University of Madras",
        "Associate Member, Institute of Chartered Accountants of India (ICAI)",
      ],
      icaiStatus: "Associate Member (ACA)",
      experience:
        "Experience across statutory audit, forensic audit, internal audit, IFC documentation and testing, Ind AS financial statements preparation and business valuation.",
      previousExperience:
        "Deputy Manager at Royal Enfield in Forensics & Internal Audit; previously associated with R.G.N Price & Co.",
      areasOfExpertise: [
        "Statutory Audit",
        "Forensic Audit",
        "Internal Audit",
        "IFC Documentation & Testing",
        "Ind AS Financial Statements",
        "Business Valuation",
        "Internal Controls Review",
      ],
      industryExperience: [
        "Manufacturing",
        "Stock Broking",
        "Trading",
        "Information Technology",
      ],
      summary:
        "Rakesh brings focused expertise in audit and forensic advisory. His corporate experience at Royal Enfield in forensics and internal audit, combined with his earlier work at R.G.N Price & Co., gives him a unique perspective on risk, controls and financial reporting.",
    },
  ],
};
