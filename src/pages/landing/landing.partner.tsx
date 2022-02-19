import React from "react";
import SectionLayout from "components/layouts/section";
import { Box, Image } from "components/base/initial";

interface PartnerSectionProps {
  id?: string;
}
const PartnerSection: React.FC<PartnerSectionProps> = ({ id }) => {
  return (
    <SectionLayout
      id={id}
      position={"relative"}
      title={"Partner"}
      subTitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </>
      }
    >
      <Box display={"flex"} justifyContent={"center"} gridGap={"32px"} flexWrap={"wrap"}>
        <Box background={"#292A2C"} width={"284px"} height={"116px"}></Box>
        <Box background={"#292A2C"} width={"284px"} height={"116px"}></Box>
        <Box background={"#292A2C"} width={"284px"} height={"116px"}></Box>
        <Box background={"#292A2C"} width={"284px"} height={"116px"}></Box>
        <Box background={"#292A2C"} width={"284px"} height={"116px"}></Box>
        <Box background={"#292A2C"} width={"284px"} height={"116px"}></Box>
        <Box background={"#292A2C"} width={"284px"} height={"116px"}></Box>
        <Box background={"#292A2C"} width={"284px"} height={"116px"}></Box>
      </Box>
    </SectionLayout>
  );
};

interface CardProps {
  [index: string]: any;
}
const Card: React.FC<CardProps> = ({ title, auther, ...props }) => {
  return (
    <Box position={"relative"} width={"265px"} height={"355px"} {...props}>
      <Image src={require("assets/image/landing/blog-card1.png")} width={"100%"} height={"100%"} />
      <Box position={"absolute"} top={0} left={0} background={"#19191966"} width={"100%"} height={"100%"} p={"20px"} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} alignItems={"flex-start"}>
        <Box fontWeight={["600"]} fontSize={["32px"]} lineHeight={["39px"]}>
          {title}
        </Box>
        <Box background={"#00000066"} p={"8px"} pr={"12px"} borderRadius={"100px"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
          <Box background={"white"} width={"28px"} height={"28px"} borderRadius={"100%"}></Box>
          {auther}
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerSection;
