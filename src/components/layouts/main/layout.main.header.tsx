import React, { useContext, useState, useMemo } from "react";
import { Box } from "components/base/initial";
import { CustomInput, Dropdown, SmOption, CustomSelect } from "components/elements/form";
import { ArrowIcon, BellIcon, EmptyStarIcon, ListIcon, SearchIcon, SolanaTokenIcon, ThreeDotIcon } from "components/icons";
import { CircleBtn, CircleSmBtn } from "components/elements/buttons";
import { FrontContext } from "providers/provider.front";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { disconnect } from "process";
require('@solana/wallet-adapter-react-ui/styles.css')

const Header: React.FC = () => {
  const { visibleSidebar, setVisibleSidebar } = useContext(FrontContext);
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <Box width={"100%"} height={"mainHeader"} minHeight={"mainHeader"} px={"20px"} borderBottom={"1px solid #333333"} display={"flex"} alignItems={"center"} gridGap={"12px"}>
      <Box
        fontSize={"24px"}
        fontWeight={["600"]}
        lineHeight={["32px"]}
        display={["flex", "none"]}
        alignItems={"center"}
        cursor={"pointer"}
        onClick={() => {
          setVisibleSidebar(true);
        }}
      >
        <ListIcon />
      </Box>
      <Box fontWeight={["600"]} fontSize={["16px"]} lineHeight={["32px"]} whiteSpace={"nowrap"} display={"flex"} alignItems={"center"} cursor={"pointer"}>
        <Box fontSize={"24px"} display={"flex"}>
          <ArrowIcon dir={"left"} />
        </Box>
        Back
        <Box ml={"12px"} fontWeight={"600"} fontSize={"16px"} lineHeight={"32px"} color={"#333333"}>
          |
        </Box>
      </Box>
      <Box flexGrow={1} fontWeight={["600"]} fontSize={["20px"]} lineHeight={["24px"]} whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>
        Dashboard
      </Box>
      <Box position={"relative"} height={["auto", "auto", "auto", "auto", "100%"]} display={"flex"} alignItems={"center"}>
        <CircleSmBtn
          display={["flex", "flex", "flex", "flex", "none"]}
          onClick={() => {
            setVisibleMenu(!visibleMenu);
          }}
        >
          {!visibleMenu ? <ThreeDotIcon /> : <>&times;</>}
        </CircleSmBtn>
        <Box position={["absolute", "absolute", "absolute", "absolute", "absolute", "static"]} top={"100%"} right={"0px"} bg={"#17171750"} backDrop={"blur(25px)"} height={["auto", "auto", "auto", "auto", "10%"]} p={["10px", "10px", "10px", "10px", "unset"]} borderRadius={"10px"} border={["1px solid #222222", "1px solid #222222", "1px solid #222222", "1px solid #222222", "unset"]} display={visibleMenu ? "flex" : ["none", "none", "none", "none", "flex"]} flexDirection={["column", "column", "column", "column", "row"]} alignItems={["unset", "unset", "unset", "unset", "center"]} gridGap={"12px"} zIndex={5}>
          <Box order={[2, 2, 2, 2, 1]}>
            <CustomInput
              width={["100%", "100%", "100%", "100%", "250px"]}
              before={<SearchIcon />}
              after={
                <CustomSelect
                  sm
                  onChange={(value: any) => {
                    // console.log(value);
                  }}
                >
                  <SmOption value={"collections"}>collections</SmOption>
                  <SmOption value={"aaaa"}>aaaa</SmOption>
                  <SmOption value={"bbbb"}>bbbb</SmOption>
                  <SmOption value={"cccc"}>cccc</SmOption>
                </CustomSelect>
              }
              placeHolder="Search"
            />
          </Box>
          <Box order={2} bg={"#333333"} width={"1px"} height={"100%"} display={["none", "none", "none", "none", "block"]} />
          <Box order={[3, 3, 3, 3, 3]} display={"flex"} justifyContent={"space-around"} gridGap={"12px"}>
            <CircleBtn>
              <EmptyStarIcon />
            </CircleBtn>
            <CircleBtn>
              <BellIcon />
            </CircleBtn>
          </Box>
          <Box order={4} bg={"#333333"} width={"1px"} height={"100%"} display={["none", "none", "none", "none", "block"]} />
          <Box order={[1, 1, 1, 1, 5]} display={"flex"} gridGap={"12px"}>
            <WalletMultiButton startIcon={<SolanaTokenIcon />} style={{height: "40px", background: "darkgray"}}/>
            {/* <Dropdown icon={<SolanaTokenIcon />} text={connectedWallet ? walletPubKey : "Connect Wallet"}>
              <Box>Metamask</Box>
              <WalletMultiButton/>
              <Box onClick={connectedWallet? disconnectWallet :  connectWallet}>{connectedWallet? "Disconnect" : "Phantom"}</Box>
            </Dropdown> */}
            {/* <Dropdown text={<Box color={"yellow"}>dep2</Box>}>
              <Box>dssasdfasdf</Box>
              <Box>dssasdfasdf</Box>
              <Box>dssasdfasdf</Box>
              <Box>dssasdfasdf</Box>
            </Dropdown> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
