import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Link } from "components/base/initial";
import { LogoIcon, LogoTextIcon, DashboardIcon, DropIcon, MarketIcon, RedeemIcon, LotteryIcon, DefiIcon, DaoIcon, TwitterIcon, MediumIcon, DiscordIcon, NarrowIcon, PlusIcon, MinusIcon } from "components/icons";
import styled, { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomInput, CustomSelect, SmOption } from "components/elements/form";
import { Collapse } from "components/elements/collapse";
import { FrontContext } from "providers/provider.front";

interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = ({}) => {
  const { needFilter } = useContext(FrontContext);
  const theme: any = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");
  const { visibleSidebar, setVisibleSidebar } = useContext(FrontContext);
  const sidebarDom = useRef<any>(null);
  const handleSidebarVisible = (e: any) => {
    if (sidebarDom.current.contains(e.target)) return;
    if (!visibleSidebar) return;
    setVisibleSidebar(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleSidebarVisible);
    return () => {
      window.removeEventListener("click", handleSidebarVisible);
    };
  }, [visibleSidebar]);
  useEffect(() => {
    setCurrentPath(location.pathname.split("/").slice(-1)[0]);
  }, [location.pathname.split("/").slice(-1)[0]]);
  return (
    <Box ml={visibleSidebar ? "0px" : ["-100%", "0px"]} position={["absolute", "relative"]} top={"0px"} left={"0px"} bg={["#17171750", "transparent"]} backDrop={"blur(25px)"} borderRight={"1px solid #333333"} height={"100vh"} minWidth={["reverse", "reverse", "reverse", "268px"]} display={"flex"} flexDirection={"column"} zIndex={10} transition={"margin var(--transition)"} ref={sidebarDom}>
      <Box px={["10px", "10px", "10px", "20px"]} height={"mainHeader"} minHeight={"mainHeader"} borderBottom={"1px solid #333333"} display={"flex"} justifyContent={"center"} alignItems={"center"} gridGap={"12px"}>
        <Box
          fontSize={"20px"}
          display={"flex"}
          alignItems={"center"}
          onClick={() => {
            navigate("/");
          }}
        >
          <Box fontSize={"28px"} display={"flex"} alignItems={"center"}>
            <LogoIcon />
          </Box>
        </Box>
        <Box
          fontSize={"20px"}
          display={["flex", "none", "none", "flex"]}
          alignItems={"center"}
          cursor={"pointer"}
          onClick={() => {
            navigate("/");
          }}
        >
          <LogoTextIcon />
        </Box>
      </Box>
      <Box overflow={"auto"}>
        <Box px={["10px", "10px", "10px", "20px"]} py={["10px", "10px", "10px", "26px"]} display={"flex"} flexDirection={"column"} fontWeight={["600"]} fontSize={["16px"]}>
          <SidebarLink
            selected={currentPath === "dashboard"}
            onClick={() => {
              navigate("dashboard");
            }}
            theme={theme}
            icon={<DashboardIcon />}
          >
            Dashboard
          </SidebarLink>
          <SidebarLink theme={theme} icon={<DropIcon />}>
            NFT Drops
          </SidebarLink>
          <SidebarLink
            selected={currentPath === "marketplace"}
            onClick={() => {
              navigate("marketplace");
            }}
            theme={theme}
            icon={<MarketIcon />}
          >
            Marketplace
          </SidebarLink>
          <SidebarLink theme={theme} icon={<RedeemIcon />}>
            Redeem
          </SidebarLink>
          <SidebarLink
            selected={currentPath === "lottery"}
            onClick={() => {
              navigate("lottery");
            }}
            theme={theme}
            icon={<LotteryIcon />}
          >
            Lottery
          </SidebarLink>
          <SidebarLink theme={theme} icon={<DefiIcon />}>
            DeFi
          </SidebarLink>
          <SidebarLink theme={theme} icon={<DaoIcon />}>
            DAO
          </SidebarLink>
        </Box>
        {/* {needFilter && (
          <Box p={"20px"} borderTop={"1px solid #333333"}>
            <Box p={"6px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Box ml={"15px"} fontWeight={["600"]} fontSize={["12px"]} lineHeight={["16px"]} color={"#777777"}>
                Filters
              </Box>
              <Box>
                <NarrowIcon dir={"up"} />
              </Box>
            </Box>
            <Collapse icon={<DashboardIcon />} title={"Price filter"} border={"none"} fSize={"16px"} actSymbol={"PlMi"} sm expanded>
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
            <Collapse icon={<DropIcon />} title={"Attributes filter"} border={"none"} fSize={"16px"} actSymbol={"PlMi"} sm></Collapse>
          </Box>
        )} */}
      </Box>
      <Box mt={"auto"} p={["0px", "0px", "0px", "20px"]} borderTop={["none", "none", "none", "1px solid #333333"]}>
        <Box bg={"darkgray"} px={["5px", "5px", "5px", "20px"]} py={["10px", "10px", "10px", "12px"]} borderWidth={"1px"} borderStyle={"solid"} borderColor={"gray"} borderRadius={"12px"} display={"flex"} flexDirection={["row", "column", "column", "row"]} justifyContent={"center"} alignItems={"center"} gridGap={"10px"}>
          <Box background={"black"} px={["10px", "10px", "10px", "18px"]} py={"9px"} borderRadius={"48px"} fontSize={"20px"} display={"flex"} cursor={"pointer"}>
            <TwitterIcon />
          </Box>
          <Box background={"black"} px={["10px", "10px", "10px", "18px"]} py={"9px"} borderRadius={"48px"} fontSize={"20px"} display={"flex"} cursor={"pointer"}>
            <MediumIcon />
          </Box>
          <Box background={"black"} px={["10px", "10px", "10px", "18px"]} py={"9px"} borderRadius={"48px"} fontSize={"20px"} display={"flex"} cursor={"pointer"}>
            <DiscordIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface SidebarLinkProps {
  [index: string]: any;
}
const SidebarLink: React.FC<SidebarLinkProps> = ({ theme, icon, children, ...props }) => {
  return (
    <SidebarLinkBase theme={theme} p={"12px"} display={"flex"} alignItems={"center"} gridGap={"12px"} {...props}>
      <Box fontSize={"20px"} display={"flex"}>
        {icon}
      </Box>
      <Box display={["flex", "none", "none", "flex"]}>{children}</Box>
    </SidebarLinkBase>
  );
};

interface SidebarLinkBaseProps {
  theme: any;
  selected?: boolean;
}
const SidebarLinkBase = styled(Link)<SidebarLinkBaseProps>`
  background-color: ${(p) => (p.selected ? p.theme.colors.lightpurple : "reverse")};
  color: ${(p) => (p.selected ? p.theme.colors.darkpurple : "reverse")};
  &:hover {
    background-color: ${(p) => p.theme.colors.lightpurple};
    color: ${(p) => p.theme.colors.darkpurple};
  }
`;

export default Sidebar;
