import React from "react";
import styled, { useTheme } from "styled-components";
import { Box, Image } from "components/base/initial";
import { Container, ContainerFluid } from "components/base/container";
import { StarIcon } from "components/icons";

interface LaunchpadSectionProps {
  id?: string;
  wallets?: any;
}
const LaunchpadSection: React.FC<LaunchpadSectionProps> = ({ id, wallets }) => {
  const theme: any = useTheme();
  return (
    <ContainerFluid id={id}>
      <Container display={"flex"} flexDirection={["column", "column", "row"]} alignItems={["center", "center", "flex-start"]}>
        <StyledBox backColor={theme.colors ? theme.colors.gray : ""} flex={1} py={["42px", "52px", "64px", "76px"]} pr={["25px", "30px", "40px"]} borderTopRightRadius={"20px"} borderBottomRightRadius={"20px"} display={"flex"} flexDirection={"column"} gridGap={"32px"}>
          <Box fontWeight={["600"]} fontSize={["34px", "42px", "52px", "64px", "72px"]} lineHeight={["40px", "50px", "60px", "70px", "80px"]} display={"flex"} flexWrap={"wrap"}>
            <Box fontSize={"30px"} color={"yellow"} display={"flex"} alignItems={"flex-end"}>
              <StarIcon />
            </Box>
            VIP
            <Box fontSize={"30px"} color={"yellow"} display={"flex"} alignItems={"flex-start"}>
              <StarIcon />
            </Box>
            &nbsp;Launchpad
          </Box>
          <Box fontWeight={2} lineHeight={"22px"} color={"lightgray"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>
        </StyledBox>
        <Box flex={1} display={"flex"} justifyContent={["center"]}>
          <Image src={require("assets/image/landing/launchpad.png")} width={"70%"} maxWidth={"400px"} />
        </Box>
      </Container>
    </ContainerFluid>
  );
};

interface StyledBoxProps {
  backColor: any;
}
const StyledBox = styled(Box).attrs({
  position: "relative",
  bg: "gray",
})<StyledBoxProps>`
  &::before {
    content: "";
    position: absolute;
    top: 0%;
    right: 100%;
    background: ${(p) => (p.backColor ? `linear-gradient(90deg, transparent 0%, ${p.backColor} 500px, ${p.backColor})` : "reverse")};
    width: 1000px;
    height: 100%;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    right: 15px;
    background: ${(p) => (p.backColor ? `linear-gradient(90deg, transparent 0%, ${p.backColor} 500px, ${p.backColor})` : "reverse")};
    width: calc(985px + 100%);
    height: 500px;
    clip-path: polygon(0% 0%, 0% 100%, 100% 0%);
    z-index: -1;
  }
`;

export default LaunchpadSection;
