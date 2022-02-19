import React from "react";
import styled from "styled-components";
import { Box, Link } from "components/base/initial";
import { ArrowRBIcon } from "components/icons";

interface ArrowBtn {
  [index: string]: any;
}
export const ArrowBtn: React.FC<ArrowBtn> = ({ ur, dr, ul, dl, children, ...props }) => {
  return (
    <ArrowBtnBase {...props}>
      {((!ul && !dl) || ur || dr) && children}
      <Box transform={ur ? "scaleY(-1)" : dr ? "scaleY(1)" : ul ? "scaleX(-1) scaleY(-1)" : dl ? "scaleX(-1) scaleY(1)" : ""}>
        <ArrowRBIcon />
      </Box>
      {(ul || dl) && children}
    </ArrowBtnBase>
  );
};
const ArrowBtnBase = styled(Link).attrs({
  bg: "yellow",
  px: ["40px", "60px", "84px"],
  py: ["16px", "18px", "20px"],
  fontWeight: "600",
  fontSize: ["16px", "18px", "20px"],
  lineHeight: ["20px", "22px", "24px"],
  borderRadius: "12px",
  color: "black",
  display: "inline-flex",
  alignItems: "center",
  gridGap: "10px",
})``;

export const CircleBtn = styled(Link)`
  background: #222222;
  width: 40px;
  height: 40px;
  border: 1px solid #333333;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
`;
export const CircleSmBtn = styled(Link)`
  background: rgba(50, 50, 50, 0.5);
  width: 32px;
  height: 32px;
  border: 1px solid #333333;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
`;
CircleBtn.defaultProps = {
  display: "flex",
};
CircleSmBtn.defaultProps = {
  display: "flex",
};

interface IconBtnProps {
  before?: any;
  after?: any;
  selected?: boolean;
  onClick?: any;
}
export const IconBtn: React.FC<IconBtnProps> = ({ before, after, children, selected, ...props }) => {
  return (
    <Box bg={selected ? "#333333" : "black"} height={"40px"} px={"10px"} border={"1px solid #333333"} borderRadius={"8px"} fontWeight={["600"]} fontSize={["14px"]} lineHeight={["16px"]} display={"flex"} alignItems={"center"} gridGap={"8px"} cursor={"pointer"} whiteSpace={"nowrap"} {...props}>
      {before && <Box fontSize={"24px"}>{before}</Box>}
      {children}
      {after && <Box fontSize={"24px"}>{after}</Box>}
    </Box>
  );
};

// main

interface SegmentLinkProps {
  count?: number;
  selected?: boolean;
  onClick?: any;
}
export const SegmentLink: React.FC<SegmentLinkProps> = ({ count, children, ...props }) => {
  return (
    <SegmentLinkBase height={"56px"} fontSize={["16px"]} lineHeight={["32px"]} {...props}>
      {children}
      {count && (
        <Box bg={"#333333"} px={"10px"} py={"6px"} fontWeight={["600"]} fontSize={["18px"]} lineHeight={["20px"]} borderRadius={"100px"}>
          {count}
        </Box>
      )}
    </SegmentLinkBase>
  );
};
interface SegmentLinkBaseProps extends SegmentLinkProps {}
const SegmentLinkBase = styled(Box).attrs({
  borderTop: "2px solid transparent",
  borderBottomWidth: "2px",
  borderBottomStyle: "solid",
  borderBottomColor: "transparent",
  fontWeight: ["600"],
  display: "flex",
  alignItems: "center",
  gridGap: "8px",
  whiteSpace: "nowrap",
  cursor: "pointer",
})<SegmentLinkBaseProps>`
  border-bottom-color: ${(p) => (p.selected ? "#aeb1ff" : "reverse")};
  color: ${(p) => (p.selected ? "#aeb1ff" : "reverse")};
  > div {
    background: ${(p) => (p.selected ? "#aeb1ff" : "reverse")};
    color: ${(p) => (p.selected ? "#2b0945" : "reverse")};
  }
  &:hover {
    border-bottom-color: #aeb1ff;
    color: #aeb1ff;
    > div {
      background: #aeb1ff;
      color: #2b0945;
    }
  }
`;
export const SegmentSmLink: React.FC<SegmentLinkProps> = ({ count, children, ...props }) => {
  return (
    <SegmentLinkBase height={"36px"} fontSize={["12px"]} lineHeight={["16px"]} {...props}>
      {children}
      {count && (
        <Box bg={"#333333"} px={"10px"} py={"6px"} fontWeight={["600"]} fontSize={["18px"]} lineHeight={["20px"]} borderRadius={"100px"}>
          {count}
        </Box>
      )}
    </SegmentLinkBase>
  );
};

interface NormalBtnProps {
  outline?: boolean;
  onClick?: any;
}
export const NormalBtn: React.FC<NormalBtnProps> = ({ outline, children, ...props }) => {
  return (
    <Box padding={"20px 32px"} bg={outline ? "black" : "lightpurple"} border={"1px solid #AEB1FF"} borderRadius={"8px"} fontWeight={"600"} fontSize={"16px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={outline ? "lightpurple" : "darkpurple"} cursor={"pointer"} textAlign={"center"} whiteSpace={"nowrap"} {...props}>
      {children}
    </Box>
  );
};
