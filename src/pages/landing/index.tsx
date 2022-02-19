import React from "react";
import LandingLayout from "components/layouts/landing";

import BannerSection from "./landing.banner";
import LaunchpadSection from "./landing.launchpad";
import MarketplaceSection from "./landing.marketplace";
import LotterySection from "./landing.lottery";
import LockingsystemSection from "./landing.lockingsystem";
import FarmingsystemSection from "./landing.farmingsystem";
import RedeemSection from "./landing.redeem";
import ManifestoSection from "./landing.manifesto";
import RoadmapSection from "./landing.roadmap";
import BlogSection from "./landing.blog";
import PartnerSection from "./landing.partner";
import FooterSection from "./landing.footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <LandingLayout>
        <BannerSection id="Banner" />
        <LaunchpadSection id="Launchpad" />
        <MarketplaceSection id="Marketplace" />
        <LotterySection id="Lottery" />
        <LockingsystemSection id="Lockingsystem" />
        <FarmingsystemSection id="Farmingsystem" />
        <RedeemSection id="Redeem" />
        <ManifestoSection id="Manifesto" />
        <RoadmapSection id="Roadmap" />
        <BlogSection id="Blog" />
        <PartnerSection id="Partner" />
        <FooterSection id="Footer" />
      </LandingLayout>
    </>
  );
};

export default LandingPage;
