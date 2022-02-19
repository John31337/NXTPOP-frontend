import React from "react";
import ThemesProvider from "./provider.theme";
import FrontProvider from "./provider.front";

const AllProvider: React.FC = ({ children }) => {
  return (
    <ThemesProvider>
      <FrontProvider>{children}</FrontProvider>
    </ThemesProvider>
  );
};

export default AllProvider;
