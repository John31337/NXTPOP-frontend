import React from "react";
import SectionLayout from "components/layouts/section";

interface FooterSectionProps {
  id?: string;
}
const FooterSection: React.FC<FooterSectionProps> = ({ id }) => {
  return (
    <SectionLayout
      id={"id"}
      title={"Footer"}
      subTitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </>
      }
    ></SectionLayout>
  );
};

export default FooterSection;
