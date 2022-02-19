import React, { createContext, useState } from "react";

export const FrontContext = createContext<any>(null);

const FrontProvider: React.FC = ({ children }) => {
  const [needFilter, setNeedFilter] = useState(false);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  return (
    <FrontContext.Provider
      value={{
        needFilter: needFilter,
        setNeedFilter: setNeedFilter,
        visibleSidebar: visibleSidebar,
        setVisibleSidebar: setVisibleSidebar,
      }}
    >
      {children}
    </FrontContext.Provider>
  );
};

export default FrontProvider;
