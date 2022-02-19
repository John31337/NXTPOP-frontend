import React from "react";
import SectionLayout from "components/layouts/section";
import { Box, Image } from "components/base/initial";

interface LotterySectionProps {
  id?: string;
}
const LotterySection: React.FC<LotterySectionProps> = ({ id }) => {
  return (
    <SectionLayout
      id={id}
      position={"relative"}
      title={"Lottery"}
      subTitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </>
      }
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Image src={require("assets/image/landing/lottery-cards.png")} width={"90%"} maxWidth={"850px"} />
      </Box>
      <Image src={require("assets/image/landing/lottery-back.png")} position={"absolute"} top={0} right={0} zIndex={-1} width={"60%"} maxWidth={"600px"} />
      <Image src={require("assets/image/landing/lottery-back.png")} position={"absolute"} bottom={0} left={0} zIndex={-1} width={"60%"} maxWidth={"600px"} transform={"scalex(-1) scaley(-1)"} />
    </SectionLayout>
  );
};

export default LotterySection;
