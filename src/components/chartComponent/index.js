import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const Chart = ({ chartData, type }) => {
  return (
    <div className="chart">
      {type === "bar" && (
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: "Largest Cities in Massachusetts",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      )}

      {type === "line" && (
        <Line
          data={chartData}
          options={{
            title: {
              display: true,
              text: "Largest Cities in Massachusetts",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      )}

      {type === "pie" && (
        <Pie
          data={chartData}
          options={{
            title: {
              display: true,
              text: "Largest Cities in Massachusetts",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
