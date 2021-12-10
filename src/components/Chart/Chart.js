import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  let dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalMaximum = Math.max(...dataPointValues);
  console.log(
    props.dataPoints.map((dataPoint) => {
      return dataPoint;
    })
  );
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          value={data.value}
          maxValue={totalMaximum}
          key={data.label}
          label={data.label}
        />
      ))}
    </div>
  );
};
export default Chart;
