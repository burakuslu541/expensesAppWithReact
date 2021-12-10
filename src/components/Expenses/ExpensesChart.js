import React, { useState } from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoint = [
    { label: "Oca", value: 0 },
    { label: "Sub", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Nis", value: 0 },
    { label: "May", value: 0 },
    { label: "Haz", value: 0 },
    { label: "Tem", value: 0 },
    { label: "Agu", value: 0 },
    { label: "Eyl", value: 0 },
    { label: "Eki", value: 0 },
    { label: "Kas", value: 0 },
    { label: "Ara", value: 0 },
  ];
  for (let expense of props.expenses) {
    const expenseMount = expense.date.getMonth();
    chartDataPoint[expenseMount].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoint} />;
};
export default ExpensesChart;
