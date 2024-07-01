"use client";

import { CalendarDots, CaretDown, CaretUp } from "@phosphor-icons/react";
import styled from "../../../../styles/allStyles/faturaPage/selectMonth.module.css";
import { useState } from "react";

const months = ["Agosto.2024", "Maio.2024", "Julho.2024"];

const styleClose = {
  height: 0,
  opacity: 0,
  display: "none",
};

const styleOpen = {
  height: "auto",
  opacity: 1,
};

export function SelectMonth() {
  const [selectedMonth, setSelectedMonth] = useState("Junho.2024");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styled.container}>
        <div className={styled.top} onClick={() => setOpen((prev) => !prev)}>
          <CalendarDots size={23} weight="bold" />
          <span>{selectedMonth}</span>
          <CaretDown size={23} style={open ? styleClose : styleOpen} />
          <CaretUp size={23} style={open ? styleOpen : styleClose} />
        </div>
        <div
          className={styled.selectContainer}
          style={open ? styleOpen : styleClose}
        >
          {months.map((month, idx) => (
            <div
              key={idx}
              className={styled.options}
              onClick={() => {
                setSelectedMonth(month);
                setOpen(false);
              }}
            >
              <span>{month}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
