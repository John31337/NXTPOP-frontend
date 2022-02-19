import { ContainerFluid } from "components/base/container";
import { Box, Image, Input, Link } from "components/base/initial";
import { LogoIcon, LogoTextIcon, StarIcon } from "components/icons";

const CsOption1Page = () => {
  return (
    <>
      <ContainerFluid minHeight={"100vh"} py={"20px"} flexDirection={"column"}>
        <Box width={"100%"} px={["24px", "32px", "40px", "48px"]} py={["16px", "20px", "24px", "28px"]} display={"flex"} alignItems={"center"} justifyContent={["center", "flex-start"]} zIndex={1}>
          <Link fontSize={"28px"} display={"flex"} gridGap={"12px"}>
            <LogoIcon />
            <LogoTextIcon />
          </Link>
        </Box>
        <Box position={"relative"} my={"auto"} textAlign={"center"} overflow={"hidden"} display={"flex"} justifyContent={"center"}>
          <Image src={require("assets/image/csoption/back1.png")} minWidth={"100%"} />
          <Box position={"absolute"} top={"0px"} left={"0px"} background={"linear-gradient(90deg, black, transparent)"} width={"30%"} height={"100%"} />
          <Box position={"absolute"} top={"0px"} right={"0px"} background={"linear-gradient(270deg, black, transparent)"} width={"30%"} height={"100%"} />
        </Box>
        <Box p={["24px", "30px", "34px", "42px", "52px"]} display={"flex"} flexDirection={["column", "column", "row"]} justifyContent={"space-around"} alignItems={["center", "center", "flex-end"]} zIndex={1}>
          <Box mt={"32px"} fontFamily={"Syne"} fontWeight={"700"} fontSize={["34px", "42px", "52px", "64px", "72px"]} lineHeight={["40px", "50px", "60px", "70px", "80px"]} letterSpacing={"-0.03em"} textAlign={["center", "center", "left"]}>
            NXT P<StarIcon />P <br />
            provides multi- <br />
            chain experience
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={["center", "center", "flex-start"]}>
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
        </Box>
      </ContainerFluid>
    </>
  );
};

export default CsOption1Page;
