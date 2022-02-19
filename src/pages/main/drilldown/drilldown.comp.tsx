import { useState, useEffect, useRef } from "react";
import { Box, Link } from "components/base/initial";

interface ReadMoreProps {
  [index: string]: any;
}
export const ReadMore: React.FC<ReadMoreProps> = ({ miniH = "52px", children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
    <Box>
      <Box position={"relative"} color={"#777777"} maxWidth={"330px"} maxHeight={isExpanded ? contentHeight : miniH} overflow={"hidden"} ref={contentBox} transition={"var(--transition)"}>
        {children}
        <Box position={"absolute"} top={isExpanded ? contentHeight : miniH} background={"linear-gradient(transparent, #171717)"} width={"100%"} height={"38px"} transform={"translateY(-95%)"} opacity={isExpanded ? 0 : 1} transition={"var(--transition)"} />
      </Box>
      <Box>
        <Link
          mt={"5px"}
          bg={"rgba(174, 177, 255, 0.1)"}
          px={"20px"}
          py={"8px"}
          borderRadius={"8px"}
          fontWeight={"600"}
          fontSize={"14px"}
          lineHeight={"16px"}
          letterSpacing={"-0.04em"}
          color={"#AEB1FF"}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Less" : "Read more"}
        </Link>
      </Box>
    </Box>
  );
};
