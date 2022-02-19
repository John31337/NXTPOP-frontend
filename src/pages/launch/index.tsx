import { ContainerFluid } from "components/base/container";
import { Box, Image, Link } from "components/base/initial";

const LaunchPage = () => {
  return (
    <>
      <ContainerFluid bg={"#010101"} position={"relative"} minHeight={"100vh"} p="20px" flexDirection={"column"}>
        <Image position={"absolute"} top={0} left={0} height={"auto"} width={"auto"} minHeight={"100%"} maxWidth={"50%"} src={require("assets/image/launch/tl.png")} objectFit={"cover"} />
        <Image position={"absolute"} top={0} right={0} height={"auto"} width={"auto"} minHeight={"100%"} maxWidth={"50%"} src={require("assets/image/launch/tr.png")} objectFit={"cover"} />
        <Box position={"absolute"} top={0} left={0} width={"100%"} p={["14px", "16px", "18px", "20px"]} display={"flex"} alignItems={"center"} justifyContent={"space-between"} zIndex={1}>
          <Box mr={["10px", "12px", "14px", "16px"]} bg={"white"} width={"56px"} height={"56px"} borderRadius={"12px"} />
          <Box mr={"auto"} fontWeight={"600"} fontSize={"16px"} lineHeight={"20px"} letterSpacing={"-0.06em"}>
            collection name
          </Box>
          <Link bg={"lightpurple"} px={["20px", "24px", "28px", "32px"]} py={["14px", "16px", "18px", "20px"]} fontWeight={"600"} fontSize={"16px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"#2B0945"} borderRadius={"100px"}>
            Connect wallet
          </Link>
        </Box>
        <Box m={"auto"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gridGap={"32px"} zIndex={1}>
          <Box fontWeight={"500"} fontSize={["36px", "40px", "44px", "48px"]} lineHeight={["40px", "44px", "48px", "56px"]} textAlign={"center"} letterSpacing={"-0.08em"}>
            Collection Launch #0
            <br />
            Announcement on V1
          </Box>
          <Box maxWidth={"380px"} fontWeight={"600"} fontSize={"14px"} lineHeight={"16px"} textAlign={"center"} letterSpacing={"-0.04em"} color={"#777777"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Box>
        </Box>
      </ContainerFluid>
      <ContainerFluid position={"relative"} bg={"#010101"} minHeight={"100vh"} py={"40px"} flexDirection={"column"}>
        <Box display={"flex"} flexDirection={"column"} gridGap={"24px"}>
          <Box m={"auto"} px={["20px", "40px", "60px", "80px"]} display={"flex"} flexDirection={"column"} gridGap={"24px"}>
            <Box fontWeight={"500"} fontSize={["36px", "40px", "44px", "48px"]} lineHeight={["40px", "44px", "48px", "56px"]} letterSpacing={"-0.08em"}>
              A pack of unique generative 10.000 collectible NFT cards with randomly generated set of attributes.
            </Box>
            <Box maxWidth={"380px"} fontWeight={"600"} fontSize={"40px"} lineHeight={"48px"} letterSpacing={"-0.04em"} color={"#777777"}>
              Buy them now:
            </Box>
            <Box display={"flex"} justifyContent={"center"} gridColumnGap={"32px"} gridRowGap={"16px"} flexWrap={"wrap"}>
              <Box position={"relative"} bg={"white"} px={"82px"} py={"28px"} borderRadius={"12px"} fontWeight={"600"} fontSize={"16px"} lineHeight={"16px"} color={"black"}>
                <Box position={"absolute"} top={"0px"} left={"50%"} bg={"lightpurple"} px={"10px"} py={"8px"} borderRadius={"8px"} fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} textAlign={"center"} letterSpacing={"-0.02em"} transform={"translate(-50%, -50%)"}>
                  Most Popular
                </Box>
                Get from OpenSea
              </Box>
              <Box position={"relative"} border={"1px solid #333333"} bg={"darkgray"} px={"82px"} py={"28px"} borderRadius={"12px"} fontWeight={"600"} fontSize={"16px"} lineHeight={"16px"} color={"white"}>
                Get from OpenSea
              </Box>
              <Box position={"relative"} border={"1px solid #333333"} bg={"darkgray"} px={"82px"} py={"28px"} borderRadius={"12px"} fontWeight={"600"} fontSize={"16px"} lineHeight={"16px"} color={"white"}>
                Get from OpenSea
              </Box>
              <Box position={"relative"} border={"1px solid #333333"} bg={"darkgray"} px={"82px"} py={"28px"} borderRadius={"12px"} fontWeight={"600"} fontSize={"16px"} lineHeight={"16px"} color={"white"}>
                Get from OpenSea
              </Box>
            </Box>
          </Box>
          <Image src={require("assets/image/launch/cardGrp.png")} width={"100%"} />
        </Box>
      </ContainerFluid>
      <ContainerFluid position={"relative"} bg={"#010101"} minHeight={"100vh"} p={["20px", "40px", "60px", "80px"]} alignItems={"center"} flexWrap={"wrap"}>
        <Box flex={1} minWidth={"300px"}>
          <Box fontWeight={"500"} fontSize={["36px", "40px", "44px", "48px"]} lineHeight={["40px", "44px", "48px", "56px"]} letterSpacing={"-0.08em"}>
            About the <br />
            NFT collection
          </Box>
          <Box mt={"32px"} fontWeight={"600"} fontSize={"14px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"#777777"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Box>
        </Box>
        <Box flex={1} minWidth={"300px"}>
          <Image src={require("assets/image/launch/threeCards.png")} width={"100%"} />
        </Box>
      </ContainerFluid>
      <ContainerFluid position={"relative"} bg={"#010101"} minHeight={"100vh"} px={["20px", "40px", "60px", "80px"]} py={["20px", "40px", "40px"]} flexDirection={"column"}>
        <Box display={"flex"} justifyContent={"flex-start"} gridColumnGap={["24px", "32px", "40px", "48px"]} gridRowGap={["12px", "16px", "20px", "24px"]} flexWrap={"wrap"}>
          <Box height={["50px", "60px", "70px", "80px"]} borderBottom={"2px solid #AEB1FF"} fontWeight={"500"} fontSize={["36px", "40px", "44px", "48px"]} lineHeight={["40px", "44px", "48px", "56px"]} letterSpacing={"-0.08em"} display={"flex"} alignItems={"center"} cursor={"pointer"}>
            Types
          </Box>
          <Box height={["50px", "60px", "70px", "80px"]} fontWeight={"500"} fontSize={["20px", "24px", "28px", "32px"]} letterSpacing={"-0.08em"} color={"#777777"} display={"flex"} alignItems={"center"} cursor={"pointer"}>
            Background
          </Box>
          <Box height={["50px", "60px", "70px", "80px"]} fontWeight={"500"} fontSize={["20px", "24px", "28px", "32px"]} letterSpacing={"-0.08em"} color={"#777777"} display={"flex"} alignItems={"center"} cursor={"pointer"}>
            Hats
          </Box>
          <Box height={["50px", "60px", "70px", "80px"]} fontWeight={"500"} fontSize={["20px", "24px", "28px", "32px"]} letterSpacing={"-0.08em"} color={"#777777"} display={"flex"} alignItems={"center"} cursor={"pointer"}>
            Eyes
          </Box>
          <Box height={["50px", "60px", "70px", "80px"]} fontWeight={"500"} fontSize={["20px", "24px", "28px", "32px"]} letterSpacing={"-0.08em"} color={"#777777"} display={"flex"} alignItems={"center"} cursor={"pointer"}>
            Cloth
          </Box>
          <Box height={["50px", "60px", "70px", "80px"]} fontWeight={"500"} fontSize={["20px", "24px", "28px", "32px"]} letterSpacing={"-0.08em"} color={"#777777"} display={"flex"} alignItems={"center"} cursor={"pointer"}>
            Feet
          </Box>
        </Box>
        <Box m={"auto"} mt={"40px"} display={"flex"} justifyContent={"center"} gridGap={"48px"} flexWrap={"wrap"}>
          {Array(8)
            .fill(0)
            .map((each, index) => {
              return (
                <Box key={index} position={"relative"}>
                  <Image src={require("assets/image/launch/card.png")} />
                  <Box position={"absolute"} bottom={"12px"} left={0} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"} gridGap={"8px"}>
                    <Box fontWeight={"600"} fontSize={"18px"} lineHeight={"20px"}>
                      Type1
                    </Box>
                    <Box fontWeight={"600"} fontSize={"14px"} lineHeight={"16px"} color={"lightpurple"}>
                      0.01%
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </ContainerFluid>
      <ContainerFluid bg={"#010101"} background={`url(${require("assets/image/launch/last.png")})`} position={"relative"} minHeight={"100vh"} p="20px" flexDirection={"column"}>
        <Box m={"auto"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gridGap={"32px"} zIndex={1}>
          <Box fontWeight={"500"} fontSize={["36px", "40px", "44px", "48px"]} lineHeight={["40px", "44px", "48px", "56px"]} textAlign={"center"} letterSpacing={"-0.08em"}>
            Announcement on V1
          </Box>
          <Box maxWidth={"380px"} fontWeight={"600"} fontSize={"14px"} lineHeight={"16px"} textAlign={"center"} letterSpacing={"-0.04em"} color={"#777777"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Box>
          <Link mt={"56px"} bg={"lightpurple"} px={"32px"} py={"20px"} fontWeight={"600"} fontSize={"16px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"#2B0945"} borderRadius={"100px"}>
            Connect wallet
          </Link>
        </Box>
      </ContainerFluid>
    </>
  );
};

export default LaunchPage;
