"use client";

import {  CalendarDots } from "@phosphor-icons/react";
import styled from "../../../styles/allStyles/faturaPage/selectMonth.module.css";

export function SelectMonth() {
  return (
    <div className={styled.container}>
      <CalendarDots size={23}  weight="bold"/>
      <select className={styled.selectContainer}>
        <option>
          Junho.2024
        </option>
        <option>
          Agosto.2024
        </option>
        <option>
          Maio.2024
        </option>
        <option>
          Julho.2024
        </option>
      </select>
    </div>
  );
}
