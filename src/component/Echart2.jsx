import ReactECharts from "echarts-for-react";
import {
  filteredData as data,
  // modifiedData,
  // processChartData,
  // processData,
} from "../fakeData";
import { transformDataForChart } from "../helperfunction";
// import * as echarts from "echarts";

const modifiedData = transformDataForChart(data);
// const modifiedData = processData(data);

console.log("modifiedData", { modifiedData });

const LineChart = () => {
  console.log("result", {
    modifiedData,
  });

  const option = {
    title: { text: "Fuel Level Over Time" },
    tooltip: { trigger: "axis" },
    toolbox: {
      show: false,
    },
    xAxis: {
      type: "time",
      // boundaryGap: ["5%", "5%"], // Fix applied here
      boundaryGap: false,
      min: "dataMin", // Start x-axis from the first data point
      max: "dataMax", // End x-axis at the last data point
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
    tooltip: {
      trigger: "axis",
      formatter: (params) => {
        let tooltipText = ""; // Initialize tooltip content

        // console.log("params", { params });

        params.forEach((item) => {
          const data = item?.data?.[2] || {}; // Access data point

          if (data.device_timestamp % 1000 !== 0) return "";

          tooltipText += `
            <div>
              <b>device_timestamp:</b> ${data.device_timestamp} <br />
              🕒 <b>Time:</b> ${new Date(
                data.device_timestamp
              ).toLocaleString()} <br />
              ${data?.level ? `⛽ <b>Level:</b> ${data.level} L <br />` : ""}
              ${
                data?.speed
                  ? `🚗 <b>Speed:</b> ${data.speed ?? "N/A"} km/h <br />`
                  : ""
              }
              ${
                data?.ignition
                  ? `🔥 <b>Ignition:</b> ${data.ignition ? "On" : "Off"} <br />`
                  : ""
              }
              ${
                data?.isLowNetwork
                  ? `📡 <b>Low Network:</b> ${
                      data.isLowNetwork ? "Yes" : "No"
                    } <br />`
                  : ""
              }
              ${
                data?.status
                  ? `⚠️ <b>Status:</b> ${data.status ?? "Normal"} <br />`
                  : ""
              }
              ${
                data?.address
                  ? `📍 <b>Address:</b> ${data.address ?? "Unknown"} <br />`
                  : ""
              }
            </div>
          `;
        });

        return tooltipText; // Return formatted HTML
      },
      backgroundColor: "rgba(50, 50, 50, 0.8)", // Dark background
      borderColor: "#ccc",
      borderWidth: 1,
      textStyle: {
        color: "#fff", // White text
      },
    },
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
