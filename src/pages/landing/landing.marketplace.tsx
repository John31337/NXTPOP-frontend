import React from "react";
import SectionLayout from "components/layouts/section";
import { Image } from "components/base/initial";

interface MarketplaceSectionProps {
  id?: string;
}
const MarketplaceSection: React.FC<MarketplaceSectionProps> = ({ id }) => {
  return (
    <SectionLayout
      id={id}
      title={"Marketplace"}
      subTitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </>
      }
    >
      <Image src={require("assets/image/landing/marketplace.png")} />
    </SectionLayout>
  );
};

export default MarketplaceSection;
