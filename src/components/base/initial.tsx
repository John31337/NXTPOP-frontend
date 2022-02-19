import styled from "styled-components";

import { background, BackgroundProps, border, BorderProps, color, ColorProps, compose, flexbox, FlexboxProps, grid, GridProps, layout, LayoutProps, position, PositionProps, shadow, ShadowProps, space, SpaceProps, typography, TypographyProps } from "styled-system";

export interface AllProps extends BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps {
  backDrop?: any;
  boxSizing?: any;
  transition?: any;
  transform?: any;
  cursor?: "pointer" | "reverse";
  whiteSpace?: "nowrap" | "pre" | "pre-line" | "pre-wrap" | "reverse" | "normal";
  visible?: "visible" | "hidden";
  backClip?: "text" | "reverse";
  textOverflow?: any;
  filter?: any;
  gapX?: any;
  gapY?: any;
  // [index: string]: any;
  ref?: any;
}
export const allCompose = compose(background, border, color, flexbox, grid, layout, position, shadow, space, typography);

export const Box = styled.div<AllProps>`
  ${allCompose}
  backdrop-filter: ${(p) => (p.backDrop ? p.backDrop : "reverse")};
  box-sizing: ${(p) => (p.boxSizing ? p.boxSizing : "reverse")};
  transition: ${(p) => (p.transition ? p.transition : "reverse")};
  transform: ${(p) => (p.transform ? p.transform : "reverse")};
  row-gap: ${(p) => (p.gapY ? p.gapY : "reverse")};
  column-gap: ${(p) => (p.gapX ? p.gapX : "reverse")};
  white-space: ${(p) => (p.whiteSpace ? p.whiteSpace : "reverse")};
  visibility: ${(p) => (p.visible ? p.visible : "reverse")};
  text-overflow: ${(p) => (p.textOverflow ? p.textOverflow : "reverse")};
  filter: ${(p) => (p.filter ? p.filter : "reverse")};
  -webkit-background-clip: ${(p) => (p.backClip ? p.backClip : "reverse")};
  cursor: ${(p) => (p.cursor ? p.cursor : "reverse")};
`;

interface InputProps extends AllProps {
  outline?: string;
}
export const Input = styled.input<InputProps>`
  ${allCompose}
  backdrop-filter: ${(p) => (p.backDrop ? p.backDrop : "reverse")};
  box-sizing: ${(p) => (p.boxSizing ? p.boxSizing : "reverse")};
  transition: ${(p) => (p.transition ? p.transition : "reverse")};
  transform: ${(p) => (p.transform ? p.transform : "reverse")};
  row-gap: ${(p) => (p.gapY ? p.gapY : "reverse")};
  column-gap: ${(p) => (p.gapX ? p.gapX : "reverse")};
  white-space: ${(p) => (p.whiteSpace ? p.whiteSpace : "reverse")};
  visibility: ${(p) => (p.visible ? p.visible : "reverse")};
  outline: ${(p) => (p.outline ? p.outline : "reverse")};
  cursor: ${(p) => (p.cursor ? p.cursor : "reverse")};
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

interface ImageProps extends AllProps {
  filter?: string;
  objectFit?: "contain" | "cover" | "fill" | "revert" | "scale-down" | "unset" | "initial";
}
export const Image = styled.img<ImageProps>`
  ${allCompose}
  transform: ${(p) => (p.transform ? p.transform : "reverse")};
  object-fit: ${(p) => (p.objectFit ? p.objectFit : "reverse")};
  filter: ${(p) => (p.filter ? p.filter : "reverse")};
`;

interface LinkProps extends AllProps {
  hoverBg?: string;
  hoverColor?: string;
  hoverUL?: string;
}
export const Link = styled.a<LinkProps>`
  ${allCompose}
  row-gap: ${(p) => (p.gapY ? p.gapY : "reverse")};
  column-gap: ${(p) => (p.gapX ? p.gapX : "reverse")};
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  display: inline-flex;
  &:hover {
    background: ${(p) => (p.hoverBg ? p.hoverBg : "reverse")};
    color: ${(p) => (p.hoverColor ? p.hoverColor : "reverse")};
    text-decoration: ${(p) => (p.hoverUL ? p.hoverUL : "reverse")};
  }
`;

export const HR = styled.hr<AllProps>`
  ${allCompose}
  backdrop-filter: ${(p) => (p.backDrop ? p.backDrop : "reverse")};
  box-sizing: ${(p) => (p.boxSizing ? p.boxSizing : "reverse")};
  transition: ${(p) => (p.transition ? p.transition : "reverse")};
  transform: ${(p) => (p.transform ? p.transform : "reverse")};
  row-gap: ${(p) => (p.gapY ? p.gapY : "reverse")};
  column-gap: ${(p) => (p.gapX ? p.gapX : "reverse")};
`;

export const ScrollHideContainer = styled(Box)<AllProps>`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;
