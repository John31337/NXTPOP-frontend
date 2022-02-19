import React from "react";
import { Box, Image } from "components/base/initial";
import { LotteryMachine, LotteryTimeCounter, SlideBtn } from "./lottery.comp";
import { CustomInput, CustomSelect, SmOption } from "components/elements/form";
import { AllTokenIcon, BusdTokenIcon, CosmosTokenIcon, EthTokenIcon, InforIcon, SolanaTokenIcon, TerraTokenIcon } from "components/icons";
import { NormalBtn } from "components/elements/buttons";
import styled, { keyframes } from "styled-components";

const LotteryPage: React.FC = () => {
  return (
    <Box flex={1} overflow={"auto"} display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} flexDirection={["column-reverse", "column-reverse", "column-reverse", "column-reverse", "row"]}>
        <Box width={["100%", "100%", "100%", "100%", "50%"]} px={["20px", "40px", "60px", "75px", "85px"]} py={"45px"} borderRight={["none", "none", "none", "none", "1px solid #333333"]} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Box display={"flex"} justifyContent={"center"}>
              <LotteryTimeCounter />
            </Box>
            <Box mt={"64px"} display={"flex"} flexWrap={"wrap"} gridGap={"16px"}>
              <Box flex={1} display={"flex"} flexDirection={"column"} gridGap={"16px"}>
                <Box textAlign={"center"}>Balance: 0 BUSD</Box>
                <Box>
                  <CustomInput
                    onChange={(value: any) => {
                      console.log(value);
                    }}
                    bg={"transparent"}
                    value={"45"}
                    after={
                      <Box bg={"lightpurple"} px={"3px"} pt={"1.5px"} pb={"2.5px"} borderRadius={"100px"} fontWeight="600" fontSize="9px" lineHeight={"8px"} color={"darkpurple"} display={"flex"} justifyContent={"center"} alignItems={"center"} whiteSpace={"nowrap"}>
                        max
                      </Box>
                    }
                  />
                </Box>
              </Box>
              <Box flex={1} display={"flex"} flexDirection={"column"} gridGap={"16px"}>
                <Box textAlign={"center"}>Play with</Box>
                <Box>
                  <CustomSelect
                    width={"100%"}
                    onChange={(value: any) => {
                      // console.log(value);
                    }}
                  >
                    <SmOption value={"1"}>
                      <Box fontSize={"16px"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
                        <SolanaTokenIcon />
                        Solana
                      </Box>
                    </SmOption>
                    <SmOption value={"2"}>
                      <Box fontSize={"16px"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
                        <TerraTokenIcon />
                        Terra
                      </Box>
                    </SmOption>
                    <SmOption value={"3"}>
                      <Box fontSize={"16px"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
                        <CosmosTokenIcon />
                        Cosmos
                      </Box>
                    </SmOption>
                    <SmOption value={"4"}>
                      <Box fontSize={"16px"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
                        <EthTokenIcon />
                        Eth
                      </Box>
                    </SmOption>
                    <SmOption value={"5"} selected>
                      <Box fontSize={"16px"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
                        <AllTokenIcon />
                        All
                      </Box>
                    </SmOption>
                    <SmOption value={"6"}>
                      <Box fontSize={"16px"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
                        <BusdTokenIcon />
                        Busd
                      </Box>
                    </SmOption>
                  </CustomSelect>
                </Box>
              </Box>
            </Box>
            <Box px={"16px"} py={"20px"} mt={"32px"} border={"1px solid #333333"} boxSizing={"border-box"} borderRadius={"8px"} display={["grid", "grid", "flex"]} gridTemplateAreas={"'lotteryPercent lotteryInfo' 'lotteryMachine lotteryMachine'"} gridGap={"8px"}>
              <Box gridArea={"lotteryPercent"} mr={"32px"} display={"flex"} justifyContent={"flex-start"} flexDirection={["row", "row", "column"]}>
                <Box fontWeight={["600"]} fontSize={["12px"]} lineHeight={["16px"]} letterSpacing={["-0.04em"]} color={"#777777"} display={"flex"} alignItems={"center"}>
                  Bonus
                </Box>
                <Box background={"linear-gradient(266.99deg, #AEB1FF -1.09%, #DBAEFF 100%)"} backClip={"text"} fontWeight={"600"} fontSize={"28px"} lineHeight={"32px"} letterSpacing={"-0.04em"} color={"transparent"}>
                  5%
                </Box>
              </Box>
              <Box gridArea={"lotteryMachine"}>
                <LotteryTimeCounter dark />
              </Box>
              <Box ml={"16px"} gridArea={"lotteryInfo"} display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
                <InforIcon />
              </Box>
            </Box>
            <Box mt={"32px"}>
              <NormalBtn>Unlock wallet</NormalBtn>
            </Box>
          </Box>
        </Box>
        <Box width={["100%", "100%", "100%", "100%", "50%"]} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          <Box position={"relative"} overflow={"hidden"}>
            <AniImage1 src={require("assets/image/lottery/lotteryCard1.png")} width={"90%"} />
            <AniImage2 src={require("assets/image/lottery/lotteryCard2.png")} width={"90%"} position={"absolute"} top={"50%"} left={"50%"} />
          </Box>
        </Box>
      </Box>
      <Box flex={1} borderTop={"1px solid #333333"} display={"flex"} flexWrap={"wrap"}>
        <Box width={["100%", "100%", "100%", "100%", "50%"]} display={"flex"} alignItems={"center"} justifyContent={"center"} overflow={"hidden"}>
          <LotteryMachine />
        </Box>
        <Box width={["100%", "100%", "100%", "100%", "50%"]} pb={["30px", "35px", "40px", "45px", "0px"]} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <SlideBtn />
        </Box>
      </Box>
    </Box>
  );
};

const AniImage1 = styled(Image)`
  animation: ${keyframes`
    0% {
      transform: translate(5%, -5%);
    }
    50% {
      transform: translate(5%, 5%) scale(0.95);
    }
    100% {
      transform: translate(5%, -5%);
    }
  `} 4s infinite linear;
`;
const AniImage2 = styled(Image)`
  animation: ${keyframes`
    0% {
      transform: translate(-50%, -50%);
    }
    50% {
      transform: translate(-45%, -60%) scale(1.05);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  `} 4s infinite linear;
`;

export default LotteryPage;
