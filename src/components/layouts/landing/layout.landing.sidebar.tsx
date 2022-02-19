import React from "react";
import { Box, Link } from "components/base/initial";
import { Link as ScrollLink } from "react-scroll";

interface SidebarProps {
  [index: string]: any;
}
const Sidebar: React.FC<SidebarProps> = ({ visible, setVisible }) => {
  return (
    <Box position={"fixed"} ml={visible ? "0" : "-100%"} top={0} left={0} background={"#0005"} backDrop={"blur(30px)"} width={"100%"} height={"100%"} p={"50px"} transition={"var(--transition)"} display={["flex", "flex", "flex", "none"]} flexDirection={"column"} zIndex={11}>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <Link
          onClick={() => {
            setVisible(false);
          }}
          fontSize={"50px"}
        >
          &times;
        </Link>
      </Box>
      <Box pt={"20px"} fontSize={"20px"} display={"flex"} flexDirection={"column"} gridGap={"20px"}>
        <ScrollLink
          to={"Launchpad"}
          smooth={true}
          offset={0}
          duration={200}
          onClick={() => {
            setVisible(false);
          }}
        >
          <Box whiteSpace={"nowrap"} cursor="pointer">
            Launchpad
          </Box>
        </ScrollLink>
        <ScrollLink
          to={"Marketplace"}
          smooth={true}
          offset={0}
          duration={200}
          onClick={() => {
            setVisible(false);
          }}
        >
          <Box whiteSpace={"nowrap"} cursor="pointer">
            Marketplace
          </Box>
        </ScrollLink>

        <ScrollLink
          to={"Lottery"}
          smooth={true}
          offset={0}
          duration={200}
          onClick={() => {
            setVisible(false);
          }}
        >
          <Box whiteSpace={"nowrap"} cursor="pointer">
            Lottery
          </Box>
        </ScrollLink>

        <ScrollLink
          to={"Lockingsystem"}
          smooth={true}
          offset={0}
          duration={200}
          onClick={() => {
            setVisible(false);
          }}
        >
          <Box whiteSpace={"nowrap"} cursor="pointer">
            Locking System
          </Box>
        </ScrollLink>

        <ScrollLink
          to={"Farmingsystem"}
          smooth={true}
          offset={0}
          duration={200}
          onClick={() => {
            setVisible(false);
          }}
        >
          <Box whiteSpace={"nowrap"} cursor="pointer">
            Farming System APY
          </Box>
        </ScrollLink>

        <ScrollLink
          to={"Redeem"}
          smooth={true}
          offset={0}
          duration={200}
          onClick={() => {
            setVisible(false);
          }}
        >
          <Box whiteSpace={"nowrap"} cursor="pointer">
            Redeem
          </Box>
        </ScrollLink>

        <ScrollLink
          to={"Manifesto"}
          smooth={true}
          offset={0}
          duration={200}
          onClick={() => {
            setVisible(false);
          }}
        >
          <Box whiteSpace={"nowrap"} cursor="pointer">
            Manifesto
          </Box>
        </ScrollLink>

        <ScrollLink
          to={"Roadmap"}
          smooth={true}
          offset={0}
          duration={200}
          onClick={() => {
            setVisible(false);
          }}
        >
          <Box whiteSpace={"nowrap"} cursor="pointer">
            Roadmap
          </Box>
        </ScrollLink>

        <ScrollLink
          to={"Blog"}
          smooth={true}
          offset={0}
          duration={200}
          onClick={() => {
            setVisible(false);
          }}
        >
          <Box whiteSpace={"nowrap"} cursor="pointer">
            Blog
          </Box>
        </ScrollLink>

        <ScrollLink
          to={"Partner"}
          smooth={true}
          offset={0}
          duration={200}
          onClick={() => {
            setVisible(false);
          }}
        >
          <Box whiteSpace={"nowrap"} cursor="pointer">
            Partners
          </Box>
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default Sidebar;
