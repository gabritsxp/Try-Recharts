import React from "react";
import "./App.css";
import { SimpleLineChart } from "./Components/Charts/SimpleLineChart";
import { SimpleAreaChart } from "./Components/Charts/SimpleAreaChart";

function App() {
  return (
    <div className="App">
      <SimpleLineChart />
      <SimpleAreaChart />
    </div>
  );
}

export default App;
