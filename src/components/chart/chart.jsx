// third parties:
import { Chart as ChartInstance, registerables } from "chart.js";

// react:
import { useEffect } from "react";

// style:
import "./chart.scss";

const Chart = ({ data, type }) => {
  const { randomLabels, randomData } = data;

  ChartInstance.register(...registerables);

  const chartData = {
    labels: randomLabels,
    datasets: [
      {
        label: "My Dataset",
        data: randomData,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    const config = {
      type: type,
      data: chartData,
    };

    const mainChart = new ChartInstance("mainChart", config);

    return () => {
      mainChart.destroy();
    };
  }, [data]);

  return (
    <div className="chart">
      <canvas id="mainChart" />
    </div>
  );
};

export default Chart;
