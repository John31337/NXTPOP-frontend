import React from "react";
import { Box } from "components/base/initial";
import { IconBtn, SegmentLink } from "components/elements/buttons";
import { AllTokenFillIcon, CosmosTokenFillIcon, EthTokenFillIcon, SolanaTokenFillIcon, TerraTokenFillIcon } from "components/icons";
import { TrendingCard } from "components/elements/cards";

const MarketPlacePage: React.FC = () => {
  return (
    <>
      {/* <Box bg={"darkgray"} width={"100%"} px={"20px"} borderBottom={"1px solid #333333"} display={"flex"} justifyContent={"space-between"}>
        <Box height={"100%"} display={"flex"} alignItems={"center"} gridGap={"8px"} cursor={"pointer"}>
          <Box fontSize={"24px"} display={"flex"}>
            <ArrowIcon />
          </Box>
          Back
        </Box>
        <Box display={"flex"} alignItems={"center"} gridGap={"32px"}>
          <SegmentLink>Main info</SegmentLink>
          <SegmentLink>Price history</SegmentLink>
          <SegmentLink>Offers</SegmentLink>
          <SegmentLink>Activities</SegmentLink>
          <SegmentLink>More from collection</SegmentLink>
        </Box>
      </Box> */}
      <Box bg={"darkgray"} width={"100%"} px={"20px"} borderBottom={"1px solid #333333"} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"} gridGap={"32px"}>
          <SegmentLink selected>Trending</SegmentLink>
          <SegmentLink>Art</SegmentLink>
          <SegmentLink>Collectibles</SegmentLink>
          <SegmentLink>Utility</SegmentLink>
          <SegmentLink>Metaverse</SegmentLink>
          <SegmentLink>DeFi</SegmentLink>
        </Box>
        <Box height={"100%"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
          <IconBtn before={<AllTokenFillIcon />} selected>
            All
          </IconBtn>
          <IconBtn before={<SolanaTokenFillIcon />}>Solana</IconBtn>
          <IconBtn before={<TerraTokenFillIcon />}>Terra</IconBtn>
          <IconBtn before={<CosmosTokenFillIcon />}>Cosmos</IconBtn>
          <IconBtn before={<EthTokenFillIcon />}>Ethereum</IconBtn>
        </Box>
      </Box>
      <Box flexGrow={1} p={"20px"} overflow={"auto"} display={"flex"} justifyContent={"center"} alignItems={"flex-start"} flexWrap={"wrap"} gridGap={"20px"}>
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        {Array(6)
          .fill("0")
          .map((each, index) => {
            return <Box key={index} width={"268px"} height={"0px"} />;
          })}
      </Box>
    </>
  );
};

export default MarketPlacePage;
