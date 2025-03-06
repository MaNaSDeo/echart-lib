import ReactECharts from "echarts-for-react";
import { filteredData as data, modifiedData } from "../fakeData";
// import * as echarts from "echarts";

const LineChart = () => {
  const option = {
    title: { text: "Fuel Level Over Time" },
    tooltip: { trigger: "axis" },
    toolbox: {
      show: false,
    },
    xAxis: {
      type: "time",
      boundaryGap: ["5%", "5%"], // Fix applied here
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} L",
      },
      axisPointer: {
        snap: false,
      },
    },
    series: modifiedData,
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "100vh", width: "100vw" }}
      notMerge={true}
      lazyUpdate={true}
      key={JSON.stringify(option)} // Force update when option changes
    />
  );
};

export default LineChart;
