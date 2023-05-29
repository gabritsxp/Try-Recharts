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
    <Line dataKey="pv" stroke="purple" />
    <Line dataKey="uv" stroke="blue" />
    <Line dataKey="amt" stroke="red" />
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
