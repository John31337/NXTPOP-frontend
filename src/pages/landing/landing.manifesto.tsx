import React from "react";
import styled from "styled-components";
import SectionLayout from "components/layouts/section";
import { Box, Image } from "components/base/initial";

interface ManifestoSectionProps {
  id?: string;
}
const ManifestoSection: React.FC<ManifestoSectionProps> = ({ id }) => {
  return (
    <SectionLayout
      id={id}
      position={"relative"}
      title={"Manifesto"}
      subTitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </>
      }
    >
      <Image src={require("assets/image/landing/manifesto.png")} position={"absolute"} width={"50%"} bottom={"0px"} left={"0px"} transform={"translateY(10%)"} zIndex={-1} />
      <Box bg={"gray"} maxWidth={"875px"} p={["12px", "16px", "18px", "20px"]} borderRadius={["30px", "40px", "48px"]} boxShadow={"box-shadow: 0px 56px 132px rgba(0, 0, 0, 0.4)"} margin={"auto"}>
        <Box bg={"black"} borderRadius={["24px", "28px", "32px"]} p={["10px", "16px", "20px", "24px"]} pl={["reverse", "reverse", "reverse", "48px"]} boxShadow={"0px 56px 132px rgba(0, 0, 0, 0.4)"} fontWeight={["500"]} fontSize={["18px", "20px", "24px", "28px"]} lineHeight={["20px", "24px", "28px", "32px"]} display={"flex"} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"} gridGap={["10px", "15px", "20px"]}>
          <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={["10px", "15px", "20px"]}>
            <Box whiteSpace={"nowrap"}>our platform presents&nbsp;</Box>
            <Box color={"yellow"}>manifesto|</Box>
          </Box>
          <YellowBtn>read more</YellowBtn>
        </Box>
      </Box>
    </SectionLayout>
  );
};

const YellowBtn = styled(Box).attrs({
  bg: "yellow",
  px: "35px",
  py: "20px",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "24px",
  color: "black",
  borderRadius: "18px",
})``;

export default ManifestoSection;
