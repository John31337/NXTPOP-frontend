import React from "react";
import { Box } from "components/base/initial";
import { ContainerFluid } from "components/base/container";
import Header from "./layout.main.header";
import Sidebar from "./layout.main.sidebar";

interface MainLayoutProps {}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ContainerFluid height={"100vh"}>
      <Sidebar />
      <Box width={"100%"} height={"100%"} flexGrow={1} display={"flex"} flexDirection={"column"}>
        <Header />
        {children}
      </Box>
    </ContainerFluid>
  );
};

export default MainLayout;
