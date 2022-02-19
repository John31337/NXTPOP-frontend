import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Box, Image, Link } from "components/base/initial";
import { NormalBtn, SegmentLink, SegmentSmLink } from "components/elements/buttons";
import { AnklesIcon, ArrowIcon, BackgroundsIcon, FourStarIcon, LacesIcon, LogoIcon, RectangleIcon, SkinsIcon, SocksIcon, SolanaTokenFillIcon, SolesIcon, SunshineIcon, TexturesIcon, ToesIcon, VerifyIcon } from "components/icons";
import { Collapse } from "components/elements/collapse";
import { CustomChart, CustomTable, CustomTd, PaginationCtrl } from "./detail.comp";
import { MainNFTCard } from "components/elements/cards";
import { Dropdown } from "components/elements/form";

const DashboardOwnedPage: React.FC = () => {
  const navigate = useNavigate();
  const CategoryLinks = (
    <>
      <SegmentLink selected>Main info</SegmentLink>
      <SegmentLink>Price history</SegmentLink>
      <SegmentLink>Offers</SegmentLink>
      <SegmentLink>Activities</SegmentLink>
      <SegmentLink>More from collection</SegmentLink>
    </>
  );
  return (
    <>
      <Box bg={"darkgray"} width={"100%"} px={"20px"} py={["6px", "6px", "6px", "6px", "0px"]} borderBottom={"1px solid #333333"} display={"flex"} justifyContent={"space-between"}>
        <Link
          height={"100%"}
          hoverColor={"#aeb1ff"}
          display={"flex"}
          alignItems={"center"}
          gridGap={"8px"}
          cursor={"pointer"}
          onClick={() => {
            navigate("../");
          }}
        >
          <Box fontSize={"24px"} display={"flex"}>
            <ArrowIcon />
          </Box>
          Back
        </Link>
        <Box display={"flex"} alignItems={"center"} gridGap={"32px"}>
          <Box display={["flex", "flex", "flex", "flex", "none"]}>
            <Dropdown text={"Category"} contentAlign={"right"}>
              {CategoryLinks}
            </Dropdown>
          </Box>
          <Box display={["none", "none", "none", "none", "flex"]} gridColumnGap={"32px"} flexWrap={"wrap"}>
            {CategoryLinks}
          </Box>
        </Box>
      </Box>
      <Box flexGrow={1} width={"100%"} overflow={"auto"} display={"flex"} flexDirection={"column"}>
        <Box p={"20px"} display={"flex"} flexDirection={["column", "column", "column", "row"]} gridGap={"20px"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Image src={require("assets/image/dashboard/owned.png")} />
          </Box>
          <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
            <Box mt={"24px"} fontWeight={["600"]} fontSize={["28px"]} lineHeight={["32px"]} letterSpacing={["-0.04em"]}>
              Space Runners x NBA Champions #1139
            </Box>
            <Box mt={"12px"} display={"flex"} alignItems={"center"}>
              <Box bg={"white"} width={"32px"} height={"32px"} borderRadius={"100%"} />
              <Box ml={"12px"} mr={"8px"} fontWeight={"600"} fontSize={"14px"} lineHeight={"16px"} letterSpacing={"-0.04em"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                Space Runners
              </Box>
              <Box fontSize={"16px"} color={"lightpurple"} display={"flex"}>
                <VerifyIcon />
              </Box>
            </Box>
            <Box mt={"24px"} p={"16px"} background={"#222222"} border={"1px solid #333333"} borderRadius={"8px"} display={"flex"} flexDirection={["column", "row", "row", "column", "row"]} justifyContent={["center", "space-between", "space-between", "center", "space-between"]} gridGap={"12px"}>
              <Box display={"flex"} justifyContent={"Center"} alignItems={"center"}>
                <Box fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"#777777"}>
                  Current Price
                </Box>
                <Box mt={"8px"} display={"flex"} alignItems={"center"} gridGap={"12px"}>
                  <Box background={"linear-gradient(266.99deg, #AEB1FF -1.09%, #DBAEFF 100%)"} backClip={"text"} fontWeight={"600"} fontSize={"28px"} lineHeight={"32px"} letterSpacing={"-0.04em"} color={"transparent"} whiteSpace={"nowrap"}>
                    7.1 SOL
                  </Box>
                  <Box fontSize={"24px"} display={"flex"}>
                    <SolanaTokenFillIcon />
                  </Box>
                </Box>
              </Box>
              <Box display={"flex"} justifyContent={"Center"} alignItems={"center"} gridGap={"12px"} flexWrap={"wrap"}>
                <NormalBtn>Print NFT</NormalBtn>
                <NormalBtn outline>Not listed</NormalBtn>
              </Box>
            </Box>
            <Box mt={"30px"} borderBottom={"1px solid #333333"} display={"flex"} justifyContent={"flex-start"} gridGap={"24px"}>
              <SegmentSmLink>About</SegmentSmLink>
              <SegmentSmLink selected>Attributes</SegmentSmLink>
              <SegmentSmLink>Details</SegmentSmLink>
            </Box>
            <Box mt={"16px"} display={"flex"} gridGap={"12px"} flexWrap={"wrap"}>
              <AttrCard icon={<TexturesIcon />} title={"Texture A"}>
                Fabric Red
              </AttrCard>
              <AttrCard icon={<TexturesIcon />} title={"Texture B"}>
                White Galaxy
              </AttrCard>
              <AttrCard icon={<ToesIcon />} title={"Toes"}>
                Flat
              </AttrCard>
              <AttrCard icon={<AnklesIcon />} title={"Ankles"}>
                Criss-Cross
              </AttrCard>
              <AttrCard icon={<LacesIcon />} title={"Laces"}>
                Bandage
              </AttrCard>
              <AttrCard icon={<SolesIcon />} title={"Soles"}>
                Straight Up
              </AttrCard>
              <AttrCard icon={<SocksIcon />} title={"Socks"}>
                Champion’s Color
              </AttrCard>
              <AttrCard icon={<SkinsIcon />} title={"Skin"}>
                Black
              </AttrCard>
              <AttrCard icon={<BackgroundsIcon />} title={"Background"}>
                Sky Blue
              </AttrCard>
            </Box>
            <Box mt={"16px"} bg={"darkgray"} width={"100%"} height={"1px"} />
          </Box>
        </Box>
        <Box p={"20px"} pt={0} display={"flex"} flexDirection={"column"} gridGap={"16px"}>
          <Collapse icon={<FourStarIcon />} title={"Price history"}>
            <Box width={"100%"} p={"12px"}>
              <Box position={"relative"} bg={"black"} width={"100%"} pt={"20px"} border={"1px solid #333333"} borderRadius={"8px"}>
                <Box position={"absolute"} left={"0px"} top={"50%"} pr={"12px"} color={"#777777"} textAlign={"center"} transform={"translateY(-50%) scale(-1)"} style={{ writingMode: "vertical-lr" }}>
                  Price (SOL)
                </Box>
                <Box width={"100%"} flexGrow={1}>
                  <CustomChart />
                </Box>
              </Box>
            </Box>
          </Collapse>
          <Collapse icon={<RectangleIcon />} title={"No offers yet"}></Collapse>
          <Collapse icon={<SunshineIcon />} title={"Activities"}>
            <Box overflowX={"auto"}>
              <CustomTable>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Transaction type</th>
                    <th>Time</th>
                    <th>Total amount</th>
                    <th>Buyer</th>
                    <th>Seller</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <CustomTd color={"#AEB1FF"}>0x78f02b9...ab</CustomTd>
                    <CustomTd>Listing</CustomTd>
                    <CustomTd>2 hours ago</CustomTd>
                    <CustomTd>7.1 SOL</CustomTd>
                    <CustomTd color={"#AEB1FF"}>0x78f02b9...8b8sf</CustomTd>
                    <CustomTd color={"#AEB1FF"}>0x78f02b9...8b8sf</CustomTd>
                  </tr>
                  <tr>
                    <CustomTd color={"#AEB1FF"}>0x78f02b9...ab</CustomTd>
                    <CustomTd color={"#D2FFAE"}>
                      <Box display={"flex"} alignItems={"center"} gridGap={"8px"}>
                        Sold via Buy Now
                        <LogoIcon />
                      </Box>
                    </CustomTd>
                    <CustomTd>2 hours ago</CustomTd>
                    <CustomTd>7.1 SOL</CustomTd>
                    <CustomTd color={"#AEB1FF"}>0x78f02b9...8b8sf</CustomTd>
                    <CustomTd color={"#AEB1FF"}>0x78f02b9...8b8sf</CustomTd>
                  </tr>
                  <tr>
                    <CustomTd color={"#AEB1FF"}>0x78f02b9...ab</CustomTd>
                    <CustomTd color={"#777777"}>Cancel Listing</CustomTd>
                    <CustomTd>2 hours ago</CustomTd>
                    <CustomTd>7.1 SOL</CustomTd>
                    <CustomTd color={"#AEB1FF"}>0x78f02b9...8b8sf</CustomTd>
                    <CustomTd color={"#AEB1FF"}>0x78f02b9...8b8sf</CustomTd>
                  </tr>
                </tbody>
              </CustomTable>
            </Box>
          </Collapse>
          <PaginationCtrl />
        </Box>
        <Box p={"20px"} bg={"darkgray"} display={"flex"} justifyContent={"center"} alignItems={"flex-start"} flexWrap={"wrap"} gridGap={"20px"}>
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
    </>
  );
};

interface AttrCardProps {
  icon: any;
  title: string;
}
const AttrCard: React.FC<AttrCardProps> = ({ icon, title, children, ...props }) => {
  return (
    <AttrCardBase {...props}>
      <Box fontSize={"20px"} color={"#777777"} display={"flex"} alignItems={"center"} gridGap={"6px"}>
        <Box>{icon}</Box>
        <Box fontWeight={["600"]} fontSize={["12px"]} lineHeight={["16px"]} whiteSpace={"nowrap"}>
          {title}
        </Box>
      </Box>
      <Box fontWeight={["500"]} fontSize={["14px"]} lineHeight={["16px"]} whiteSpace={"nowrap"}>
        {children}
      </Box>
    </AttrCardBase>
  );
};
const AttrCardBase = styled(Box).attrs({
  flex: 1,
  minWidth: ["35%", "35%", "25%", "35%", "25%"],
  bg: "darkgray",
  p: "12px",
  border: "1px solid #333333",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gridGap: "6px",
})``;

export default DashboardOwnedPage;
