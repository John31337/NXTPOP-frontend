import { Box, Image } from "components/base/initial";
import { SegmentLink } from "components/elements/buttons";
import { MainNFTCard } from "components/elements/cards";
import { DashboardIcon, DiscordIcon, DropIcon, MediumIcon, NarrowIcon, TwitterIcon } from "components/icons";
import { useContext, useEffect } from "react";
import { ReadMore } from "./drilldown.comp";
import { FrontContext } from "providers/provider.front";
import { Collapse } from "components/elements/collapse";
import { CustomInput, CustomSelect, SmOption } from "components/elements/form";

interface DrillDownPageProps {}
const DrillDownPage: React.FC<DrillDownPageProps> = ({}) => {
  const { setNeedFilter } = useContext(FrontContext);
  useEffect(() => {
    setNeedFilter(true);
    return () => {
      setNeedFilter(false);
    };
  });
  return (
    <Box overflow={"auto"}>
      <Box background={`url(${require("assets/image/drilldown/back.png")})`} backgroundSize={"cover"} backgroundPosition={"center"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box mt={"20px"} position={"relative"} width={"242px"} height={"242px"} border={"8px solid #222222"} borderRadius={"100%"} overflow={"hidden"}>
          <Image src={require("assets/image/drilldown/item.png")} width={"auto"} height={"100%"} />
        </Box>
        <Box mt={"-40px"} bg={"rgba(34, 34, 34, 0.4)"} backDrop={"blur(80px)"} p={"8px"} borderRadius={"100px"} display={"flex"} gridGap={"4px"}>
          <Box background={"#333333"} px={"10px"} py={"6px"} borderRadius={"48px"} fontSize={"20px"} display={"flex"} cursor={"pointer"}>
            <TwitterIcon />
          </Box>
          <Box background={"#333333"} px={"10px"} py={"6px"} borderRadius={"48px"} fontSize={"20px"} display={"flex"} cursor={"pointer"}>
            <MediumIcon />
          </Box>
          <Box background={"#333333"} px={"10px"} py={"6px"} borderRadius={"48px"} fontSize={"20px"} display={"flex"} cursor={"pointer"}>
            <DiscordIcon />
          </Box>
        </Box>
        <Box mt={"4px"} fontWeight={"600"} fontSize={"28px"} lineHeight={"32px"}>
          Space Runners
        </Box>
        <Box mt={"20px"} mb={"-35px"} display={"flex"} justifyContent={"center"} gridGap={"12px"} flexWrap={"wrap"}>
          <Box minWidth={"214px"} bg={"#171717"} p={"12px"} border={"1px solid #333333"} borderRadius={"8px"} display={"flex"} flexDirection={"column"} alignItems={"center"} gridGap={"6px"}>
            <Box fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} color={"#777777"} textAlign={"center"}>
              Floor Price
            </Box>
            <Box fontWeight={"500"} fontSize={"14px"} lineHeight={"16px"} color={"white"} textAlign={"center"}>
              7.48 SOL
            </Box>
          </Box>
          <Box minWidth={"214px"} bg={"#171717"} p={"12px"} border={"1px solid #333333"} borderRadius={"8px"} display={"flex"} flexDirection={"column"} alignItems={"center"} gridGap={"6px"}>
            <Box fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} color={"#777777"} textAlign={"center"}>
              Total Volume (All time, All Marketplaces)
            </Box>
            <Box fontWeight={"500"} fontSize={"14px"} lineHeight={"16px"} color={"white"} textAlign={"center"}>
              51803.25 SOL
            </Box>
          </Box>
          <Box minWidth={"214px"} bg={"#171717"} p={"12px"} border={"1px solid #333333"} borderRadius={"8px"} display={"flex"} flexDirection={"column"} alignItems={"center"} gridGap={"6px"}>
            <Box fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} color={"#777777"} textAlign={"center"}>
              Avg Sale Price (Last 24HR)
            </Box>
            <Box fontWeight={"500"} fontSize={"14px"} lineHeight={"16px"} color={"white"} textAlign={"center"}>
              17.20 SOL
            </Box>
          </Box>
          <Box minWidth={"214px"} bg={"#171717"} p={"12px"} border={"1px solid #333333"} borderRadius={"8px"} display={"flex"} flexDirection={"column"} alignItems={"center"} gridGap={"6px"}>
            <Box fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} color={"#777777"} textAlign={"center"}>
              Total listed count
            </Box>
            <Box fontWeight={"500"} fontSize={"14px"} lineHeight={"16px"} color={"white"} textAlign={"center"}>
              467
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Box mt={"48px"} textAlign={"center"}>
          <ReadMore>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ...</ReadMore>
        </Box>
      </Box>
      <Box mt={"18px"} bg={"darkgray"} width={"100%"} px={"20px"} borderBottom={"1px solid #333333"} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"} gridGap={"32px"}>
          <SegmentLink selected>Artworks</SegmentLink>
          <SegmentLink>Activity</SegmentLink>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={["column", "column", "row"]}>
        <Box bg={"darkgray"} p={"20px"} minWidth={"270px"} display={"block"} borderTop={"1px solid #333333"}>
          <Box p={"6px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Box ml={"15px"} fontWeight={["600"]} fontSize={["12px"]} lineHeight={["16px"]} color={"#777777"}>
              Filters
            </Box>
            <Box>
              <NarrowIcon dir={"up"} />
            </Box>
          </Box>
          <Collapse bg={"gray"} icon={<DashboardIcon />} title={"Price filter"} border={"none"} fSize={"16px"} actSymbol={"PlMi"} sm expanded>
            <Box p={"12px"} display={"flex"} flexDirection={"column"} gridGap={"12px"}>
              <Box display={"flex"} flexDirection={"column"} gridGap={"8px"}>
                <Box>
                  <CustomSelect width={"100%"}>
                    <SmOption value={"Sol"}>Sol</SmOption>
                    <SmOption value={"Sol"}>Sol</SmOption>
                    <SmOption value={"Sol"}>Sol</SmOption>
                    <SmOption value={"Sol"}>Sol</SmOption>
                  </CustomSelect>
                </Box>
                <Box display={"flex"} alignItems={"center"} gridGap={"6px"}>
                  <Box flexGrow={1}>
                    <CustomInput bg={"black"} width={"100%"} before={<Box fontSize={"14px"}>Min</Box>} />
                  </Box>
                  <Box fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"#777777"}>
                    to
                  </Box>
                  <Box flexGrow={1}>
                    <CustomInput bg={"black"} width={"100%"} before={<Box fontSize={"14px"}>Max</Box>} />
                  </Box>
                </Box>
              </Box>
              <Box bg={"rgba(174, 177, 255, 0.1)"} py={"8px"} textAlign={"center"} borderRadius={"8px"} cursor={"pointer"}>
                Apply
              </Box>
            </Box>
          </Collapse>
          <Collapse bg={"gray"} icon={<DropIcon />} title={"Attributes filter"} border={"none"} fSize={"16px"} actSymbol={"PlMi"} sm></Collapse>
        </Box>
        <Box flexGrow={1} p={"20px"} display={"flex"} justifyContent={"center"} gridGap={"20px"} flexWrap={"wrap"}>
          <MainNFTCard />
          <MainNFTCard />
          <MainNFTCard />
          <MainNFTCard />
          <MainNFTCard />
          <MainNFTCard />
          <MainNFTCard />
          <MainNFTCard />
          {Array(6)
            .fill("0")
            .map((each, index) => {
              return <Box key={index} width={"268px"} height={"0px"} />;
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default DrillDownPage;
