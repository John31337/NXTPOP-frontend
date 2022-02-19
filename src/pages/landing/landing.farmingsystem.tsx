import React from "react";
import styled from "styled-components";
import SectionLayout from "components/layouts/section";
import { Box, Image } from "components/base/initial";

interface FarmingsystemSectionProps {
  id?: string;
}
const FarmingsystemSection: React.FC<FarmingsystemSectionProps> = ({ id }) => {
  return (
    <SectionLayout
      id={id}
      position={"relative"}
      title={"Farming System APY"}
      subTitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </>
      }
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gridGap={["34px", "60px", "80px", "90px"]} flexWrap={"wrap"}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
          <Card name={"NFT name"} collectionName={"nft collection name"} price={"5.56 ETH"} />
        </Box>
        <Box bg={"gray"} borderRadius={"100%"} fontSize={"40px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image src={require("assets/image/landing/farming-lock.png")} />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Image src={require("assets/image/landing/farm-list.png")} width={"90%"} maxWidth={"400px"} />
        </Box>
      </Box>
    </SectionLayout>
  );
};

interface CardProps {
  [index: string]: any;
}
const Card: React.FC<CardProps> = ({ name, collectionName, price, children, ...props }) => {
  return (
    <CardBase background={`url(${require("assets/image/landing/farm-card.png")})`} backgroundSize={"cover"} backgroundPosition={"center"} width={["270px", "300px", "340px", "385px"]} height={["360px", "400px", "460px", "516px"]} p={["24px", "22px", "28px"]} display={"flex"} flexDirection={"column"} cursor={"pointer"} {...props}>
      <Box mb={"auto"} alignSelf={"flex-start"} mt={"12px"} bg={"rgba(0, 0, 0, 0.4)"} backDrop={["blur(104.604px)"]} p={"8px"} pr={"12px"} borderRadius={"100px"} display={"flex"} alignItems={"center"} gridGap={"8px"} fontWeight={["500"]} fontSize={["20.3396px"]} lineHeight={["25px"]} color={"yellow"}>
        <Box background={"black"} width={"34px"} height={"34px"} borderRadius={"100%"} fontWeight={["500"]} fontSize={["20px"]} lineHeight={["24px"]} color={"yellow"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          $
        </Box>
        {price}
      </Box>
      <Box fontWeight={["600"]} fontSize={["28px", "34px", "42px", "46px"]} lineHeight={["34px", "42px", "46px", "56px"]} color={"white"}>
        {name}
      </Box>
      <Box alignSelf={"flex-start"} mt={["4px", "8px", "10px", "12px"]} bg={"rgba(0, 0, 0, 0.4)"} backDrop={["blur(104.604px)"]} p={"8px"} pr={"12px"} borderRadius={"100px"} display={"flex"} alignItems={"center"} gridGap={"8px"} fontWeight={["500"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "22px", "24px"]}>
        <Box background={"white"} width={"34px"} height={"34px"} borderRadius={"100%"} />
        {collectionName}
      </Box>
    </CardBase>
  );
};

const CardBase = styled(Box)`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background: #28292b;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: translateX(-20%) scale(0.8);
  }
`;

export default FarmingsystemSection;
