"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";
const GraphChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function Graphic() {
  const [widthGraph, setWidthGraph] = useState(420);

  const optionsDonutTop: ApexOptions = {
    chart: {
      height: 265,
      type: "donut",
      offsetY: 20,
    },
    plotOptions: {
      pie: {
        customScale: 0.86,
        donut: {
          size: "65S%",
        },
        dataLabels: {
          // enabled: false,
        },
      },
    },
    colors: ["#06233D", "#044D88", "#FDCD00", "#E5E7EB"],

    series: [7, 6, 5, 3],
    labels: ["Abastecimento", "Shopping", "Restaurante", "Conveniência"],
    legend: {
      show: false,
      position: "bottom",
    },
  };

  return (
    <div>
      <GraphChart
        type="donut"
        height={385}
        options={optionsDonutTop}
        series={optionsDonutTop.series}
        width={widthGraph}
      />
    </div>
  );
}
