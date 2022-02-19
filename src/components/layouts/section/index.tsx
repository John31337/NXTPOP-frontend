import React from "react";
import { Container, ContainerFluid } from "components/base/container";
import { Box } from "components/base/initial";

interface SectionLayoutProps {
  [index: string]: any;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ title, subTitle, children, ...props }) => {
  return (
    <ContainerFluid py={["80px","100px","120px","140px"]} {...props}>
      <Container display={"flex"} flexDirection={"column"}>
        <Box fontWeight={["600"]} fontSize={["34px", "42px", "52px", "64px", "72px"]} lineHeight={["40px", "50px", "60px", "70px", "80px"]} textAlign={"center"}>
          {title}
        </Box>
        <Box mt={"32px"} mb={"48px"} fontWeight={["600"]} fontSize={["16px"]} lineHeight={["22px"]} color={"lightgray"} textAlign={"center"}>
          {subTitle}
        </Box>
        {children}
      </Container>
    </ContainerFluid>
  );
};

export default SectionLayout;
