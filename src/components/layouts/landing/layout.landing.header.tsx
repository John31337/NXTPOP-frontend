import React from "react";
import { Box, Image, Link, ScrollHideContainer } from "components/base/initial";
import { Container, ContainerFluid } from "components/base/container";
import { ListIcon } from "components/icons";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  [index: string]: any;
}
const Header: React.FC<HeaderProps> = ({ sidebarVisible, setSidebarVisible }) => {
  const navigate = useNavigate();
  return (
    <ContainerFluid bg={"#0004"} position={"fixed"} backDrop={"blur(20px)"} py={"42px"} zIndex={10}>
      <Container width={"100%"} display={"flex"} alignItems={"center"} gridGap={"52px"}>
        <Box display={"flex"} alignItems={"center"} mr={"auto"}>
          <ScrollLink to={"Banner"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              <Image src={require("assets/logo/logo.png")} />
            </Box>
          </ScrollLink>
        </Box>
        <ScrollHideContainer display={["none", "none", "none", "flex"]} gridGap={"32px"}>
          <Box
            whiteSpace={"nowrap"}
            cursor="pointer"
            onClick={() => {
              navigate("main/dashboard");
            }}
            color={"red"}
          >
            LAUNCH APP
          </Box>
          <ScrollLink to={"Launchpad"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              Launchpad
            </Box>
          </ScrollLink>
          <ScrollLink to={"Marketplace"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              Marketplace
            </Box>
          </ScrollLink>
          <ScrollLink to={"Lottery"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              Lottery
            </Box>
          </ScrollLink>
          <ScrollLink to={"Lockingsystem"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              Locking System
            </Box>
          </ScrollLink>
          <ScrollLink to={"Farmingsystem"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              Farming System APY
            </Box>
          </ScrollLink>
          <ScrollLink to={"Redeem"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              Redeem
            </Box>
          </ScrollLink>
          <ScrollLink to={"Manifesto"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              Manifesto
            </Box>
          </ScrollLink>
          <ScrollLink to={"Roadmap"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              Roadmap
            </Box>
          </ScrollLink>
          <ScrollLink to={"Blog"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              Blog
            </Box>
          </ScrollLink>
          <ScrollLink to={"Partner"} smooth={true} offset={0} duration={200}>
            <Box whiteSpace={"nowrap"} cursor="pointer">
              Partners
            </Box>
          </ScrollLink>
        </ScrollHideContainer>
        <Link
          fontSize={"30px"}
          display={["flex", "flex", "flex", "none"]}
          alignItems={"center"}
          onClick={() => {
            setSidebarVisible(true);
          }}
        >
          <ListIcon />
        </Link>
      </Container>
    </ContainerFluid>
  );
};

export default Header;
