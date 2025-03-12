import * as echarts from "echarts";

export const modifiedData = [
  {
    type: "line",
    lineStyle: {
      type: "dashed", // Dashed gray line
      color: "gray",
    },
    symbol: "none",
    data: [
      [
        1735449706000,
        243.88,
        {
          device_timestamp: 1735410600000,
          level: 243.88,
          isLowNetwork: true,
        },
      ],
      [
        1735449746000,
        // (1735449706000 + 1735449786000) / 2,
        243.88,
        {
          device_timestamp: 1735410599999,
          status: "LOW_NETWORK",
          end_time: 1735449786000,
          start_time: 1735410600000,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "dashed", // Dashed gray line
      color: "gray",
    },
    symbol: "none",
    data: [
      [
        (1735449706000 + 1735449786000) / 2,
        (243.88 + 243.88) / 2,
        {
          device_timestamp: 1735410600000,
          status: "LOW_NETWORK",
          end_time: 1735449786000,
          start_time: 1735410600000,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "dashed",
      color: "gray",
    },
    symbol: "none",
    data: [
      [
        (1735449706000 + 1735449786000) / 2,
        (243.88 + 243.88) / 2,
        {
          device_timestamp: 1735410600000 + 1,
          status: "LOW_NETWORK",
          end_time: 1735449786000,
          start_time: 1735410600000,
        },
      ],
      [
        1735449786000,
        243.88,
        {
          device_timestamp: 1735449786000,
          speed: 0,
          ignition: false,
          level: 243.88,
          isLowNetwork: true,
          status: null,
          address: null,
          fuel_reading_count: null,
          status_display_text: null,
          end_time: 1735449786000,
          start_time: 1735410600000,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "solid", // Solid yellow line (Ignition Off)
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735449786000,
        243.88,
        {
          device_timestamp: 1735449786001,
          speed: 0,
          ignition: false,
          level: 243.88,
          isLowNetwork: true,
          status: null,
          address: null,
          fuel_reading_count: null,
          status_display_text: null,
          end_time: 1735449786000,
          start_time: 1735410600000,
        },
      ],
      [
        1735449906000,
        215.38,
        {
          device_timestamp: 1735449906000,
          speed: 0,
          ignition: false,
          level: 215.38,
        },
      ],
      [
        1735450026000,
        186.88,
        {
          device_timestamp: 1735450026000,
          speed: 0,
          ignition: false,
          level: 186.88,
        },
      ],
      [
        1735450146000,
        158.38,
        {
          device_timestamp: 1735450146000,
          speed: 0,
          ignition: false,
          level: 158.38,
        },
      ],
      [
        1735450266000,
        129.88,
        {
          device_timestamp: 1735450266000,
          speed: 0,
          ignition: false,
          level: 129.88,
        },
      ],
    ],
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#ACD4FD" },
        { offset: 1, color: "#F5FAFF" },
      ]),
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid", // Solid blue line (Ignition On)
      color: "blue",
    },
    symbol: "none",
    data: [
      [
        1735450266001,
        129.88,
        {
          device_timestamp: 1735450266000,
          speed: 0,
          ignition: false,
          level: 129.88,
        },
      ],
      [
        1735450386000,
        113.25,
        {
          device_timestamp: 1735450386000,
          speed: 0,
          ignition: true,
          level: 113.25,
        },
      ],
      [
        1735450506000,
        113.25,
        {
          device_timestamp: 1735450506000,
          speed: 0,
          ignition: true,
          level: 113.25,
        },
      ],
      [
        1735450636000,
        113.25,
        {
          device_timestamp: 1735450635999,
          speed: 0,
          ignition: false,
          level: 113.25,
        },
      ],
    ],
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#ACD4FD" }, // Light blue at the top
        { offset: 1, color: "#F5FAFF" }, // Lighter shade at the bottom
      ]),
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    // symbol: "triangle",
    symbol: `image://src/component/img/logogoogle.svg`,
    symbolSize: 20,
    data: [
      [
        1735450636000,
        113.25,
        {
          device_timestamp: 1735450636000,
          speed: 0,
          ignition: false,
          level: 113.25,
          isLowNetwork: true,
          status: "REFUELING",
          address:
            "Coimbatore - Nagapattinam Hwy, Annai Meena Nagar, Alangudi Bit, Punnainallur, Tamil Nadu 613501",
          fuel_reading_count: "236.75 L",
          status_display_text: "Refuel",
          end_time: null,
          start_time: null,
        },
      ],
    ],
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#ACD4FD" },
        { offset: 1, color: "#F5FAFF" },
      ]),
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735450636000,
        113.25,
        {
          device_timestamp: 1735450636001,
          speed: 0,
          ignition: false,
          level: 113.25,
        },
      ],
      [
        1735450656000,
        118,
        {
          device_timestamp: 1735450656000,
          speed: 0,
          ignition: false,
          level: 118,
        },
      ],
      [
        1735450676000,
        122.75,
        {
          device_timestamp: 1735450676000,
          speed: 0,
          ignition: false,
          level: 122.75,
        },
      ],
      [
        1735450696000,
        127.5,
        {
          device_timestamp: 1735450696000,
          speed: 0,
          ignition: false,
          level: 127.5,
        },
      ],
      [
        1735450716000,
        132.25,
        {
          device_timestamp: 1735450716000,
          speed: 0,
          ignition: false,
          level: 132.25,
        },
      ],
    ],
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#ACD4FD" }, // Light blue at the top
        { offset: 1, color: "#F5FAFF" }, // Lighter shade at the bottom
      ]),
    },
  },
];

export const filteredData = [
  // {
  //   device_timestamp: 1735410600000,
  //   level: 243.88,
  //   isLowNetwork: true,
  // },
  {
    device_timestamp: 1735449706000,
    level: 243.88,
    isLowNetwork: true,
  },
  {
    device_timestamp: 1735449786000,
    speed: 0,
    ignition: false,
    level: 243.88,
    isLowNetwork: true,
    status: null,
    address: null,
    fuel_reading_count: null,
    status_display_text: null,
    end_time: 1735449786000,
    start_time: 1735410600000,
  },
  {
    device_timestamp: 1735449906000,
    speed: 0,
    ignition: false,
    level: 215.38,
  },
  {
    device_timestamp: 1735450026000,
    speed: 0,
    ignition: false,
    level: 186.88,
  },
  {
    device_timestamp: 1735450146000,
    speed: 0,
    ignition: false,
    level: 158.38,
  },
  {
    device_timestamp: 1735450266000,
    speed: 0,
    ignition: false,
    level: 129.88,
  },
  {
    device_timestamp: 1735450386000,
    speed: 0,
    ignition: true,
    level: 113.25,
  },
  {
    device_timestamp: 1735450506000,
    speed: 0,
    ignition: true,
    level: 113.25,
  },
  {
    device_timestamp: 1735450636000,
    speed: 0,
    ignition: false,
    level: 113.25,
    isLowNetwork: null,
    status: "REFUELING",
    address:
      "Coimbatore - Nagapattinam Hwy, Annai Meena Nagar, Alangudi Bit, Punnainallur, Tamil Nadu 613501",
    fuel_reading_count: "236.75 L",
    status_display_text: "Refuel",
    end_time: null,
    start_time: null,
  },
  {
    device_timestamp: 1735450656000,
    speed: 0,
    ignition: false,
    level: 118,
  },
  {
    device_timestamp: 1735450676000,
    speed: 0,
    ignition: false,
    level: 122.75,
  },
  {
    device_timestamp: 1735450696000,
    speed: 0,
    ignition: false,
    level: 127.5,
  },
  {
    device_timestamp: 1735450716000,
    speed: 0,
    ignition: false,
    level: 132.25,
  },
  //extra data removed.
  // ...extraData
];

const extraData = [
  {
    device_timestamp: 1735450736000,
    speed: 0,
    ignition: true,
    level: 137,
  },
  {
    device_timestamp: 1735450756000,
    speed: 0,
    ignition: true,
    level: 141.75,
  },
  {
    device_timestamp: 1735450776000,
    speed: 0,
    ignition: true,
    level: 146.5,
  },
  {
    device_timestamp: 1735450796000,
    speed: 0,
    ignition: true,
    level: 151.25,
  },
  {
    device_timestamp: 1735450816000,
    speed: 0,
    ignition: true,
    level: 156,
  },
  {
    device_timestamp: 1735450836000,
    speed: 0,
    ignition: false,
    level: 160.75,
  },
  {
    device_timestamp: 1735450856000,
    speed: 0,
    ignition: false,
    level: 165.5,
  },
  {
    device_timestamp: 1735450876000,
    speed: 0,
    ignition: false,
    level: 170.25,
  },
  {
    device_timestamp: 1735450896000,
    speed: 0,
    ignition: false,
    level: 175,
  },
  {
    device_timestamp: 1735450916000,
    speed: 0,
    ignition: true,
    level: 179.75,
  },
  {
    device_timestamp: 1735450936000,
    speed: 0,
    ignition: true,
    level: 184.5,
  },
  {
    device_timestamp: 1735450956000,
    speed: 0,
    ignition: true,
    level: 189.25,
  },
  {
    device_timestamp: 1735450976000,
    speed: 0,
    ignition: true,
    level: 194,
  },
  {
    device_timestamp: 1735450996000,
    speed: 0,
    ignition: true,
    level: 198.75,
  },
  {
    device_timestamp: 1735451016000,
    speed: 0,
    ignition: true,
    level: 203.5,
  },
  {
    device_timestamp: 1735451036000,
    speed: 0,
    ignition: true,
    level: 208.25,
  },
  {
    device_timestamp: 1735451056000,
    speed: 0,
    ignition: true,
    level: 213,
  },
  {
    device_timestamp: 1735451076000,
    speed: 0,
    ignition: false,
    level: 217.75,
  },
  {
    device_timestamp: 1735451096000,
    speed: 0,
    ignition: false,
    level: 222.5,
  },
  {
    device_timestamp: 1735451116000,
    speed: 0,
    ignition: false,
    level: 227.25,
  },
  {
    device_timestamp: 1735451136000,
    speed: 0,
    ignition: false,
    level: 232,
  },
  {
    device_timestamp: 1735451156000,
    speed: 0,
    ignition: false,
    level: 236.75,
  },
  {
    device_timestamp: 1735451176000,
    speed: 0,
    ignition: true,
    level: 241.5,
  },
  {
    device_timestamp: 1735451196000,
    speed: 0,
    ignition: true,
    level: 246.25,
  },
  {
    device_timestamp: 1735451216000,
    speed: 0,
    ignition: true,
    level: 267.39,
  },
  {
    device_timestamp: 1735451236000,
    speed: 0,
    ignition: true,
    level: 350,
  },
  {
    device_timestamp: 1735451296000,
    speed: 0,
    ignition: true,
    level: 350,
  },
  {
    device_timestamp: 1735451406000,
    speed: 0,
    ignition: true,
    level: 350,
  },
  {
    device_timestamp: 1735451526000,
    speed: 23.5,
    ignition: true,
    level: 350,
  },
  {
    device_timestamp: 1735451646000,
    speed: 52,
    ignition: true,
    level: 350,
  },
  {
    device_timestamp: 1735451766000,
    speed: 48,
    ignition: true,
    level: 350,
  },
  {
    device_timestamp: 1735451886000,
    speed: 46.5,
    ignition: false,
    level: 260.37,
  },
  {
    device_timestamp: 1735452006000,
    speed: 51.5,
    ignition: false,
    level: 236.63,
  },
  {
    device_timestamp: 1735452096000,
    speed: 50,
    ignition: false,
    level: 226.5,
  },
  {
    device_timestamp: 1735624270878,
    speed: 0,
    ignition: false,
    level: 310.87,
    isLowNetwork: true,
    status: "FUEL_THEFT",
    address:
      "Coimbatore - Nagapattinam Hwy, Annai Meena Nagar, Alangudi Bit, Punnainallur, Tamil Nadu 613501",
    fuel_reading_count: "266.62 L",
    status_display_text: "Theft",
    end_time: 1735624270878,
    start_time: 1735452096000,
  },
  {
    device_timestamp: 1735624290878,
    speed: 0,
    ignition: false,
    level: 271.74,
  },
  {
    device_timestamp: 1735624310878,
    speed: 0,
    ignition: false,
    level: 249,
  },
  {
    device_timestamp: 1735624330878,
    speed: 0,
    ignition: false,
    level: 246.75,
  },
  {
    device_timestamp: 1735624350878,
    speed: 0,
    ignition: false,
    level: 244.5,
  },
  {
    device_timestamp: 1735624370878,
    speed: 0,
    ignition: true,
    level: 242.25,
  },
  {
    device_timestamp: 1735624390878,
    speed: 0,
    ignition: true,
    level: 240,
  },
  {
    device_timestamp: 1735624410878,
    speed: 0,
    ignition: true,
    level: 237.75,
  },
  {
    device_timestamp: 1735624430878,
    speed: 0,
    ignition: true,
    level: 235.5,
  },
  {
    device_timestamp: 1735624450878,
    speed: 0,
    ignition: true,
    level: 233.25,
  },
  {
    device_timestamp: 1735624470878,
    speed: 0,
    ignition: true,
    level: 231,
  },
  {
    device_timestamp: 1735624490878,
    speed: 0,
    ignition: true,
    level: 228.75,
  },
  {
    device_timestamp: 1735624510878,
    speed: 0,
    ignition: false,
    level: 226.5,
  },
  {
    device_timestamp: 1735624530878,
    speed: 0,
    ignition: false,
    level: 224.25,
  },
  {
    device_timestamp: 1735624550878,
    speed: 0,
    ignition: false,
    level: 222,
  },
  {
    device_timestamp: 1735624570878,
    speed: 0,
    ignition: false,
    level: 219.75,
  },
  {
    device_timestamp: 1735624590878,
    speed: 0,
    ignition: true,
    level: 217.5,
  },
  {
    device_timestamp: 1735624610878,
    speed: 0,
    ignition: true,
    level: 215.25,
  },
  {
    device_timestamp: 1735624630878,
    speed: 0,
    ignition: true,
    level: 213,
  },
  {
    device_timestamp: 1735624650878,
    speed: 0,
    ignition: true,
    level: 210.75,
  },
  {
    device_timestamp: 1735624670878,
    speed: 0,
    ignition: false,
    level: 208.5,
  },
  {
    device_timestamp: 1735624690878,
    speed: 0,
    ignition: false,
    level: 206.25,
  },
  {
    device_timestamp: 1735624710878,
    speed: 0,
    ignition: false,
    level: 204,
  },
  {
    device_timestamp: 1735624730878,
    speed: 0,
    ignition: false,
    level: 201.75,
  },
  {
    device_timestamp: 1735624750878,
    speed: 0,
    ignition: false,
    level: 199.5,
  },
  {
    device_timestamp: 1735624770878,
    speed: 0,
    ignition: false,
    level: 197.25,
  },
  {
    device_timestamp: 1735624790878,
    speed: 0,
    ignition: false,
    level: 195,
  },
  {
    device_timestamp: 1735624810878,
    speed: 0,
    ignition: false,
    level: 192.75,
  },
  {
    device_timestamp: 1735624830878,
    speed: 0,
    ignition: false,
    level: 190.5,
  },
  {
    device_timestamp: 1735624850878,
    speed: 0,
    ignition: true,
    level: 188.25,
  },
  {
    device_timestamp: 1735624870878,
    speed: 0,
    ignition: true,
    level: 186,
  },
  {
    device_timestamp: 1735624890878,
    speed: 0,
    ignition: true,
    level: 183.75,
  },
  {
    device_timestamp: 1735624910878,
    speed: 0,
    ignition: true,
    level: 181.5,
  },
  {
    device_timestamp: 1735624930878,
    speed: 0,
    ignition: true,
    level: 179.25,
  },
  {
    device_timestamp: 1735624950878,
    speed: 0,
    ignition: true,
    level: 177,
  },
  {
    device_timestamp: 1735624970878,
    speed: 0,
    ignition: true,
    level: 174.75,
  },
  {
    device_timestamp: 1735624990878,
    speed: 0,
    ignition: true,
    level: 172.5,
  },
  {
    device_timestamp: 1735625010878,
    speed: 0,
    ignition: true,
    level: 170.25,
  },
  {
    device_timestamp: 1735625030878,
    speed: 0,
    ignition: true,
    level: 168,
  },
  {
    device_timestamp: 1735625050878,
    speed: 0,
    ignition: true,
    level: 165.75,
  },
  {
    device_timestamp: 1735625070878,
    speed: 0,
    ignition: true,
    level: 163.5,
  },
  {
    device_timestamp: 1735625090878,
    speed: 0,
    ignition: true,
    level: 161.25,
  },
  {
    device_timestamp: 1735625110878,
    speed: 0,
    ignition: true,
    level: 159,
  },
  {
    device_timestamp: 1735625130878,
    speed: 0,
    ignition: true,
    level: 156.75,
  },
  {
    device_timestamp: 1735625150878,
    speed: 0,
    ignition: true,
    level: 154.5,
  },
  {
    device_timestamp: 1735625170878,
    speed: 0,
    ignition: true,
    level: 152.25,
  },
  {
    device_timestamp: 1735625190878,
    speed: 0,
    ignition: true,
    level: 150,
  },
  {
    device_timestamp: 1735625210878,
    speed: 0,
    ignition: true,
    level: 147.75,
  },
  {
    device_timestamp: 1735625230878,
    speed: 0,
    ignition: true,
    level: 145.5,
  },
  {
    device_timestamp: 1735625250878,
    speed: 0,
    ignition: true,
    level: 143.25,
  },
  {
    device_timestamp: 1735625270878,
    speed: 0,
    ignition: true,
    level: 141,
  },
  {
    device_timestamp: 1735625290878,
    speed: 0,
    ignition: true,
    level: 138.75,
  },
  {
    device_timestamp: 1735625310878,
    speed: 0,
    ignition: false,
    level: 136.5,
  },
  {
    device_timestamp: 1735625330878,
    speed: 0,
    ignition: false,
    level: 134.25,
  },
  {
    device_timestamp: 1735625350878,
    speed: 0,
    ignition: false,
    level: 132,
  },
  {
    device_timestamp: 1735625370878,
    speed: 0,
    ignition: false,
    level: 129.75,
  },
  {
    device_timestamp: 1735625390878,
    speed: 0,
    ignition: false,
    level: 127.5,
  },
  {
    device_timestamp: 1735625410878,
    speed: 0,
    ignition: false,
    level: 125.25,
  },
  {
    device_timestamp: 1735625430878,
    speed: 0,
    ignition: false,
    level: 123,
  },
  {
    device_timestamp: 1735625450878,
    speed: 0,
    ignition: false,
    level: 120.75,
  },
  {
    device_timestamp: 1735625470878,
    speed: 0,
    ignition: false,
    level: 118.5,
  },
  {
    device_timestamp: 1735625490878,
    speed: 0,
    ignition: false,
    level: 116.25,
  },
  {
    device_timestamp: 1735625510878,
    speed: 0,
    ignition: false,
    level: 114,
  },
  {
    device_timestamp: 1735625530878,
    speed: 0,
    ignition: false,
    level: 111.75,
  },
  {
    device_timestamp: 1735625550878,
    speed: 0,
    ignition: false,
    level: 109.5,
  },
  {
    device_timestamp: 1735625570878,
    speed: 0,
    ignition: false,
    level: 107.25,
  },
  {
    device_timestamp: 1735625590878,
    speed: 0,
    ignition: false,
    level: 105,
  },
  {
    device_timestamp: 1735625610878,
    speed: 0,
    ignition: false,
    level: 102.75,
  },
  {
    device_timestamp: 1735625630878,
    speed: 0,
    ignition: false,
    level: 100.5,
  },
  {
    device_timestamp: 1735625650878,
    speed: 0,
    ignition: false,
    level: 98.25,
  },
  {
    device_timestamp: 1735625670878,
    speed: 0,
    ignition: false,
    level: 96,
  },
  {
    device_timestamp: 1735625690878,
    speed: 0,
    ignition: false,
    level: 93.75,
  },
  {
    device_timestamp: 1735625710878,
    speed: 0,
    ignition: false,
    level: 91.5,
  },
  {
    device_timestamp: 1735625730878,
    speed: 0,
    ignition: false,
    level: 89.25,
  },
  {
    device_timestamp: 1735625750878,
    speed: 0,
    ignition: false,
    level: 87,
  },
  {
    device_timestamp: 1735625770878,
    speed: 0,
    ignition: false,
    level: 84.75,
  },
  {
    device_timestamp: 1735625790878,
    speed: 0,
    ignition: false,
    level: 82.5,
  },
  {
    device_timestamp: 1735625810878,
    speed: 0,
    ignition: false,
    level: 80.25,
  },
  {
    device_timestamp: 1735625830878,
    speed: 0,
    ignition: false,
    level: 78,
  },
  {
    device_timestamp: 1735625850878,
    speed: 0,
    ignition: false,
    level: 75.75,
  },
  {
    device_timestamp: 1735625870878,
    speed: 0,
    ignition: false,
    level: 73.5,
  },
  {
    device_timestamp: 1735625890878,
    speed: 0,
    ignition: false,
    level: 71.25,
  },
  {
    device_timestamp: 1735625910878,
    speed: 0,
    ignition: false,
    level: 69,
  },
  {
    device_timestamp: 1735625930878,
    speed: 0,
    ignition: false,
    level: 66.75,
  },
  {
    device_timestamp: 1735625950878,
    speed: 0,
    ignition: false,
    level: 64.5,
  },
  {
    device_timestamp: 1735625970878,
    speed: 0,
    ignition: false,
    level: 62.25,
  },
  {
    device_timestamp: 1735625990878,
    speed: 0,
    ignition: false,
    level: 60,
  },
  {
    device_timestamp: 1735626010878,
    speed: 0,
    ignition: false,
    level: 57.75,
  },
  {
    device_timestamp: 1735626030878,
    speed: 0,
    ignition: false,
    level: 55.5,
  },
  {
    device_timestamp: 1735626050878,
    speed: 25,
    ignition: true,
    level: 53.25,
  },
  {
    device_timestamp: 1735626070878,
    speed: 28,
    ignition: true,
    level: 51,
  },
  {
    device_timestamp: 1735626090878,
    speed: 39,
    ignition: true,
    level: 48.75,
  },
  {
    device_timestamp: 1735626110878,
    speed: 46,
    ignition: true,
    level: 46.5,
  },
  {
    device_timestamp: 1735626130878,
    speed: 48,
    ignition: true,
    level: 44.25,
  },
  {
    device_timestamp: 1735626190878,
    speed: 46,
    ignition: true,
    level: 37.5,
  },
  {
    device_timestamp: 1735626300878,
    speed: 51,
    ignition: true,
    level: 25.13,
  },
  {
    device_timestamp: 1735626420878,
    speed: 44,
    ignition: true,
    level: 11.63,
  },
  {
    device_timestamp: 1735626540878,
    speed: 46.5,
    ignition: true,
    level: 0,
  },
  {
    device_timestamp: 1735626620878,
    speed: 51,
    ignition: false,
    level: 0,
  },
  {
    device_timestamp: 1735668900000,
    level: 0,
    isLowNetwork: true,
  },
];

const result = [
  {
    type: "line",
    lineStyle: {
      type: "dashed",
      color: "gray",
    },
    symbol: "none",
    data: [
      [
        1735410600000,
        243.88,
        {
          device_timestamp: 1735410600000,
          level: 243.88,
          isLowNetwork: true,
        },
      ],
      [
        1735430193000,
        243.88,
        {
          device_timestamp: 1735410599999,
          status: "LOW_NETWORK",
          end_time: 1735449786000,
          start_time: 1735410600000,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "dashed",
      color: "gray",
    },
    symbol: "none",
    data: [
      [
        1735430193000,
        243.88,
        {
          device_timestamp: 1735410600000,
          status: "LOW_NETWORK",
          end_time: 1735449786000,
          start_time: 1735410600000,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "dashed",
      color: "gray",
    },
    symbol: "none",
    data: [
      [
        1735430193000,
        243.88,
        {
          device_timestamp: 1735410600001,
          status: "LOW_NETWORK",
          end_time: 1735449786000,
          start_time: 1735410600000,
        },
      ],
      [
        1735449786000,
        243.88,
        {
          device_timestamp: 1735449786000,
          speed: 0,
          ignition: false,
          level: 243.88,
          isLowNetwork: true,
          status: null,
          address: null,
          fuel_reading_count: null,
          status_display_text: null,
          end_time: 1735449786000,
          start_time: 1735410600000,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735449906000,
        215.38,
        {
          device_timestamp: 1735449906000,
          speed: 0,
          ignition: false,
          level: 215.38,
        },
      ],
      [
        1735449906000,
        215.38,
        {
          device_timestamp: 1735449906000,
          speed: 0,
          ignition: false,
          level: 215.38,
        },
      ],
      [
        1735450026000,
        186.88,
        {
          device_timestamp: 1735450026000,
          speed: 0,
          ignition: false,
          level: 186.88,
        },
      ],
      [
        1735450146000,
        158.38,
        {
          device_timestamp: 1735450146000,
          speed: 0,
          ignition: false,
          level: 158.38,
        },
      ],
      [
        1735450266000,
        129.88,
        {
          device_timestamp: 1735450266000,
          speed: 0,
          ignition: false,
          level: 129.88,
        },
      ],
      [
        1735450266001,
        129.88,
        {
          device_timestamp: 1735450266001,
          speed: 0,
          ignition: false,
          level: 129.88,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "blue",
    },
    symbol: "none",
    data: [
      [
        1735450386000,
        113.25,
        {
          device_timestamp: 1735450386000,
          speed: 0,
          ignition: true,
          level: 113.25,
        },
      ],
      [
        1735450386000,
        113.25,
        {
          device_timestamp: 1735450386000,
          speed: 0,
          ignition: true,
          level: 113.25,
        },
      ],
      [
        1735450506000,
        113.25,
        {
          device_timestamp: 1735450506000,
          speed: 0,
          ignition: true,
          level: 113.25,
        },
      ],
      [
        1735450635999,
        113.25,
        {
          device_timestamp: 1735450635999,
          speed: 0,
          ignition: false,
          level: 113.25,
          isLowNetwork: null,
          status: "REFUELING",
          address:
            "Coimbatore - Nagapattinam Hwy, Annai Meena Nagar, Alangudi Bit, Punnainallur, Tamil Nadu 613501",
          fuel_reading_count: "236.75 L",
          status_display_text: "Refuel",
          end_time: null,
          start_time: null,
        },
      ],
      [
        1735450656000,
        118,
        {
          device_timestamp: 1735450656000,
          speed: 0,
          ignition: false,
          level: 118,
        },
      ],
      [
        1735450676000,
        122.75,
        {
          device_timestamp: 1735450676000,
          speed: 0,
          ignition: false,
          level: 122.75,
        },
      ],
      [
        1735450696000,
        127.5,
        {
          device_timestamp: 1735450696000,
          speed: 0,
          ignition: false,
          level: 127.5,
        },
      ],
      [
        1735450716000,
        132.25,
        {
          device_timestamp: 1735450716000,
          speed: 0,
          ignition: false,
          level: 132.25,
        },
      ],
      [
        1735450716001,
        132.25,
        {
          device_timestamp: 1735450716001,
          speed: 0,
          ignition: false,
          level: 132.25,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "image://src/component/img/RefuelIcon.svg",
    symbolSize: 20,
    data: [
      [
        1735450636000,
        113.25,
        {
          device_timestamp: 1735450636000,
          speed: 0,
          ignition: false,
          level: 113.25,
          isLowNetwork: null,
          status: "REFUELING",
          address:
            "Coimbatore - Nagapattinam Hwy, Annai Meena Nagar, Alangudi Bit, Punnainallur, Tamil Nadu 613501",
          fuel_reading_count: "236.75 L",
          status_display_text: "Refuel",
          end_time: null,
          start_time: null,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735450636001,
        113.25,
        {
          device_timestamp: 1735450636001,
          speed: 0,
          ignition: false,
          level: 113.25,
          isLowNetwork: null,
          status: "REFUELING",
          address:
            "Coimbatore - Nagapattinam Hwy, Annai Meena Nagar, Alangudi Bit, Punnainallur, Tamil Nadu 613501",
          fuel_reading_count: "236.75 L",
          status_display_text: "Refuel",
          end_time: null,
          start_time: null,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "blue",
    },
    symbol: "none",
    data: [
      [
        1735450736000,
        137,
        {
          device_timestamp: 1735450736000,
          speed: 0,
          ignition: true,
          level: 137,
        },
      ],
      [
        1735450736000,
        137,
        {
          device_timestamp: 1735450736000,
          speed: 0,
          ignition: true,
          level: 137,
        },
      ],
      [
        1735450756000,
        141.75,
        {
          device_timestamp: 1735450756000,
          speed: 0,
          ignition: true,
          level: 141.75,
        },
      ],
      [
        1735450776000,
        146.5,
        {
          device_timestamp: 1735450776000,
          speed: 0,
          ignition: true,
          level: 146.5,
        },
      ],
      [
        1735450796000,
        151.25,
        {
          device_timestamp: 1735450796000,
          speed: 0,
          ignition: true,
          level: 151.25,
        },
      ],
      [
        1735450816000,
        156,
        {
          device_timestamp: 1735450816000,
          speed: 0,
          ignition: true,
          level: 156,
        },
      ],
      [
        1735450816001,
        156,
        {
          device_timestamp: 1735450816001,
          speed: 0,
          ignition: true,
          level: 156,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735450836000,
        160.75,
        {
          device_timestamp: 1735450836000,
          speed: 0,
          ignition: false,
          level: 160.75,
        },
      ],
      [
        1735450836000,
        160.75,
        {
          device_timestamp: 1735450836000,
          speed: 0,
          ignition: false,
          level: 160.75,
        },
      ],
      [
        1735450856000,
        165.5,
        {
          device_timestamp: 1735450856000,
          speed: 0,
          ignition: false,
          level: 165.5,
        },
      ],
      [
        1735450876000,
        170.25,
        {
          device_timestamp: 1735450876000,
          speed: 0,
          ignition: false,
          level: 170.25,
        },
      ],
      [
        1735450896000,
        175,
        {
          device_timestamp: 1735450896000,
          speed: 0,
          ignition: false,
          level: 175,
        },
      ],
      [
        1735450896001,
        175,
        {
          device_timestamp: 1735450896001,
          speed: 0,
          ignition: false,
          level: 175,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "blue",
    },
    symbol: "none",
    data: [
      [
        1735450916000,
        179.75,
        {
          device_timestamp: 1735450916000,
          speed: 0,
          ignition: true,
          level: 179.75,
        },
      ],
      [
        1735450916000,
        179.75,
        {
          device_timestamp: 1735450916000,
          speed: 0,
          ignition: true,
          level: 179.75,
        },
      ],
      [
        1735450936000,
        184.5,
        {
          device_timestamp: 1735450936000,
          speed: 0,
          ignition: true,
          level: 184.5,
        },
      ],
      [
        1735450956000,
        189.25,
        {
          device_timestamp: 1735450956000,
          speed: 0,
          ignition: true,
          level: 189.25,
        },
      ],
      [
        1735450976000,
        194,
        {
          device_timestamp: 1735450976000,
          speed: 0,
          ignition: true,
          level: 194,
        },
      ],
      [
        1735450996000,
        198.75,
        {
          device_timestamp: 1735450996000,
          speed: 0,
          ignition: true,
          level: 198.75,
        },
      ],
      [
        1735451016000,
        203.5,
        {
          device_timestamp: 1735451016000,
          speed: 0,
          ignition: true,
          level: 203.5,
        },
      ],
      [
        1735451036000,
        208.25,
        {
          device_timestamp: 1735451036000,
          speed: 0,
          ignition: true,
          level: 208.25,
        },
      ],
      [
        1735451056000,
        213,
        {
          device_timestamp: 1735451056000,
          speed: 0,
          ignition: true,
          level: 213,
        },
      ],
      [
        1735451056001,
        213,
        {
          device_timestamp: 1735451056001,
          speed: 0,
          ignition: true,
          level: 213,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735451076000,
        217.75,
        {
          device_timestamp: 1735451076000,
          speed: 0,
          ignition: false,
          level: 217.75,
        },
      ],
      [
        1735451076000,
        217.75,
        {
          device_timestamp: 1735451076000,
          speed: 0,
          ignition: false,
          level: 217.75,
        },
      ],
      [
        1735451096000,
        222.5,
        {
          device_timestamp: 1735451096000,
          speed: 0,
          ignition: false,
          level: 222.5,
        },
      ],
      [
        1735451116000,
        227.25,
        {
          device_timestamp: 1735451116000,
          speed: 0,
          ignition: false,
          level: 227.25,
        },
      ],
      [
        1735451136000,
        232,
        {
          device_timestamp: 1735451136000,
          speed: 0,
          ignition: false,
          level: 232,
        },
      ],
      [
        1735451156000,
        236.75,
        {
          device_timestamp: 1735451156000,
          speed: 0,
          ignition: false,
          level: 236.75,
        },
      ],
      [
        1735451156001,
        236.75,
        {
          device_timestamp: 1735451156001,
          speed: 0,
          ignition: false,
          level: 236.75,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "blue",
    },
    symbol: "none",
    data: [
      [
        1735451176000,
        241.5,
        {
          device_timestamp: 1735451176000,
          speed: 0,
          ignition: true,
          level: 241.5,
        },
      ],
      [
        1735451176000,
        241.5,
        {
          device_timestamp: 1735451176000,
          speed: 0,
          ignition: true,
          level: 241.5,
        },
      ],
      [
        1735451196000,
        246.25,
        {
          device_timestamp: 1735451196000,
          speed: 0,
          ignition: true,
          level: 246.25,
        },
      ],
      [
        1735451216000,
        267.39,
        {
          device_timestamp: 1735451216000,
          speed: 0,
          ignition: true,
          level: 267.39,
        },
      ],
      [
        1735451236000,
        350,
        {
          device_timestamp: 1735451236000,
          speed: 0,
          ignition: true,
          level: 350,
        },
      ],
      [
        1735451296000,
        350,
        {
          device_timestamp: 1735451296000,
          speed: 0,
          ignition: true,
          level: 350,
        },
      ],
      [
        1735451406000,
        350,
        {
          device_timestamp: 1735451406000,
          speed: 0,
          ignition: true,
          level: 350,
        },
      ],
      [
        1735451526000,
        350,
        {
          device_timestamp: 1735451526000,
          speed: 23.5,
          ignition: true,
          level: 350,
        },
      ],
      [
        1735451646000,
        350,
        {
          device_timestamp: 1735451646000,
          speed: 52,
          ignition: true,
          level: 350,
        },
      ],
      [
        1735451766000,
        350,
        {
          device_timestamp: 1735451766000,
          speed: 48,
          ignition: true,
          level: 350,
        },
      ],
      [
        1735451766001,
        350,
        {
          device_timestamp: 1735451766001,
          speed: 48,
          ignition: true,
          level: 350,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735451886000,
        260.37,
        {
          device_timestamp: 1735451886000,
          speed: 46.5,
          ignition: false,
          level: 260.37,
        },
      ],
      [
        1735451886000,
        260.37,
        {
          device_timestamp: 1735451886000,
          speed: 46.5,
          ignition: false,
          level: 260.37,
        },
      ],
      [
        1735452006000,
        236.63,
        {
          device_timestamp: 1735452006000,
          speed: 51.5,
          ignition: false,
          level: 236.63,
        },
      ],
      [
        1735452096000,
        226.5,
        {
          device_timestamp: 1735452096000,
          speed: 50,
          ignition: false,
          level: 226.5,
        },
      ],
      [
        1735624310878,
        249,
        {
          device_timestamp: 1735624310878,
          speed: 0,
          ignition: false,
          level: 249,
        },
      ],
      [
        1735624330878,
        246.75,
        {
          device_timestamp: 1735624330878,
          speed: 0,
          ignition: false,
          level: 246.75,
        },
      ],
      [
        1735624350878,
        244.5,
        {
          device_timestamp: 1735624350878,
          speed: 0,
          ignition: false,
          level: 244.5,
        },
      ],
      [
        1735624350879,
        244.5,
        {
          device_timestamp: 1735624350879,
          speed: 0,
          ignition: false,
          level: 244.5,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "dashed",
      color: "gray",
    },
    symbol: "none",
    data: [
      [
        1735624270878,
        310.87,
        {
          device_timestamp: 1735624270878,
          speed: 0,
          ignition: false,
          level: 310.87,
          isLowNetwork: true,
          status: "FUEL_THEFT",
          address:
            "Coimbatore - Nagapattinam Hwy, Annai Meena Nagar, Alangudi Bit, Punnainallur, Tamil Nadu 613501",
          fuel_reading_count: "266.62 L",
          status_display_text: "Theft",
          end_time: 1735624270878,
          start_time: 1735452096000,
        },
      ],
    ],
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "blue",
    },
    symbol: "none",
    data: [
      [
        1735624370878,
        242.25,
        {
          device_timestamp: 1735624370878,
          speed: 0,
          ignition: true,
          level: 242.25,
        },
      ],
      [
        1735624370878,
        242.25,
        {
          device_timestamp: 1735624370878,
          speed: 0,
          ignition: true,
          level: 242.25,
        },
      ],
      [
        1735624390878,
        240,
        {
          device_timestamp: 1735624390878,
          speed: 0,
          ignition: true,
          level: 240,
        },
      ],
      [
        1735624410878,
        237.75,
        {
          device_timestamp: 1735624410878,
          speed: 0,
          ignition: true,
          level: 237.75,
        },
      ],
      [
        1735624430878,
        235.5,
        {
          device_timestamp: 1735624430878,
          speed: 0,
          ignition: true,
          level: 235.5,
        },
      ],
      [
        1735624450878,
        233.25,
        {
          device_timestamp: 1735624450878,
          speed: 0,
          ignition: true,
          level: 233.25,
        },
      ],
      [
        1735624470878,
        231,
        {
          device_timestamp: 1735624470878,
          speed: 0,
          ignition: true,
          level: 231,
        },
      ],
      [
        1735624490878,
        228.75,
        {
          device_timestamp: 1735624490878,
          speed: 0,
          ignition: true,
          level: 228.75,
        },
      ],
      [
        1735624490879,
        228.75,
        {
          device_timestamp: 1735624490879,
          speed: 0,
          ignition: true,
          level: 228.75,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735624510878,
        226.5,
        {
          device_timestamp: 1735624510878,
          speed: 0,
          ignition: false,
          level: 226.5,
        },
      ],
      [
        1735624510878,
        226.5,
        {
          device_timestamp: 1735624510878,
          speed: 0,
          ignition: false,
          level: 226.5,
        },
      ],
      [
        1735624530878,
        224.25,
        {
          device_timestamp: 1735624530878,
          speed: 0,
          ignition: false,
          level: 224.25,
        },
      ],
      [
        1735624550878,
        222,
        {
          device_timestamp: 1735624550878,
          speed: 0,
          ignition: false,
          level: 222,
        },
      ],
      [
        1735624570878,
        219.75,
        {
          device_timestamp: 1735624570878,
          speed: 0,
          ignition: false,
          level: 219.75,
        },
      ],
      [
        1735624570879,
        219.75,
        {
          device_timestamp: 1735624570879,
          speed: 0,
          ignition: false,
          level: 219.75,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "blue",
    },
    symbol: "none",
    data: [
      [
        1735624590878,
        217.5,
        {
          device_timestamp: 1735624590878,
          speed: 0,
          ignition: true,
          level: 217.5,
        },
      ],
      [
        1735624590878,
        217.5,
        {
          device_timestamp: 1735624590878,
          speed: 0,
          ignition: true,
          level: 217.5,
        },
      ],
      [
        1735624610878,
        215.25,
        {
          device_timestamp: 1735624610878,
          speed: 0,
          ignition: true,
          level: 215.25,
        },
      ],
      [
        1735624630878,
        213,
        {
          device_timestamp: 1735624630878,
          speed: 0,
          ignition: true,
          level: 213,
        },
      ],
      [
        1735624650878,
        210.75,
        {
          device_timestamp: 1735624650878,
          speed: 0,
          ignition: true,
          level: 210.75,
        },
      ],
      [
        1735624650879,
        210.75,
        {
          device_timestamp: 1735624650879,
          speed: 0,
          ignition: true,
          level: 210.75,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735624670878,
        208.5,
        {
          device_timestamp: 1735624670878,
          speed: 0,
          ignition: false,
          level: 208.5,
        },
      ],
      [
        1735624670878,
        208.5,
        {
          device_timestamp: 1735624670878,
          speed: 0,
          ignition: false,
          level: 208.5,
        },
      ],
      [
        1735624690878,
        206.25,
        {
          device_timestamp: 1735624690878,
          speed: 0,
          ignition: false,
          level: 206.25,
        },
      ],
      [
        1735624710878,
        204,
        {
          device_timestamp: 1735624710878,
          speed: 0,
          ignition: false,
          level: 204,
        },
      ],
      [
        1735624730878,
        201.75,
        {
          device_timestamp: 1735624730878,
          speed: 0,
          ignition: false,
          level: 201.75,
        },
      ],
      [
        1735624750878,
        199.5,
        {
          device_timestamp: 1735624750878,
          speed: 0,
          ignition: false,
          level: 199.5,
        },
      ],
      [
        1735624770878,
        197.25,
        {
          device_timestamp: 1735624770878,
          speed: 0,
          ignition: false,
          level: 197.25,
        },
      ],
      [
        1735624790878,
        195,
        {
          device_timestamp: 1735624790878,
          speed: 0,
          ignition: false,
          level: 195,
        },
      ],
      [
        1735624810878,
        192.75,
        {
          device_timestamp: 1735624810878,
          speed: 0,
          ignition: false,
          level: 192.75,
        },
      ],
      [
        1735624830878,
        190.5,
        {
          device_timestamp: 1735624830878,
          speed: 0,
          ignition: false,
          level: 190.5,
        },
      ],
      [
        1735624830879,
        190.5,
        {
          device_timestamp: 1735624830879,
          speed: 0,
          ignition: false,
          level: 190.5,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "blue",
    },
    symbol: "none",
    data: [
      [
        1735624850878,
        188.25,
        {
          device_timestamp: 1735624850878,
          speed: 0,
          ignition: true,
          level: 188.25,
        },
      ],
      [
        1735624850878,
        188.25,
        {
          device_timestamp: 1735624850878,
          speed: 0,
          ignition: true,
          level: 188.25,
        },
      ],
      [
        1735624870878,
        186,
        {
          device_timestamp: 1735624870878,
          speed: 0,
          ignition: true,
          level: 186,
        },
      ],
      [
        1735624890878,
        183.75,
        {
          device_timestamp: 1735624890878,
          speed: 0,
          ignition: true,
          level: 183.75,
        },
      ],
      [
        1735624910878,
        181.5,
        {
          device_timestamp: 1735624910878,
          speed: 0,
          ignition: true,
          level: 181.5,
        },
      ],
      [
        1735624930878,
        179.25,
        {
          device_timestamp: 1735624930878,
          speed: 0,
          ignition: true,
          level: 179.25,
        },
      ],
      [
        1735624950878,
        177,
        {
          device_timestamp: 1735624950878,
          speed: 0,
          ignition: true,
          level: 177,
        },
      ],
      [
        1735624970878,
        174.75,
        {
          device_timestamp: 1735624970878,
          speed: 0,
          ignition: true,
          level: 174.75,
        },
      ],
      [
        1735624990878,
        172.5,
        {
          device_timestamp: 1735624990878,
          speed: 0,
          ignition: true,
          level: 172.5,
        },
      ],
      [
        1735625010878,
        170.25,
        {
          device_timestamp: 1735625010878,
          speed: 0,
          ignition: true,
          level: 170.25,
        },
      ],
      [
        1735625030878,
        168,
        {
          device_timestamp: 1735625030878,
          speed: 0,
          ignition: true,
          level: 168,
        },
      ],
      [
        1735625050878,
        165.75,
        {
          device_timestamp: 1735625050878,
          speed: 0,
          ignition: true,
          level: 165.75,
        },
      ],
      [
        1735625070878,
        163.5,
        {
          device_timestamp: 1735625070878,
          speed: 0,
          ignition: true,
          level: 163.5,
        },
      ],
      [
        1735625090878,
        161.25,
        {
          device_timestamp: 1735625090878,
          speed: 0,
          ignition: true,
          level: 161.25,
        },
      ],
      [
        1735625110878,
        159,
        {
          device_timestamp: 1735625110878,
          speed: 0,
          ignition: true,
          level: 159,
        },
      ],
      [
        1735625130878,
        156.75,
        {
          device_timestamp: 1735625130878,
          speed: 0,
          ignition: true,
          level: 156.75,
        },
      ],
      [
        1735625150878,
        154.5,
        {
          device_timestamp: 1735625150878,
          speed: 0,
          ignition: true,
          level: 154.5,
        },
      ],
      [
        1735625170878,
        152.25,
        {
          device_timestamp: 1735625170878,
          speed: 0,
          ignition: true,
          level: 152.25,
        },
      ],
      [
        1735625190878,
        150,
        {
          device_timestamp: 1735625190878,
          speed: 0,
          ignition: true,
          level: 150,
        },
      ],
      [
        1735625210878,
        147.75,
        {
          device_timestamp: 1735625210878,
          speed: 0,
          ignition: true,
          level: 147.75,
        },
      ],
      [
        1735625230878,
        145.5,
        {
          device_timestamp: 1735625230878,
          speed: 0,
          ignition: true,
          level: 145.5,
        },
      ],
      [
        1735625250878,
        143.25,
        {
          device_timestamp: 1735625250878,
          speed: 0,
          ignition: true,
          level: 143.25,
        },
      ],
      [
        1735625270878,
        141,
        {
          device_timestamp: 1735625270878,
          speed: 0,
          ignition: true,
          level: 141,
        },
      ],
      [
        1735625290878,
        138.75,
        {
          device_timestamp: 1735625290878,
          speed: 0,
          ignition: true,
          level: 138.75,
        },
      ],
      [
        1735625290879,
        138.75,
        {
          device_timestamp: 1735625290879,
          speed: 0,
          ignition: true,
          level: 138.75,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735625310878,
        136.5,
        {
          device_timestamp: 1735625310878,
          speed: 0,
          ignition: false,
          level: 136.5,
        },
      ],
      [
        1735625310878,
        136.5,
        {
          device_timestamp: 1735625310878,
          speed: 0,
          ignition: false,
          level: 136.5,
        },
      ],
      [
        1735625330878,
        134.25,
        {
          device_timestamp: 1735625330878,
          speed: 0,
          ignition: false,
          level: 134.25,
        },
      ],
      [
        1735625350878,
        132,
        {
          device_timestamp: 1735625350878,
          speed: 0,
          ignition: false,
          level: 132,
        },
      ],
      [
        1735625370878,
        129.75,
        {
          device_timestamp: 1735625370878,
          speed: 0,
          ignition: false,
          level: 129.75,
        },
      ],
      [
        1735625390878,
        127.5,
        {
          device_timestamp: 1735625390878,
          speed: 0,
          ignition: false,
          level: 127.5,
        },
      ],
      [
        1735625410878,
        125.25,
        {
          device_timestamp: 1735625410878,
          speed: 0,
          ignition: false,
          level: 125.25,
        },
      ],
      [
        1735625430878,
        123,
        {
          device_timestamp: 1735625430878,
          speed: 0,
          ignition: false,
          level: 123,
        },
      ],
      [
        1735625450878,
        120.75,
        {
          device_timestamp: 1735625450878,
          speed: 0,
          ignition: false,
          level: 120.75,
        },
      ],
      [
        1735625470878,
        118.5,
        {
          device_timestamp: 1735625470878,
          speed: 0,
          ignition: false,
          level: 118.5,
        },
      ],
      [
        1735625490878,
        116.25,
        {
          device_timestamp: 1735625490878,
          speed: 0,
          ignition: false,
          level: 116.25,
        },
      ],
      [
        1735625510878,
        114,
        {
          device_timestamp: 1735625510878,
          speed: 0,
          ignition: false,
          level: 114,
        },
      ],
      [
        1735625530878,
        111.75,
        {
          device_timestamp: 1735625530878,
          speed: 0,
          ignition: false,
          level: 111.75,
        },
      ],
      [
        1735625550878,
        109.5,
        {
          device_timestamp: 1735625550878,
          speed: 0,
          ignition: false,
          level: 109.5,
        },
      ],
      [
        1735625570878,
        107.25,
        {
          device_timestamp: 1735625570878,
          speed: 0,
          ignition: false,
          level: 107.25,
        },
      ],
      [
        1735625590878,
        105,
        {
          device_timestamp: 1735625590878,
          speed: 0,
          ignition: false,
          level: 105,
        },
      ],
      [
        1735625610878,
        102.75,
        {
          device_timestamp: 1735625610878,
          speed: 0,
          ignition: false,
          level: 102.75,
        },
      ],
      [
        1735625630878,
        100.5,
        {
          device_timestamp: 1735625630878,
          speed: 0,
          ignition: false,
          level: 100.5,
        },
      ],
      [
        1735625650878,
        98.25,
        {
          device_timestamp: 1735625650878,
          speed: 0,
          ignition: false,
          level: 98.25,
        },
      ],
      [
        1735625670878,
        96,
        {
          device_timestamp: 1735625670878,
          speed: 0,
          ignition: false,
          level: 96,
        },
      ],
      [
        1735625690878,
        93.75,
        {
          device_timestamp: 1735625690878,
          speed: 0,
          ignition: false,
          level: 93.75,
        },
      ],
      [
        1735625710878,
        91.5,
        {
          device_timestamp: 1735625710878,
          speed: 0,
          ignition: false,
          level: 91.5,
        },
      ],
      [
        1735625730878,
        89.25,
        {
          device_timestamp: 1735625730878,
          speed: 0,
          ignition: false,
          level: 89.25,
        },
      ],
      [
        1735625750878,
        87,
        {
          device_timestamp: 1735625750878,
          speed: 0,
          ignition: false,
          level: 87,
        },
      ],
      [
        1735625770878,
        84.75,
        {
          device_timestamp: 1735625770878,
          speed: 0,
          ignition: false,
          level: 84.75,
        },
      ],
      [
        1735625790878,
        82.5,
        {
          device_timestamp: 1735625790878,
          speed: 0,
          ignition: false,
          level: 82.5,
        },
      ],
      [
        1735625810878,
        80.25,
        {
          device_timestamp: 1735625810878,
          speed: 0,
          ignition: false,
          level: 80.25,
        },
      ],
      [
        1735625830878,
        78,
        {
          device_timestamp: 1735625830878,
          speed: 0,
          ignition: false,
          level: 78,
        },
      ],
      [
        1735625850878,
        75.75,
        {
          device_timestamp: 1735625850878,
          speed: 0,
          ignition: false,
          level: 75.75,
        },
      ],
      [
        1735625870878,
        73.5,
        {
          device_timestamp: 1735625870878,
          speed: 0,
          ignition: false,
          level: 73.5,
        },
      ],
      [
        1735625890878,
        71.25,
        {
          device_timestamp: 1735625890878,
          speed: 0,
          ignition: false,
          level: 71.25,
        },
      ],
      [
        1735625910878,
        69,
        {
          device_timestamp: 1735625910878,
          speed: 0,
          ignition: false,
          level: 69,
        },
      ],
      [
        1735625930878,
        66.75,
        {
          device_timestamp: 1735625930878,
          speed: 0,
          ignition: false,
          level: 66.75,
        },
      ],
      [
        1735625950878,
        64.5,
        {
          device_timestamp: 1735625950878,
          speed: 0,
          ignition: false,
          level: 64.5,
        },
      ],
      [
        1735625970878,
        62.25,
        {
          device_timestamp: 1735625970878,
          speed: 0,
          ignition: false,
          level: 62.25,
        },
      ],
      [
        1735625990878,
        60,
        {
          device_timestamp: 1735625990878,
          speed: 0,
          ignition: false,
          level: 60,
        },
      ],
      [
        1735626010878,
        57.75,
        {
          device_timestamp: 1735626010878,
          speed: 0,
          ignition: false,
          level: 57.75,
        },
      ],
      [
        1735626030878,
        55.5,
        {
          device_timestamp: 1735626030878,
          speed: 0,
          ignition: false,
          level: 55.5,
        },
      ],
      [
        1735626030879,
        55.5,
        {
          device_timestamp: 1735626030879,
          speed: 0,
          ignition: false,
          level: 55.5,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "blue",
    },
    symbol: "none",
    data: [
      [
        1735626050878,
        53.25,
        {
          device_timestamp: 1735626050878,
          speed: 25,
          ignition: true,
          level: 53.25,
        },
      ],
      [
        1735626050878,
        53.25,
        {
          device_timestamp: 1735626050878,
          speed: 25,
          ignition: true,
          level: 53.25,
        },
      ],
      [
        1735626070878,
        51,
        {
          device_timestamp: 1735626070878,
          speed: 28,
          ignition: true,
          level: 51,
        },
      ],
      [
        1735626090878,
        48.75,
        {
          device_timestamp: 1735626090878,
          speed: 39,
          ignition: true,
          level: 48.75,
        },
      ],
      [
        1735626110878,
        46.5,
        {
          device_timestamp: 1735626110878,
          speed: 46,
          ignition: true,
          level: 46.5,
        },
      ],
      [
        1735626130878,
        44.25,
        {
          device_timestamp: 1735626130878,
          speed: 48,
          ignition: true,
          level: 44.25,
        },
      ],
      [
        1735626190878,
        37.5,
        {
          device_timestamp: 1735626190878,
          speed: 46,
          ignition: true,
          level: 37.5,
        },
      ],
      [
        1735626300878,
        25.13,
        {
          device_timestamp: 1735626300878,
          speed: 51,
          ignition: true,
          level: 25.13,
        },
      ],
      [
        1735626420878,
        11.63,
        {
          device_timestamp: 1735626420878,
          speed: 44,
          ignition: true,
          level: 11.63,
        },
      ],
      [
        1735626540878,
        0,
        {
          device_timestamp: 1735626540878,
          speed: 46.5,
          ignition: true,
          level: 0,
        },
      ],
      [
        1735626540879,
        0,
        {
          device_timestamp: 1735626540879,
          speed: 46.5,
          ignition: true,
          level: 0,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "solid",
      color: "red",
    },
    symbol: "none",
    data: [
      [
        1735626620878,
        0,
        {
          device_timestamp: 1735626620878,
          speed: 51,
          ignition: false,
          level: 0,
        },
      ],
      [
        1735626620878,
        0,
        {
          device_timestamp: 1735626620878,
          speed: 51,
          ignition: false,
          level: 0,
        },
      ],
    ],
    areaStyle: {
      color: {
        colorStops: [
          {
            offset: 0,
            color: "#ACD4FD",
          },
          {
            offset: 1,
            color: "#F5FAFF",
          },
        ],
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: "linear",
        global: false,
      },
    },
  },
  {
    type: "line",
    lineStyle: {
      type: "dashed",
      color: "gray",
    },
    symbol: "none",
    data: [
      [
        1735668900000,
        0,
        {
          device_timestamp: 1735668900000,
          level: 0,
          isLowNetwork: true,
        },
      ],
    ],
  },
];

// From DeepSeek
export function processData(filteredData) {
  let result = [];
  let i = 0;

  while (i < filteredData.length) {
    let current = filteredData[i];
    let next = filteredData[i + 1];

    if (current.isLowNetwork) {
      // Handle isLowNetwork true case
      let firstPoint = [
        current.device_timestamp,
        current.level,
        { ...current },
      ];

      let midTimestamp = (current.device_timestamp + next.device_timestamp) / 2;
      let midLevel = (current.level + next.level) / 2;
      let midPoint = [
        midTimestamp,
        midLevel,
        {
          device_timestamp: current.device_timestamp - 1,
          status: "LOW_NETWORK",
          end_time: next.device_timestamp,
          start_time: current.device_timestamp,
        },
      ];

      result.push({
        type: "line",
        lineStyle: {
          type: "dashed",
          color: "gray",
        },
        symbol: "none",
        data: [firstPoint, midPoint],
      });

      result.push({
        type: "line",
        lineStyle: {
          type: "dashed",
          color: "gray",
        },
        symbol: "none",
        data: [midPoint],
      });

      let lastPoint = [
        next.device_timestamp,
        next.level,
        { ...next, device_timestamp: current.device_timestamp + 1 },
      ];

      result.push({
        type: "line",
        lineStyle: {
          type: "dashed",
          color: "gray",
        },
        symbol: "none",
        data: [midPoint, lastPoint],
      });

      i += 2; // Skip the next element as it's part of the current group
    } else {
      // Handle other cases
      let dataPoints = [];
      let lineColor = current.ignition ? "blue" : "red";
      let symbol = "none";
      let symbolSize = 0;

      if (current.status === "REFUELING" || current.status === "FUEL_THEFT") {
        symbol =
          current.status === "REFUELING"
            ? `image://src/component/img/RefuelIcon.svg`
            : `image://src/component/img/theftIcon.svg`;
        symbolSize = 20;
      }

      // Add previous point if exists
      if (i > 0) {
        let prev = filteredData[i - 1];
        dataPoints.push([
          prev.device_timestamp + 1,
          prev.level,
          { ...prev, device_timestamp: prev.device_timestamp + 1 },
        ]);
      }

      // Add current point
      dataPoints.push([
        current.device_timestamp,
        current.level,
        { ...current },
      ]);

      // Add next point if it's part of the same group
      if (
        next &&
        !next.isLowNetwork &&
        next.ignition === current.ignition &&
        !next.status
      ) {
        dataPoints.push([next.device_timestamp, next.level, { ...next }]);
        i++;
      }

      result.push({
        type: "line",
        lineStyle: {
          type: "solid",
          color: lineColor,
        },
        symbol: symbol,
        symbolSize: symbolSize,
        data: dataPoints,
        areaStyle: current.isLowNetwork
          ? undefined
          : {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#ACD4FD" },
                { offset: 1, color: "#F5FAFF" },
              ]),
            },
      });

      i++;
    }
  }

  return result;
}
