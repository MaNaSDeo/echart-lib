import * as echarts from "echarts";

export const calculateTimeUnit = (maxTime, minTime) => {
  const timeDifference = maxTime - minTime;
  const oneMinute = 60 * 1000;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;

  if (timeDifference <= oneHour) {
    return { unit: "minute", stepSize: 5 };
  } else if (timeDifference <= oneDay) {
    return { unit: "hour", stepSize: 2 };
  } else if (timeDifference <= 16 * oneDay) {
    return { unit: "day", stepSize: 1 };
  } else if (timeDifference <= 32 * oneDay) {
    return { unit: "day", stepSize: 2 };
  } else {
    return { unit: "month", stepSize: 1 };
  }
};

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function segmentData(dataset) {
  if (!dataset || dataset.length === 0) return [];

  const grandParentArray = [];
  let parentArray = [];
  let lastObj = null;

  for (let i = 0; i < dataset.length; i++) {
    let currentObj = dataset[i];

    if (!currentObj) continue;

    if (currentObj.level === 0) {
      currentObj = { ...currentObj, level: 0.000001 };
    }

    // Handle the first two indexes if both have isLowNetwork: true
    if (i === 1 && dataset[0]?.isLowNetwork && dataset[1]?.isLowNetwork) {
      const midObj = {
        device_timestamp: Math.floor(
          (dataset[0].device_timestamp + dataset[1].device_timestamp) / 2
        ),
        level:
          dataset[0].level !== undefined && dataset[1].level !== undefined
            ? (dataset[0].level + dataset[1].level) / 2
            : dataset[0].level ?? dataset[1].level,
        isLowNetwork: true,
        status: "LOW_NETWORK",
        end_time: dataset[1]?.end_time,
        start_time: dataset[1]?.start_time,
      };
      grandParentArray.push([dataset[0], midObj, dataset[1]]);
      parentArray = [];
      lastObj = {
        device_timestamp: currentObj.device_timestamp + 1,
        ignition: currentObj.ignition,
        level: currentObj.level,
        speed: currentObj.speed,
      };
      continue;
    }

    if (parentArray.length === 0) {
      if (lastObj) {
        parentArray.push(lastObj);
      }
      parentArray.push(currentObj);
    } else {
      if (currentObj.isLowNetwork) {
        if (parentArray.length > 1) grandParentArray.push([...parentArray]);

        const midObj = {
          device_timestamp: Math.floor(
            (lastObj.device_timestamp + currentObj.device_timestamp) / 2
          ),
          level:
            lastObj.level !== undefined && currentObj.level !== undefined
              ? (lastObj.level + currentObj.level) / 2
              : lastObj.level ?? currentObj.level,
          isLowNetwork: true,
          status: "LOW_NETWORK",
          end_time: currentObj?.end_time,
          start_time: currentObj?.start_time,
        };

        parentArray = [lastObj, midObj, currentObj];
        grandParentArray.push([...parentArray]);

        parentArray = [
          {
            device_timestamp: currentObj.device_timestamp + 1,
            ignition: currentObj.ignition,
            level: currentObj.level,
            speed: currentObj.speed,
          },
        ];
      } else {
        parentArray.push(currentObj);
      }
    }
    lastObj = {
      device_timestamp: currentObj.device_timestamp + 1,
      ignition: currentObj.ignition,
      level: currentObj.level,
      speed: currentObj.speed,
    };
  }

  if (parentArray.length > 1) {
    grandParentArray.push([...parentArray]);
  }

  return grandParentArray || [];
}

export const processFuelData = (data, lowNetworkPlots, fuelEventPlots) => {
  let lastLevel = null;

  const processedData = data.map((point) => {
    const { device_timestamp, level } = point;
    const useLastLevel = level === 0 || level === undefined ? lastLevel : level;
    lastLevel = point?.level || lastLevel;

    const lowNetworkMatch = lowNetworkPlots.find(
      (plot) => point?.device_timestamp === plot?.end_time
    );

    const fuelEventMatch = fuelEventPlots?.find(
      (plot) =>
        plot?.start_location?.device_timestamp === point?.device_timestamp
    );

    if (lowNetworkMatch || fuelEventMatch) {
      let isLowNetwork = null;
      let level = point?.level || useLastLevel;
      let status = null;
      let address = null;
      let fuel_reading_count = null;
      let status_display_text = null;
      let end_time = null;
      let start_time = null;

      if (lowNetworkMatch && fuelEventMatch) {
        isLowNetwork = true;
        level = point?.level || useLastLevel;
        end_time = lowNetworkMatch.end_time;
        start_time = lowNetworkMatch.start_time;
        status = fuelEventMatch?.status;
        address = fuelEventMatch?.start_location?.address?.display_text;
        fuel_reading_count = fuelEventMatch?.fuel_reading_count;
        status_display_text = fuelEventMatch?.status_display_text;
      } else if (lowNetworkMatch) {
        isLowNetwork = true;
        level = point?.level || useLastLevel;
        end_time = lowNetworkMatch.end_time;
        start_time = lowNetworkMatch.start_time;
      } else if (fuelEventMatch) {
        isLowNetwork = null;
        status = fuelEventMatch?.status;
        address = fuelEventMatch?.start_location?.address?.display_text;
        fuel_reading_count = fuelEventMatch?.fuel_reading_count;
        status_display_text = fuelEventMatch?.status_display_text;
      }
      return {
        ...point,
        isLowNetwork,
        level,
        status,
        address,
        fuel_reading_count,
        status_display_text,
        end_time,
        start_time,
      };
    } else {
      return point;
    }
  });
  return (
    processedData?.sort((a, b) => a.device_timestamp - b.device_timestamp) || []
  );
};

export const getFilteredFuelData = (
  processedFuelData,
  selectedStartTime,
  selectedEndTime
) => {
  if (!processedFuelData) return [];

  const beforeStart = processedFuelData
    .filter((item) => item?.device_timestamp && item?.level != null)
    .reverse()
    .find(
      (item) => new Date(item?.device_timestamp)?.getTime() < selectedStartTime
    );

  const afterEnd = processedFuelData.find(
    (item) => new Date(item?.device_timestamp)?.getTime() > selectedEndTime
  );

  const filtered = processedFuelData?.filter((item) => {
    if (!item?.device_timestamp || item?.level == null) {
      return false;
    }

    const timestamp = new Date(item?.device_timestamp)?.getTime();
    return timestamp >= selectedStartTime && timestamp <= selectedEndTime;
  });

  const firstObject = filtered?.[0];
  const lastObject = filtered?.[filtered?.length - 1];
  let newStartObject = null;
  let newEndObject = null;

  if (firstObject) {
    if (beforeStart) {
      const timeDiffBefore =
        selectedStartTime - new Date(beforeStart?.device_timestamp)?.getTime();
      const timeDiffFirst =
        new Date(firstObject?.device_timestamp)?.getTime() - selectedStartTime;
      const totalDiff = timeDiffBefore + timeDiffFirst;
      const level =
        (beforeStart?.level * timeDiffFirst +
          firstObject?.level * timeDiffBefore) /
        totalDiff;

      newStartObject = {
        device_timestamp: selectedStartTime,
        level: level,
        isLowNetwork: beforeStart?.isLowNetwork,
      };
    } else {
      newStartObject = {
        device_timestamp: selectedStartTime,
        level: firstObject?.level,
        isLowNetwork: true,
      };
    }
  }

  if (lastObject) {
    if (afterEnd) {
      const timeDiffLast =
        selectedEndTime - new Date(lastObject?.device_timestamp)?.getTime();
      const timeDiffAfter =
        new Date(afterEnd?.device_timestamp)?.getTime() - selectedEndTime;
      const totalDiff = timeDiffLast + timeDiffAfter;
      const level =
        (lastObject?.level * timeDiffAfter + afterEnd?.level * timeDiffLast) /
        totalDiff;

      newEndObject = {
        device_timestamp: selectedEndTime,
        level: level,
        isLowNetwork: afterEnd?.isLowNetwork,
      };
    } else {
      newEndObject = {
        device_timestamp: selectedEndTime,
        level: lastObject?.level,
        isLowNetwork: true,
      };
    }
  }

  const extendedFilteredData = [
    ...(newStartObject ? [newStartObject] : []),
    ...filtered,
    ...(newEndObject ? [newEndObject] : []),
  ];

  return (
    extendedFilteredData?.sort(
      (a, b) => a.device_timestamp - b.device_timestamp
    ) || []
  );
};

/**
 * Transforms filtered fuel sensor data into a format suitable for ECharts visualization
 * @param {Array} filteredData - Array of data points with various fuel sensor information
 * @returns {Array} - Array of series objects formatted for ECharts
 */
export function transformDataForChart(filteredData) {
  if (!filteredData || filteredData.length === 0) {
    return [];
  }

  const result = [];
  let currentSeries = null;
  let lastProcessedPoint = null;

  for (let i = 0; i < filteredData.length; i++) {
    const currentPoint = filteredData[i];
    const nextPoint = i < filteredData.length - 1 ? filteredData[i + 1] : null;

    // Handle special status points: isLowNetwork, REFUELING, FUEL_THEFT
    if (currentPoint.isLowNetwork === true) {
      // Handle low network points (create 3 series objects)
      handleLowNetworkPoint(
        currentPoint,
        nextPoint,
        result,
        lastProcessedPoint
      );
      lastProcessedPoint = nextPoint;
      i++; // Skip the next point as it's already been processed
      continue;
    } else if (
      currentPoint.status === "REFUELING" ||
      currentPoint.status === "FUEL_THEFT"
    ) {
      // Handle refueling or fuel theft points
      handleSpecialStatusPoint(currentPoint, result, lastProcessedPoint);
      lastProcessedPoint = currentPoint;
      continue;
    }

    // Handle normal points (grouped by ignition state)
    // If we need to start a new series or change the series type
    if (
      !currentSeries ||
      (lastProcessedPoint &&
        lastProcessedPoint.ignition !== currentPoint.ignition)
    ) {
      // If there's a current series, add the current point to it for continuity
      if (currentSeries && lastProcessedPoint) {
        const lastTimestamp = lastProcessedPoint.device_timestamp;
        currentSeries.data.push([
          lastTimestamp,
          lastProcessedPoint.level,
          { ...lastProcessedPoint, device_timestamp: lastTimestamp + 1 },
        ]);
      }

      // Create a new series
      currentSeries = createNormalSeries(currentPoint);
      result.push(currentSeries);

      // Add the starting point (which may be the last processed point for continuity)
      if (lastProcessedPoint) {
        currentSeries.data.push([
          lastProcessedPoint.device_timestamp,
          lastProcessedPoint.level,
          {
            ...lastProcessedPoint,
            device_timestamp: lastProcessedPoint.device_timestamp + 1,
          },
        ]);
      }
    }

    // Add current point to the current series
    currentSeries.data.push([
      currentPoint.device_timestamp,
      currentPoint.level,
      { ...currentPoint },
    ]);

    lastProcessedPoint = currentPoint;
  }

  return result;
}

/**
 * Creates a normal data series object based on point characteristics
 * @param {Object} point - Data point
 * @returns {Object} - Series configuration object
 */
export function createNormalSeries(point) {
  const series = {
    type: "line",
    lineStyle: {
      type: "solid",
      color: point.ignition ? "blue" : "red",
    },
    symbol: "none",
    data: [],
  };

  // Add areaStyle if not a low network point
  if (!point.isLowNetwork) {
    series.areaStyle = {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#ACD4FD" },
        { offset: 1, color: "#F5FAFF" },
      ]),
    };
  }

  return series;
}

/**
 * Handles low network points, creating three series objects
 * @param {Object} currentPoint - Current low network point
 * @param {Object} nextPoint - Next point in the sequence
 * @param {Array} result - Result array to push series to
 * @param {Object} lastProcessedPoint - Last point that was processed
 */
export function handleLowNetworkPoint(
  currentPoint,
  nextPoint,
  result,
  lastProcessedPoint
) {
  if (!nextPoint || !nextPoint.isLowNetwork) {
    // If there's no next point or it's not a low network point, handle as a single point
    const lowNetworkSeries = {
      type: "line",
      lineStyle: {
        type: "dashed",
        color: "gray",
      },
      symbol: "none",
      data: [
        [
          currentPoint.device_timestamp,
          currentPoint.level,
          { ...currentPoint },
        ],
      ],
    };
    result.push(lowNetworkSeries);
    return;
  }

  // First series - contains first point and midpoint
  const firstLowNetworkSeries = {
    type: "line",
    lineStyle: {
      type: "dashed",
      color: "gray",
    },
    symbol: "none",
    data: [
      [currentPoint.device_timestamp, currentPoint.level, { ...currentPoint }],
      [
        (currentPoint.device_timestamp + nextPoint.device_timestamp) / 2,
        (currentPoint.level + nextPoint.level) / 2,
        {
          device_timestamp:
            (currentPoint.device_timestamp + nextPoint.device_timestamp) / 2 -
            1, // So that we will not get 2 dataset in tooltip.
          status: "LOW_NETWORK",
          end_time: nextPoint.end_time || nextPoint.device_timestamp,
          start_time: currentPoint.start_time || currentPoint.device_timestamp,
        },
      ],
    ],
  };
  result.push(firstLowNetworkSeries);

  // Second series - contains only midpoint
  const secondLowNetworkSeries = {
    type: "line",
    lineStyle: {
      type: "dashed",
      color: "gray",
    },
    symbol: "none",
    data: [
      [
        (currentPoint.device_timestamp + nextPoint.device_timestamp) / 2,
        (currentPoint.level + nextPoint.level) / 2,
        {
          device_timestamp: currentPoint.device_timestamp,
          status: "LOW_NETWORK",
          end_time: nextPoint.end_time || nextPoint.device_timestamp,
          start_time: currentPoint.start_time || currentPoint.device_timestamp,
        },
      ],
    ],
  };
  result.push(secondLowNetworkSeries);

  // Third series - contains midpoint and second point
  const thirdLowNetworkSeries = {
    type: "line",
    lineStyle: {
      type: "dashed",
      color: "gray",
    },
    symbol: "none",
    data: [
      [
        (currentPoint.device_timestamp + nextPoint.device_timestamp) / 2,
        (currentPoint.level + nextPoint.level) / 2,
        {
          device_timestamp:
            (currentPoint.device_timestamp + nextPoint.device_timestamp) / 2 +
            1, // So that we will not get 2 dataset in tooltip.
          status: "LOW_NETWORK",
          end_time: nextPoint.end_time || nextPoint.device_timestamp,
          start_time: currentPoint.start_time || currentPoint.device_timestamp,
        },
      ],
      [nextPoint.device_timestamp, nextPoint.level, { ...nextPoint }],
    ],
  };
  result.push(thirdLowNetworkSeries);
}

/**
 * Handles special status points like REFUELING or FUEL_THEFT
 * @param {Object} point - Current point with special status
 * @param {Array} result - Result array to push series to
 * @param {Object} lastProcessedPoint - Last point that was processed
 */
export function handleSpecialStatusPoint(point, result, lastProcessedPoint) {
  // If there was a previous series, add this point to it first (with modified timestamp)
  if (result.length > 0 && lastProcessedPoint) {
    const lastSeries = result[result.length - 1];
    lastSeries.data.push([
      point.device_timestamp - 1,
      point.level,
      {
        ...point,
        device_timestamp: point.device_timestamp - 1,
      },
    ]);
  }

  // Create a new series for the special status point
  const specialStatusSeries = {
    type: "line",
    lineStyle: {
      type: "solid",
      color: point.ignition ? "blue" : "red",
    },
    symbol:
      // point.status === "REFUELING"
      //   ? `image://src/component/img/RefuelIcon.svg`
      //   : `image://src/component/img/theftIcon.svg`,
      point.status === "REFUELING"
        ? `image://src/component/img/logogoogle.svg`
        : `image://src/component/img/logogoogle.svg`,
    symbolSize: 20,
    data: [[point.device_timestamp, point.level, { ...point }]],
  };

  // Add areaStyle if not a low network point
  if (!point.isLowNetwork) {
    specialStatusSeries.areaStyle = {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#ACD4FD" },
        { offset: 1, color: "#F5FAFF" },
      ]),
    };
  }

  result.push(specialStatusSeries);

  // Create another series for continuity to the next point
  const continuationSeries = {
    type: "line",
    lineStyle: {
      type: "solid",
      color: point.ignition ? "blue" : "red",
    },
    symbol: "none",
    data: [
      [
        point.device_timestamp + 1,
        point.level,
        {
          ...point,
          device_timestamp: point.device_timestamp + 1,
        },
      ],
    ],
  };

  // Add areaStyle if not a low network point
  if (!point.isLowNetwork) {
    continuationSeries.areaStyle = {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#ACD4FD" },
        { offset: 1, color: "#F5FAFF" },
      ]),
    };
  }

  result.push(continuationSeries);
}
