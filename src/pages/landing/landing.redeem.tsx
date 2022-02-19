import React from "react";
import SectionLayout from "components/layouts/section";
import { Box, Image } from "components/base/initial";

interface RedeemSectionProps {
  id?: string;
}
const RedeemSection: React.FC<RedeemSectionProps> = ({ id }) => {
  return (
    <SectionLayout
      id={id}
      position={"relative"}
      title={"Redeem"}
      subTitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </>
      }
    >
      <Box display={"flex"} flexDirection={["column", "column", "row"]} justifyContent={"center"} alignItems={"center"} gridGap={["40px", "70px", "100px", "120px"]}>
        <Box>
          <Image src={require("assets/image/landing/redeem1.png")} width={"100%"} />
        </Box>
        <Box>
          <Image src={require("assets/image/landing/redeem2.png")} width={"100%"} />
        </Box>
      </Box>
    </SectionLayout>
  );
};

export default RedeemSection;
