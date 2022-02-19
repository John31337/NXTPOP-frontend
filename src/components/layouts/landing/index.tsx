import React, { useState } from "react";
import Header from "./layout.landing.header";
import Sidebar from "./layout.landing.sidebar";

const LandingLayout: React.FC = ({ children }) => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  return (
    <>
      <Sidebar visible={sidebarVisibility} setVisible={setSidebarVisibility} />
      <Header sidebarVisible={sidebarVisibility} setSidebarVisible={setSidebarVisibility} />
      {children}
    </>
  );
};

export default LandingLayout;
