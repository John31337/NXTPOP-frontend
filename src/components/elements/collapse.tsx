import { Box } from "components/base/initial";
import { MinusIcon, NarrowIcon, PlusIcon } from "components/icons";
import { useEffect, useRef, useState } from "react";
import { CircleSmBtn } from "./buttons";

interface CollapseProps {
  bg?: string;
  expanded?: boolean;
  icon?: any;
  title?: any;
  after?: any;
  before?: any;
  fSize?: any;
  sm?: boolean;
  border?: string;
  actSymbol?: "narrow" | "PlMi";
}
export const Collapse: React.FC<CollapseProps> = ({ bg, after, before, icon, title, expanded, sm, fSize = "14px", border = "1px solid #333333", actSymbol = "narrow", children }) => {
  const [isExpanded, setIsExpanded] = useState(expanded || false);
  const [contentHeight, setContentHeight] = useState(null);
  const contentBox = useRef<any>(null);
  const resizeHandle = () => {
    setContentHeight(contentBox.current && contentBox.current.scrollHeight);
  };
  useEffect(() => {
    resizeHandle();
    window.addEventListener("resize", resizeHandle);
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);
  return (
    <>
      {before}
      <Box bg={!isExpanded ? "transparent" : bg || "darkgray"} border={border} borderRadius={sm ? "4px" : "12px"} overflow={"hidden"}>
        <Box
          px={sm ? "12px" : "16px"}
          height={sm ? "44px" : "64px"}
          display={"flex"}
          alignItems={"center"}
          gridGap={"12px"}
          cursor={"pointer"}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {icon && (
            <Box fontSize={sm ? "20px" : "24px"} display={"flex"}>
              {icon}
            </Box>
          )}
          {title && (
            <Box fontWeight={"600"} fontSize={fSize} lineHeight={"16px"} letterSpacing={"-0.04em"}>
              {title}
            </Box>
          )}
          <Box ml={"auto"}>
            {actSymbol === "narrow" ? (
              <CircleSmBtn>
                <NarrowIcon dir={!isExpanded ? "down" : "up"} />
              </CircleSmBtn>
            ) : (
              <>{isExpanded ? <MinusIcon /> : <PlusIcon />}</>
            )}
          </Box>
        </Box>
        <Box ref={contentBox} maxHeight={isExpanded ? contentHeight : "0px"} overflow={"hidden"} transition={"var(--transition)"}>
          {children}
        </Box>
      </Box>
      {after}
    </>
  );
};
