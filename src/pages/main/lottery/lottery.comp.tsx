import React from "react";
import { Box, Image } from "components/base/initial";
import styled from "styled-components";
import { LotteryLogoIcon } from "components/icons";

interface LotteryTimeCounterProps {
  dark?: boolean;
}
export const LotteryTimeCounter: React.FC<LotteryTimeCounterProps> = ({ dark }) => {
  return (
    <Box filter={`drop-shadow(0px 20px 30px ${dark ? "#333333" : "#3E416F"})`} display={"flex"} alignItems={"center"} gridGap={"4px"}>
      <NumCard bg={dark ? "#333333" : "lightpurple"} color={dark ? "white" : "darkpurple"}>
        1
      </NumCard>
      <NumCard bg={dark ? "#333333" : "lightpurple"} color={dark ? "white" : "darkpurple"}>
        0
      </NumCard>
      <Box fontWeight={["600"]} fontSize={["16px"]} lineHeight={["32px"]} letterSpacing={["-0.04em"]}>
        :
      </Box>
      <NumCard bg={dark ? "#333333" : "lightpurple"} color={dark ? "white" : "darkpurple"}>
        3
      </NumCard>
      <NumCard bg={dark ? "#333333" : "lightpurple"} color={dark ? "white" : "darkpurple"}>
        9
      </NumCard>
      <Box fontWeight={["600"]} fontSize={["16px"]} lineHeight={["32px"]} letterSpacing={["-0.04em"]}>
        :
      </Box>
      <NumCard bg={dark ? "#333333" : "lightpurple"} color={dark ? "white" : "darkpurple"}>
        5
      </NumCard>
      <NumCard bg={dark ? "#333333" : "lightpurple"} color={dark ? "white" : "darkpurple"}>
        3
      </NumCard>
    </Box>
  );
};

const NumCard = styled(Box).attrs({
  width: "40px",
  height: "48px",
  borderRadius: "4px",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "32px",
  letterSpacing: "-0.04em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})``;

interface SlideBtnProps {}
export const SlideBtn: React.FC<SlideBtnProps> = ({ children }) => {
  return (
    <Box bg={"#232323"} p={"7px"} border={"1px solid #333333"} borderRadius={"16px"} display={"inline-block"}>
      <Box background={"linear-gradient(180deg, #343434 0%, #2B2B2B 100%)"} p={"13px"} borderRadius={"10px"} display={"flex"} alignItems={"center"} cursor={"pointer"}>
        <Box bg={"lightpurple"} width={"24px"} height={"24px"} p={"6px"} borderRadius={"100%"} boxShadow={"0px 10px 20px 0px #0003"}>
          <Box bg={"white"} width={"100%"} height={"100%"} borderRadius={"100%"}></Box>
        </Box>
        <Box ml={"12px"} mr={"24px"} display={"flex"}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_282_355)">
              <path d="M9.59961 7L14.5996 12L9.59961 17" stroke="#6B6C94" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.7998 7L21.7998 12L16.7998 17" stroke="#46475B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2.40039 7L7.40039 12L2.40039 17" stroke="#A9ACF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_282_355">
                <rect width="24" height="24" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)" />
              </clipPath>
            </defs>
          </svg>
        </Box>
        <Box background={"linear-gradient(99.82deg, #A9ACF7 3.38%, rgba(169, 172, 248, 0) 125.14%)"} backClip={"text"} fontWeight={"bold"} fontSize={"16px"} lineHeight={"24px"} color={"transparent"}>
          slide here
        </Box>
      </Box>
    </Box>
  );
};

interface LotteryMachineProps {}
export const LotteryMachine: React.FC = () => {
  return (
    <LotteryMachineBox display={"flex"} alignItems={"center"} gridGap={"12px"}>
      <Box position={"relative"} zIndex={1} mr={"-30px"}>
        <Image src={require("assets/image/lottery/machinePinLeft.png")} />
      </Box>
      <LotterySlot />
      <LotterySlot />
      <LotterySlot />
      <Box position={"relative"} zIndex={1} ml={"-30px"}>
        <Image src={require("assets/image/lottery/machinePinRight.png")} />
      </Box>
    </LotteryMachineBox>
  );
};
const LotteryMachineBox = styled(Box)`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background: linear-gradient(#171717, #171717, transparent 30% 70%, #171717, #171717);
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;
const LotterySlot = () => {
  return (
    <Box background={"linear-gradient(180deg, #171717 0%, rgba(23, 23, 23, 0.24) 20%, rgba(174, 177, 255, 0.2) 53.23%, rgba(23, 23, 23, 0.24) 80%, #171717 100%)"} px={"4px"}>
      <Box width={"88px"} height={"88px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <LotteryLogoIcon />
      </Box>
      <Box bg={"lightpurple"} width={"88px"} height={"88px"} borderRadius={"8px"} boxShadow={"0px 8px 24px rgba(0, 0, 0, 0.16)"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <LotteryLogoIcon />
      </Box>
      <Box width={"88px"} height={"88px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <LotteryLogoIcon />
      </Box>
    </Box>
  );
};
