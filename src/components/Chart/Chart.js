import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);//spread operator pulls out all array elemnts and adds them as standalone arugments to the max method

  return <div className="chart">
  <div>
    </div> 
    {props.dataPoints.map(dataPoint =>
    <ChartBar 
    key= {dataPoint.label}
    value={dataPoint.value} 
    maxValue={totalMaximum}
    label={dataPoint.label}
    >
    </ChartBar>)}
  </div>;
};
export default Chart;
