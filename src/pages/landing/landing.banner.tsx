import React from "react";
import { Container, ContainerFluid } from "components/base/container";
import { PlantIcon, StarIcon } from "components/icons";
import { Box, Image } from "components/base/initial";
import { ArrowBtn } from "components/elements/buttons";

interface BannerSectionProps {
  id?: string;
}
const BannerSection: React.FC<BannerSectionProps> = ({ id }) => {
  return (
    <ContainerFluid id={id} position={"relative"} py={["150px", "165px", "180px", "200px", "220px"]}>
      <Container>
        <Box display={"flex"} flexDirection={"column"} gridGap={"50px"}>
          <Box fontWeight={600} fontSize={["34px", "42px", "52px", "64px", "72px"]} lineHeight={["40px", "50px", "60px", "70px", "80px"]}>
            NXT P<StarIcon />P
            <br />
            provides multi-
            <br />
            chain experience
          </Box>
          <Box display={"flex"} alignItems={"center"} gridGap={["15px", "20px", "25px", "30px"]}>
            <Box display={"flex"} alignItems={"flex-end"}>
              <Box fontWeight={["600"]} fontSize={["32px", "38px", "48px", "56px"]} lineHeight={["38px", "48px", "56px", "64px"]}>
                8
              </Box>
              <Box pl={"10px"} py={["2px", "4px", "8px", "10px"]}>
                chains
              </Box>
            </Box>
            <Box fontSize={"20px"}>
              <PlantIcon />
            </Box>
            <Box display={"flex"} alignItems={"flex-end"}>
              <Box fontWeight={["600"]} fontSize={["32px", "38px", "48px", "56px"]} lineHeight={["38px", "48px", "56px", "64px"]}>
                4
              </Box>
              <Box pl={"10px"} py={["2px", "4px", "8px", "10px"]}>
                exclusive <br /> features
              </Box>
            </Box>
          </Box>
          <Box>
            <ArrowBtn>Learn More</ArrowBtn>
          </Box>
        </Box>
      </Container>
      <Image src={require("assets/image/landing/banner.png")} position={"absolute"} top={"50%"} right={0} width={"70%"} maxWidth={"700px"} transform={"translateY(-50%)"} zIndex={-1} />
    </ContainerFluid>
  );
};

export default BannerSection;
