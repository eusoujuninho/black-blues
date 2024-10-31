import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection02 } from "@/components/layout/sections/hero-02";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "Black November do Blues - Pague 1, leve todos!!",
  description: "Black November do Blues - Pague 1, leve todos!!"
};

export default function Home() {
  return (
    <>
      <HeroSection02 />
      <CommunitySection />
      <TeamSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
