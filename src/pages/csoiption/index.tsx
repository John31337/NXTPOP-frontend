import { ContainerFluid } from "components/base/container";
import { Box, Image, Input, Link } from "components/base/initial";
import { LogoIcon, LogoTextIcon, StarIcon } from "components/icons";

const CsOptionPage = () => {
  return (
    <>
      <ContainerFluid background={`url(${require("assets/image/csoption/back.png")})`} backgroundSize={"cover"} backgroundPosition={"right top"} minHeight={"100vh"} p={"20px"} flexDirection={"column"}>
        <Box width={"100%"} px={["24px", "32px", "40px", "48px"]} py={["34px", "42px", "52px", "64px", "72px"]} display={"flex"} alignItems={"center"} justifyContent={["center", "flex-start"]} zIndex={1}>
          <Link fontSize={"28px"} display={"flex"} gridGap={"12px"}>
            <LogoIcon />
            <LogoTextIcon />
          </Link>
        </Box>
        <Box mt={"auto"} p={["34px", "42px", "52px", "64px", "72px"]} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} alignItems={["center", "flex-start"]} zIndex={1}>
          <Box mt={"32px"} fontWeight={"bold"} fontSize={["34px", "42px", "52px", "64px", "72px"]} lineHeight={["40px", "50px", "60px", "70px", "80px"]} letterSpacing={"-0.03em"} textAlign={["center", "left"]}>
            NXT P<StarIcon />P <br />
            provides multi- <br />
            chain experience
          </Box>
          <Box mt={["20px", "24px", "28px", "32px"]} maxWidth={"380px"} fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"#777777"} textAlign={["center", "left"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Box>
          <Box mt={["24px", "28px", "32px", "56px"]} display={"flex"} justifyContent={["center", "flex-start"]} gridGap={"12px"} flexWrap={"wrap"}>
            <Input bg={"#212121"} width={"320px"} p={["10px", "14px", "18px", "22px"]} fontWeight={"bold"} border={"none"} outline={"none"} fontSize={"16px"} lineHeight={"20px"} color={"white"} placeholder="Enter your email" />
            <Box bg={"lightpurple"} maxWidth={"320px"} width={["100%", "auto"]} px={["24px", "32px", "40px", "48px"]} py={["10px", "14px", "18px", "22px"]} fontWeight={"bold"} border={"none"} fontSize={"16px"} lineHeight={"20px"} cursor={"pointer"}>
              Subscribe
            </Box>
          </Box>
        </Box>
      </ContainerFluid>
    </>
  );
};

export default CsOptionPage;
