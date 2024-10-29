import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "Maratona Black - Seu solo perfeito!",
  description: "Maratona Black - Seu solo perfeito!"
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CommunitySection />
      <TeamSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
