import VCMVNavbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesPreview from "@/components/ServicesPreview";
import WhyVCMV from "@/components/WhyVCMV";
import TeamSection from "@/components/TeamSection";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      {/* Sticky fixed navbar */}
      <VCMVNavbar />

      {/* Split-layout hero with image collage */}
      <HeroSlider />

      {/* About / Who We Are — split editorial */}
      <AboutSection />

      {/* Services — dark grid with hover accents */}
      <ServicesPreview />

      {/* Why VCMV — 4 pillars */}
      <WhyVCMV />

      {/* Team — leadership profiles */}
      <TeamSection />

      {/* Closing CTA — dark premium */}
      <ClosingCTA />

      {/* Footer — split nav/contact + oversized wordmark */}
      <Footer />
    </main>
  );
}

