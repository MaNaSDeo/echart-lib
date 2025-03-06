import ReactECharts from "echarts-for-react";
import { filteredData as data } from "../fakeData";
// import * as echarts from "echarts";

// Prepare data for ECharts
const formattedData = data.map((point) => [
  point.device_timestamp, // X-axis: Timestamp (ECharts auto formats)
  point.level, // Y-axis: Level
]);

const LineChart = () => {
  const modifiedData = data.map((point) => {});
  console.log("length", data.length);

  const option = {
    title: { text: "Fuel Level Over Time" },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "time", // Auto-handles timestamps
      name: "",
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} L",
      },
      axisPointer: {
        snap: false, //not sure what it does.
      },
    },
    visualMap: {
      show: false,
      dimension: 0,
      pieces: [
        {
          lte: 6,
          color: "green",
        },
        {
          gt: 6,
          lte: 8,
          color: "red",
        },
        {
          gt: 8,
          lte: 14,
          color: "green",
        },
        {
          gt: 14,
          lte: 17,
          color: "red",
        },
        {
          gt: 17,
          color: "green",
        },
      ],
    },
    series: [
      {
        name: "Fuel Level",
        type: "line",
        data: formattedData, // ECharts handles timestamps directly
        // lineStyle: { color: "blue" },
        // areaStyle: {
        //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //     { offset: 0, color: "#ACD4FD" }, // Light blue at the top
        //     { offset: 1, color: "#F5FAFF" }, // Lighter shade at the bottom
        //   ]),
        // },
        symbol: "none",
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100vh", width: "100vw" }} />
  );
};

export default LineChart;
