"use client";
import { Open } from "./components/Open";
import { Paid } from "./components/Paid";
import { Vencido } from "./components/Vencido";
import styled from "../../../styles/allStyles/faturaPage/sessionCardsFaturas.module.css";

export function SessionCardsFaturas() {
  return (
    <div className={styled.container}>
      <div className={styled.card}>
        <Paid />
      </div>
      <div className={styled.card}>
        <Vencido />
      </div>
      <div className={styled.card}>
        <Open />
      </div>
    </div>
  );
}
