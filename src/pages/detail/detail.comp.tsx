import { allCompose, AllProps, Box } from "components/base/initial";
import { NormalBtn } from "components/elements/buttons";
import { CustomInput } from "components/elements/form";
import { DoubleNarrowIcon, NarrowIcon } from "components/icons";
import { YAxis, XAxis, ResponsiveContainer, CartesianGrid, Tooltip, LineChart, Legend, Line } from "recharts";
import styled from "styled-components";

export const CustomChart = () => {
  const data = [
    {
      name: "Jan 1",
      uv: 4000,
      amt: 2400,
    },
    {
      name: "Jan 2",
      uv: 3000,
      amt: 2210,
    },
    {
      name: "Jan 3",
      uv: 2000,
      amt: 2290,
    },
    {
      name: "Jan 4",
      uv: 2780,
      amt: 2000,
    },
    {
      name: "Jan 5",
      uv: 1890,
      amt: 2181,
    },
    {
      name: "Jan 6",
      uv: 2390,
      amt: 2500,
    },
    {
      name: "Jan 7",
      uv: 3490,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width={"100%"} height={200}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeWidth={"2px"} stroke="#333333" strokeDasharray="0 0" />
        <XAxis stroke="#777777" dataKey="name" tick={{ fontSize: "11px" }} />
        <YAxis stroke="#777777" tick={{ fontSize: "11px" }} />
        <Tooltip />
        <Line type={"linear"} dataKey="uv" stroke="#AEB1FF" dot={false} strokeWidth={"1px"} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const CustomTable = styled.table<AllProps>`
  ${allCompose}
  border-collapse: collapse;
  width: 100%;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  thead {
    background: #333333;
    text-align: left;
    color: #777777;
  }
  tr {
    border-top: 1px solid #333333;
  }
  th {
    padding: 0px 16px;
    padding-top: 16px;
    padding-bottom: 10px;
  }
  td {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    padding: 12px 16px;
  }
`;
export const CustomTd = styled.td<AllProps>`
  ${allCompose}
`;

export const PaginationCtrl = () => {
  return (
    <Box py={"4px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      <Box display={"flex"} alignItems={"center"}>
        Page {1} of {2} | Go to page :&nbsp;
        <CustomInput type={"number"} width={"100px"} />
      </Box>
      <Box display={"flex"} alignItems={"center"} gridGap={"16px"}>
        <Box display={"flex"} alignItems={"center"} gridGap={"4px"}>
          <PagiBtn disabled>
            <NarrowIcon dir={"left"} />
          </PagiBtn>
          <PagiBtn disabled>
            <DoubleNarrowIcon dir={"left"} />
          </PagiBtn>
        </Box>
        <Box display={"flex"} alignItems={"center"} gridGap={"4px"}>
          <PagiBtn selected>1</PagiBtn>
          <PagiBtn pageNum>2</PagiBtn>
        </Box>
        <Box display={"flex"} alignItems={"center"} gridGap={"4px"}>
          <PagiBtn>
            <DoubleNarrowIcon dir={"right"} />
          </PagiBtn>
          <PagiBtn>
            <NarrowIcon dir={"right"} />
          </PagiBtn>
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        Items per page :&nbsp;
        <CustomInput
          type={"number"}
          width={"100px"}
          after={
            <Box bg={"lightpurple"} px={"3px"} pt={"1.5px"} pb={"2.5px"} borderRadius={"100px"} fontWeight="600" fontSize="9px" lineHeight={"8px"} color={"darkpurple"} display={"flex"} justifyContent={"center"} alignItems={"center"} whiteSpace={"nowrap"}>
              max
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
interface PagiBtnProps {
  selected?: boolean;
  pageNum?: boolean;
}
const PagiBtn = styled.button<PagiBtnProps>`
  background: ${(p) => (p.selected ? "#AEB1FF" : p.pageNum ? "#222222" : "transparent")};
  padding: 12px 24px;
  border: none;
  border: 1px solid #222222;
  border-color: ${(p) => (p.selected ? "#AEB1FF" : "#333333")};
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: white;
  cursor: pointer;
  &:disabled {
    background: transparent !important;
    color: #777777 !important;
    cursor: no-drop;
  }
  &:hover {
    background: #aeb1ff;
  }
`;
