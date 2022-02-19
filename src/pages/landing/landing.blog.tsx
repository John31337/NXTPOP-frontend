import React from "react";
import { useTheme } from "styled-components";
import SectionLayout from "components/layouts/section";
import { Box, Image } from "components/base/initial";
import { ArrowBtn } from "components/elements/buttons";

interface BlogSectionProps {
  id?: string;
}
const BlogSection: React.FC<BlogSectionProps> = ({ id }) => {
  return (
    <SectionLayout
      id={id}
      position={"relative"}
      title={"Blog"}
      subTitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </>
      }
    >
      <Box position={"relative"} width={"100%"} overflow={"hidden"}>
        <Box width={"fit-content"} display={"flex"} gridGap={"20px"}>
          <Card title={"Article Name"} auther={"author"} />
          <Card title={"Article Name"} auther={"author"} />
          <Card title={"Article Name"} auther={"author"} />
          <Card title={"Article Name"} auther={"author"} />
          <Card title={"Article Name"} auther={"author"} />
        </Box>
        <Box position={"absolute"} top={"0px"} right={"0px"} background={"linear-gradient(90deg, transparent, black)"} height={"100%"} width={"10%"}></Box>
      </Box>
      <Box mt={"64px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <ArrowBtn ur>Read More</ArrowBtn>
      </Box>
    </SectionLayout>
  );
};

interface CardProps {
  [index: string]: any;
}
const Card: React.FC<CardProps> = ({ title, auther, ...props }) => {
  return (
    <Box position={"relative"} width={"265px"} height={"355px"} {...props}>
      <Image src={require("assets/image/landing/blog-card1.png")} width={"100%"} height={"100%"} />
      <Box position={"absolute"} top={0} left={0} background={"#19191966"} width={"100%"} height={"100%"} p={"20px"} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} alignItems={"flex-start"}>
        <Box fontWeight={["600"]} fontSize={["32px"]} lineHeight={["39px"]}>
          {title}
        </Box>
        <Box background={"#00000066"} p={"8px"} pr={"12px"} borderRadius={"100px"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
          <Box background={"white"} width={"28px"} height={"28px"} borderRadius={"100%"}></Box>
          {auther}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogSection;
