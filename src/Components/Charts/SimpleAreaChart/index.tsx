import React from "react";
import {
  AreaChart,
  Area,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Conteiner, Title } from "./styles";
import { data } from "../../../Services/api";

const renderAreaChart = (
  <AreaChart width={1000} height={400} data={data}>
    <Area type="monotone" dataKey="pv" stroke="#00ffb3" fill="#00ffb3" />
    <Area type="monotone" dataKey="amt" stroke="#ff00f2" fill="#ff00f2" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5" />
    <XAxis dataKey={"name"} />
    <YAxis />
    <Tooltip />
    <Legend />
  </AreaChart>
);

export const SimpleAreaChart = () => {
  return (
    <>
      <Title>Simple Area Chart</Title>
      <Conteiner>{renderAreaChart}</Conteiner>
    </>
  );
};
