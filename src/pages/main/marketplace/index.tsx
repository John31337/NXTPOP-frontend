import React from "react";
import { Box } from "components/base/initial";
import { IconBtn, SegmentLink } from "components/elements/buttons";
import { AllTokenFillIcon, CosmosTokenFillIcon, EthTokenFillIcon, SolanaTokenFillIcon, TerraTokenFillIcon } from "components/icons";
import { TrendingCard } from "components/elements/cards";
import { Dropdown } from "components/elements/form";

const MarketPlacePage: React.FC = () => {
  const CategoryLinks = (
    <>
      <SegmentLink selected>Trending</SegmentLink>
      <SegmentLink>Art</SegmentLink>
      <SegmentLink>Collectibles</SegmentLink>
      <SegmentLink>Utility</SegmentLink>
      <SegmentLink>Metaverse</SegmentLink>
      <SegmentLink>DeFi</SegmentLink>
    </>
  );
  const FilterLinks = (
    <>
      <IconBtn before={<AllTokenFillIcon />} selected>
        All
      </IconBtn>
      <IconBtn before={<SolanaTokenFillIcon />}>Solana</IconBtn>
      <IconBtn before={<TerraTokenFillIcon />}>Terra</IconBtn>
      <IconBtn before={<CosmosTokenFillIcon />}>Cosmos</IconBtn>
      <IconBtn before={<EthTokenFillIcon />}>Ethereum</IconBtn>
    </>
  );
  return (
    <>
      <Box bg={"darkgray"} width={"100%"} px={"20px"} py={["16px", "16px", "16px", "16px", "0px"]} borderBottom={"1px solid #333333"} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"}>
          <Box display={["flex", "flex", "flex", "flex", "none"]}>
            <Dropdown text={"Category"} contentAlign={"left"}>
              {CategoryLinks}
            </Dropdown>
          </Box>
          <Box display={["none", "none", "none", "none", "flex"]} gridColumnGap={"32px"} flexWrap={"wrap"}>
            {CategoryLinks}
          </Box>
        </Box>
        <Box height={"100%"} display={"flex"} alignItems={"center"} gridColumnGap={"8px"} flexWrap={"wrap"}>
          <Box display={["flex", "flex", "flex", "flex", "none"]}>
            <Dropdown text={"TokenType"}>{FilterLinks}</Dropdown>
          </Box>
          <Box display={["none", "none", "none", "none", "flex"]} gridColumnGap={"8px"} flexWrap={"wrap"}>
            {FilterLinks}
          </Box>
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
