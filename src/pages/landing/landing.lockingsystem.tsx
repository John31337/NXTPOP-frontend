import React, { useState } from "react";
import SectionLayout from "components/layouts/section";
import { Box, Image } from "components/base/initial";
import { LockIcon } from "components/icons";

interface LockingsystemSectionProps {
  id?: string;
}
const LockingsystemSection: React.FC<LockingsystemSectionProps> = ({ id }) => {
  return (
    <SectionLayout
      id={id}
      position={"relative"}
      title={"Locking System"}
      subTitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </>
      }
    >
      <Box display={"flex"} justifyContent={"center"} gridGap={"20px"} flexWrap={"wrap"}>
        <Card name={"NFT name"} collectionName={"nft collection name"} />
        <Card name={"NFT name"} collectionName={"nft collection name"} lock />
        <Card name={"NFT name"} collectionName={"nft collection name"} lock />
      </Box>
    </SectionLayout>
  );
};

interface CardProps {
  [index: string]: any;
}
const Card: React.FC<CardProps> = ({ lock, name, collectionName, children, ...props }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Box
      background={`url(${require("assets/image/landing/lock-card1.png")})`}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      width={"265px"}
      height={"395px"}
      {...props}
      cursor={"pointer"}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Box bg={"rgba(25, 25, 25, 0.8)"} backDrop={!isHover ? "blur(40px)" : "reverse"} width={"100%"} height={"100%"} p={"20px"} display={"flex"} flexDirection={"column"} transition={"var(--transition)"}>
        <Box flexGrow={1} fontSize={"50px"} color={isHover ? "transparent" : "white"} display={"flex"} justifyContent={"center"} alignItems={"center"} transition={"var(--transition)"}>
          <LockIcon />
        </Box>
        <Box fontWeight={["600"]} fontSize={["32px"]} lineHeight={["39px"]} color={isHover ? "yellow" : "white"}>
          {name}
        </Box>
        <Box alignSelf={"flex-start"} mt={"12px"} bg={"rgba(0, 0, 0, 0.4)"} backDrop={["blur(104.604px)"]} p={"8px"} pr={"12px"} borderRadius={"100px"} display={"flex"} alignItems={"center"} gridGap={"8px"} fontWeight={["500"]} fontSize={["14px"]} lineHeight={["17px"]}>
          <Box background={"white"} width={"24px"} height={"24px"} borderRadius={"100%"}></Box>
          {collectionName}
        </Box>
      </Box>
    </Box>
  );
};

export default LockingsystemSection;
