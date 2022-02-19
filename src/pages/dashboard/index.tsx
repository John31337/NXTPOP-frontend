import React from "react";
import { Box } from "components/base/initial";
import { IconBtn, SegmentLink } from "components/elements/buttons";
import { DollarIcon, FourStarIcon, SortListIcon, StarFillIcon } from "components/icons";
import { MainNFTCard } from "components/elements/cards";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bg={"darkgray"} width={"100%"} px={"20px"} borderBottom={"1px solid #333333"} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"} gridGap={"32px"}>
          <SegmentLink
            count={12}
            selected
            onClick={() => {
              navigate("owned");
            }}
          >
            Owned
          </SegmentLink>
          <SegmentLink count={12}>On Sale</SegmentLink>
          <SegmentLink count={12}>Created</SegmentLink>
          <SegmentLink>Liked</SegmentLink>
          <SegmentLink>Activity</SegmentLink>
        </Box>
        <Box height={"100%"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
          <IconBtn before={<FourStarIcon />}>Category</IconBtn>
          <IconBtn before={<StarFillIcon />}>Sale type</IconBtn>
          <IconBtn before={<DollarIcon />}>Price range</IconBtn>
          <IconBtn before={<SortListIcon />}>Sort by</IconBtn>
        </Box>
      </Box>
      <Box flexGrow={1} p={"20px"} overflow={"auto"} display={"flex"} justifyContent={"center"} alignItems={"flex-start"} flexWrap={"wrap"} gridGap={"20px"}>
        <MainNFTCard />
        <MainNFTCard />
        <MainNFTCard />
        <MainNFTCard />
        <MainNFTCard />
        <MainNFTCard />
        <MainNFTCard />
        {Array(6)
          .fill("0")
          .map((each, index) => {
            return <Box key={index} width={"268px"} height={"0px"} />;
          })}
      </Box>
    </>
  );
};

export default DashboardPage;
