import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Conteiner, Title } from "./styles";
import { data } from "../../../Services/api";

//example data

const renderLineChart = (
  <LineChart width={1000} height={400} data={data}>
    <Line dataKey="pv" stroke="#ff004c" />
    <Line dataKey="uv" stroke="#ff6f00" />
    <Line dataKey="amt" stroke="#62ff00" />
    <CartesianGrid stroke="#ccc" strokeDasharray={"3 3"} />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
  </LineChart>
);

export const SimpleLineChart = () => {
  return (
    <>
      <Title>Simple Line Chart</Title>

      <Conteiner>{renderLineChart}</Conteiner>
    </>
  );
};
