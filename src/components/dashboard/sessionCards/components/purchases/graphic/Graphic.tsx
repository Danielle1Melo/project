"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { styleText } from "util";
const GraphChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import styled from "../../../../../../styles/allStyles/purchases/purchases.module.css"

export function Graphic() {
  const [widthGraph, setWidthGraph] = useState(420);
  const [horizontalGraph, setHorizontalGraph] = useState(false);

  useEffect(() => {
    setHorizontalGraph( window.innerWidth > 1024 ? false : true)

  
    const cardElement = document.getElementById(
      "cardGraphGeneric"
    ) as HTMLElement | null;
    if (cardElement) {
      const cardRect = cardElement.getBoundingClientRect();

      const cardWidth90Percent = cardRect.width * 1;
      setWidthGraph(cardWidth90Percent);
    } else {
      console.log("css not fond");

      setWidthGraph(400);
    }
  }, [])

  const optionsDonutTop: ApexOptions = {
    chart: {
      width: "auto",
      height: "auto",
      type: "donut",
      offsetY: 20,
    },
    plotOptions: {
      pie: {
        customScale: 0.86,
        donut: {
          size: "65%",
        },

      },
    },
    colors: ["#06233D", "#044D88", "#FDCD00", "#E5E7EB"],
    dataLabels: {
      enabled: false,
    },
    series: [7, 6, 5, 3],
    labels: ["Abastecimento", "Shopping", "Restaurante", "Conveniência"],
    legend: {
      show: false,
      position: "bottom",
    },
    
responsive: [{
  breakpoint: 1025,
  options: 1,
}]
  };

  return (
    <div className={styled.graphic}>
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
