import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import { data } from "../../../Services/api";
import { Conteiner, Title } from "./style";

const renderCustomComposedChart = (
  <ComposedChart width={1000} height={400} data={data}>
    <CartesianGrid stroke="#f5f5f5" strokeDasharray={5} />
    <XAxis dataKey={"name"} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area type={"monotone"} dataKey={"amt"} fill="#6e26f5" stroke="#6e26f5" />
    <Bar type={"monotone"} dataKey={"pv"} fill="#f5dd26" stroke="#f5dd26" />
    <Line type={"monotone"} dataKey={"uv"} fill="#f5264a" stroke="#f5264a" />
  </ComposedChart>
);

export const CustomComposedChart = () => {
  return (
    <>
      <Title>Composed Charts</Title>
      <Conteiner>{renderCustomComposedChart}</Conteiner>
    </>
  );
};
