import React from "react";
import SectionLayout from "components/layouts/section";
import { Box } from "components/base/initial";

interface RoadmapSectionProps {
  id?: string;
}
const RoadmapSection: React.FC<RoadmapSectionProps> = ({ id }) => {
  return (
    <SectionLayout
      id={id}
      position={"relative"}
      title={"Roadmap"}
      subTitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </>
      }
    >
      <Box position={"relative"} width={"100%"} overflow={"hidden"} display={"flex"} gridGap={["32px", "42px", "64px", "88px"]}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
          <Box bg={"gray"} borderRadius={["30px", "40px", "48px"]} p={["12px", "16px", "18px", "20px"]} boxSizing={"border-box"}>
            <Box bg={"black"} borderRadius={["24px", "28px", "32px"]} width={["70px", "90px", "112px"]} height={["70px", "90px", "112px"]} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gridGap={"4px"}>
              <Box>2022</Box>
              <Box color={"yellow"} fontWeight={["600"]} fontSize={["24px", "32px", "40px", "48px"]} lineHeight={["32px", "40px", "48px", "56px"]}>
                Q1
              </Box>
            </Box>
          </Box>
          <Box mt={"20px"} display={"flex"} flexDirection={"column"} gridGap={"12px"}>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
          <Box bg={"gray"} borderRadius={["30px", "40px", "48px"]} p={["12px", "16px", "18px", "20px"]} boxSizing={"border-box"}>
            <Box bg={"black"} borderRadius={["24px", "28px", "32px"]} width={["70px", "90px", "112px"]} height={["70px", "90px", "112px"]} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gridGap={"4px"}>
              <Box>2022</Box>
              <Box color={"yellow"} fontWeight={["600"]} fontSize={["24px", "32px", "40px", "48px"]} lineHeight={["32px", "40px", "48px", "56px"]}>
                Q2
              </Box>
            </Box>
          </Box>
          <Box mt={"20px"} display={"flex"} flexDirection={"column"} gridGap={"12px"}>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
          <Box bg={"gray"} borderRadius={["30px", "40px", "48px"]} p={["12px", "16px", "18px", "20px"]} boxSizing={"border-box"}>
            <Box bg={"black"} borderRadius={["24px", "28px", "32px"]} width={["70px", "90px", "112px"]} height={["70px", "90px", "112px"]} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gridGap={"4px"}>
              <Box>2022</Box>
              <Box color={"yellow"} fontWeight={["600"]} fontSize={["24px", "32px", "40px", "48px"]} lineHeight={["32px", "40px", "48px", "56px"]}>
                Q3
              </Box>
            </Box>
          </Box>
          <Box mt={"20px"} display={"flex"} flexDirection={"column"} gridGap={"12px"}>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
          <Box bg={"gray"} borderRadius={["30px", "40px", "48px"]} p={["12px", "16px", "18px", "20px"]} boxSizing={"border-box"}>
            <Box bg={"black"} borderRadius={["24px", "28px", "32px"]} width={["70px", "90px", "112px"]} height={["70px", "90px", "112px"]} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gridGap={"4px"}>
              <Box>2022</Box>
              <Box color={"yellow"} fontWeight={["600"]} fontSize={["24px", "32px", "40px", "48px"]} lineHeight={["32px", "40px", "48px", "56px"]}>
                Q4
              </Box>
            </Box>
          </Box>
          <Box mt={"20px"} display={"flex"} flexDirection={"column"} gridGap={"12px"}>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
          <Box bg={"gray"} borderRadius={["30px", "40px", "48px"]} p={["12px", "16px", "18px", "20px"]} boxSizing={"border-box"}>
            <Box bg={"black"} borderRadius={["24px", "28px", "32px"]} width={["70px", "90px", "112px"]} height={["70px", "90px", "112px"]} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gridGap={"4px"}>
              <Box>2022</Box>
              <Box color={"yellow"} fontWeight={["600"]} fontSize={["24px", "32px", "40px", "48px"]} lineHeight={["32px", "40px", "48px", "56px"]}>
                Q5
              </Box>
            </Box>
          </Box>
          <Box mt={"20px"} display={"flex"} flexDirection={"column"} gridGap={"12px"}>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
          <Box bg={"gray"} borderRadius={["30px", "40px", "48px"]} p={["12px", "16px", "18px", "20px"]} boxSizing={"border-box"}>
            <Box bg={"black"} borderRadius={["24px", "28px", "32px"]} width={["70px", "90px", "112px"]} height={["70px", "90px", "112px"]} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gridGap={"4px"}>
              <Box>2022</Box>
              <Box color={"yellow"} fontWeight={["600"]} fontSize={["24px", "32px", "40px", "48px"]} lineHeight={["32px", "40px", "48px", "56px"]}>
                Q6
              </Box>
            </Box>
          </Box>
          <Box mt={"20px"} display={"flex"} flexDirection={"column"} gridGap={"12px"}>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
            <Box bg={"gray"} fontWeight={["600"]} fontSize={["16px", "18px", "20px"]} lineHeight={["18px", "20px", "24px"]} px={["26px", "32px", "40px", "46px"]} py={["16px", "18px", "20px"]} borderRadius={["16px", "18px", "24px"]} whiteSpace={"nowrap"}>
              lorem ipsum
            </Box>
          </Box>
        </Box>
        <Box position={"absolute"} top={"0px"} right={"0px"} background={"linear-gradient(90deg, transparent, #000a)"} height={"100%"} width={"5%"}></Box>
      </Box>
    </SectionLayout>
  );
};

export default RoadmapSection;
