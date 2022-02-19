import styled from "styled-components";
import { Box } from "./initial";

const FlexBox = styled(Box).attrs({
  px: [3],
  display: "flex",
})``;
export const ContainerFluid = styled(Box).attrs({
  width: "100%",
  display: "flex",
  justifyContent: "center",
})``;
export const Container = styled(Box).attrs({
  width: "100%",
  maxWidth: "1440px",
  px: [3],
})``;
export const ContainerMin = styled(Box).attrs({
  width: "100%",
  maxWidth: "800px",
  px: [3],
})``;
