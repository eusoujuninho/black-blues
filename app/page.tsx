import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { TeamSection } from "@/components/layout/sections/team";
import { useEffect } from "react";

import ReactPixel from 'react-facebook-pixel';

export const metadata = {
  title: "Black November do Blues - Pague 1, leve todos!!",
  description: "Black November do Blues - Pague 1, leve todos!!"
};

export default function Home() {
  useEffect(() => {
    const facebookPixelCode = process.env.FACEBOOK_PIXEL_CODE;

    if (facebookPixelCode) {
      ReactPixel.init(facebookPixelCode);
      ReactPixel.pageView();
    }
  }, []);

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
