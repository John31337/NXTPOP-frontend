import { useEffect, useRef, useState } from "react";
import { Box, Input } from "components/base/initial";
import { NarrowIcon } from "components/icons";
import { NormalBtn } from "components/elements/buttons";
import styled from "styled-components";
import { stringify } from "querystring";

interface DropdownProps {
  text?: any;
  icon?: any;
  contentAlign?: "right" | "left";
  [index: string]: any;
}
export const Dropdown: React.FC<DropdownProps> = ({ text, icon, contentAlign = "right", children, props }) => {
  const [isOpened, setIsOpened] = useState(false);
  const dropBox = useRef<any>();
  const dropPannel = useRef<any>();
  useEffect(() => {
    const handle = (event: any) => {
      if (dropBox?.current && !dropBox.current.contains(event.target)) {
        setIsOpened(false);
      }
    };
    window.addEventListener("click", handle);
    return () => {
      window.removeEventListener("click", handle);
    };
  }, []);
  return (
    <Box position={"relative"} display={"inline-block"} ref={dropBox} {...props}>
      <Box
        bg={"darkgray"}
        height={"40px"}
        px={"10px"}
        border={"1px solid #333333"}
        borderRadius={"8px"}
        fontWeight={["500"]}
        fontSize={["14px"]}
        lineHeight={["16px"]}
        cursor="pointer"
        display={"flex"}
        alignItems={"center"}
        gridGap={"12px"}
        flexWrap={"nowrap"}
        whiteSpace={"nowrap"}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        {icon}
        {text || "???"}
        <NarrowIcon dir={isOpened ? "up" : "down"} />
      </Box>
      <Box visible={isOpened ? "visible" : "hidden"} opacity={isOpened ? "1" : "0"} position={"absolute"} top={"110%"} right={contentAlign === "right" ? "0px" : "auto"} left={contentAlign === "left" ? "0px" : "auto"} px={"22px"} py={"12px"} bg={"darkgray"} border={"1px solid #333333"} borderRadius={"8px"} ref={dropPannel} display={"flex"} flexDirection={"column"} transition={"var(--transition)"} zIndex={3}>
        {Array.isArray(children)
          ? children?.map((each, index) => {
              return (
                <DropdownItem
                  key={index}
                  onClick={() => {
                    setIsOpened(false);
                  }}
                  cursor={"pointer"}
                  whiteSpace={"nowrap"}
                >
                  {each}
                </DropdownItem>
              );
            })
          : children}
      </Box>
    </Box>
  );
};
const DropdownItem = styled(Box)`
  & > * {
    padding: 5px;
  }
  & > *:hover {
    background: #8888;
  }
`;

interface MiniSelectProps {
  onChange?: any;
  sm?: boolean;
  bg?: any;
  width?: any;
  after?: any;
  before?: any;
  [index: string]: any;
}
export const CustomSelect: React.FC<MiniSelectProps> = ({ after, before, onChange, bg, width, sm, children, ...props }) => {
  const [currentOption, setCurrentOption] = useState<any>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [optionList, setOptionList] = useState<any>(null);
  const dropBox = useRef<any>();
  const dropPannel = useRef<any>();
  useEffect(() => {
    const handle = (event: any) => {
      if (dropBox?.current && !dropBox.current.contains(event.target)) {
        setIsOpened(false);
      }
    };
    window.addEventListener("click", handle);
    return () => {
      window.removeEventListener("click", handle);
    };
  }, []);
  useEffect(() => {
    const list: any = [];
    if (!Array.isArray(children)) {
      setOptionList(list);
      return;
    }
    children?.map((each, index) => {
      if (each.props.customTagType !== "--411customisedOption--") {
        return null;
      }
      const value = each.props.value;
      const text = each.props.children;
      const selected = each.props.selected;
      list.push({
        value: value,
        text: text,
        selected: selected,
      });
      return {
        value: value,
        text: text,
        selected: selected,
      };
    });
    list.map((each: any, index: any) => {
      if (each.selected || index === 0) {
        setCurrentOption(each);
      }
    });
    setOptionList(list);
  }, [children]);
  return (
    <Box width={width || "reverse"} position={"relative"} display={"inline-block"} ref={dropBox} {...props}>
      {sm ? (
        <Box
          bg={bg || "black"}
          height={"24px"}
          px={"10px"}
          borderRadius={"6px"}
          fontWeight={["500"]}
          fontSize={["14px"]}
          lineHeight={["16px"]}
          cursor="pointer"
          display={"flex"}
          alignItems={"center"}
          flexWrap={"nowrap"}
          whiteSpace={"nowrap"}
          boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.25)"}
          gridGap={"4px"}
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        >
          {before}
          {currentOption?.text}
          <Box ml={"auto"} display={"flex"} alignItems={"center"}>
            <NarrowIcon dir={isOpened ? "up" : "down"} />
          </Box>
          {after}
        </Box>
      ) : (
        <Box
          bg={bg || "black"}
          height={"40px"}
          px={"8px"}
          borderRadius={"8px"}
          whiteSpace={"nowrap"}
          border={"1px solid #333333"}
          fontWeight={["500"]}
          fontSize={["14px"]}
          lineHeight={["16px"]}
          cursor="pointer"
          display={"flex"}
          alignItems={"center"}
          flexWrap={"nowrap"}
          gridGap={"8px"}
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        >
          {before}
          {currentOption?.text}
          <Box ml={"auto"} display={"flex"} alignItems={"center"}>
            <NarrowIcon dir={isOpened ? "up" : "down"} />
          </Box>
          {after}
        </Box>
      )}
      <Box visible={isOpened ? "visible" : "hidden"} opacity={isOpened ? "1" : "0"} position={"absolute"} top={"110%"} right={"0px"} px={"22px"} py={"12px"} bg={"darkgray"} border={"1px solid #333333"} borderRadius={"8px"} ref={dropPannel} display={"flex"} flexDirection={"column"} transition={"var(--transition)"} zIndex={3}>
        {optionList
          ? optionList.map((each: any, index: any) => {
              return (
                <SmOption
                  key={index}
                  onClick={() => {
                    setIsOpened(false);
                    if (currentOption.value === each.value) return;
                    setCurrentOption(each);
                    onChange && onChange(each.value);
                  }}
                >
                  {each.text}
                </SmOption>
              );
            })
          : "Here is not any options."}
      </Box>
    </Box>
  );
};

interface SmOptionProps {
  value: any;
  [index: string]: any;
}
export const SmOption = styled.div<SmOptionProps>`
  padding: 5px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background: #8888;
  }
`;
SmOption.defaultProps = {
  customTagType: "--411customisedOption--",
};

interface CustomInputProps {
  bg?: any;
  width?: any;
  before?: any;
  after?: any;
  placeHolder?: string;
  onChange?: any;
  value?: any;
  type?: string;
}
export const CustomInput: React.FC<CustomInputProps> = ({ type = "text", placeHolder = "", bg, width, onChange, value, before, after, ...props }) => {
  const [currentValue, setCurrentValue] = useState<any>(value || "");
  useEffect(() => {
    onChange && onChange(currentValue);
  }, [currentValue]);
  return (
    <Box bg={bg || "#222222"} width={width || "reverse"} height={"40px"} px={"8px"} border={"1px solid #333333"} borderRadius={"8px"} display={"flex"} alignItems={"center"} gridGap={"8px"}>
      {before}
      <Input
        value={currentValue}
        flexGrow={1}
        width={"0px"}
        type={type}
        placeholder={placeHolder}
        bg={"transparent"}
        border={"none"}
        outline={"none"}
        color={"white"}
        fontWeight={"500"}
        fontSize={"14px"}
        lineHeight={"16px"}
        onChange={(e) => {
          setCurrentValue(e.target.value);
        }}
      />
      {after}
    </Box>
  );
};
