import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VCMVNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMemberClient from "./TeamMemberClient";
import { teamPageContent } from "@/content/team-content";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return teamPageContent.members.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = teamPageContent.members.find((m) => m.id === id);
  if (!member) return { title: "Team Member | V C M V" };

  return {
    title: `${member.name} | ${member.focus} | V C M V`,
    description: member.summary,
    keywords: [
      member.name,
      member.focus,
      "Chartered Accountant Chennai",
      "V C M V Associates LLP",
      ...member.areasOfExpertise,
    ],
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { id } = await params;
  const member = teamPageContent.members.find((m) => m.id === id);
  if (!member) notFound();

  return (
    <main>
      <VCMVNavbar />
      <TeamMemberClient member={member} />
      <Footer />
    </main>
  );
}
