import React from "react";
import "./App.css";
import { SimpleLineChart } from "./Components/Charts/SimpleLineChart";
import { SimpleAreaChart } from "./Components/Charts/SimpleAreaChart";
import { CustomComposedChart } from "./Components/Charts/ComposedChart";

function App() {
  return (
    <div className="App">
      <SimpleLineChart />
      <SimpleAreaChart />
      <CustomComposedChart />
    </div>
  );
}

export default App;
