"use client";
import { Open } from "./components/Open";
import { Paid } from "./components/Paid";
import { Vencido } from "./components/Vencido";
import styled from "../../../styles/allStyles/faturaPage/sessionCardsFaturas.module.css";
import { SelectMonth } from "./components/SelectMonth";
import { TableFatura } from "./components/tableFatura/TableFatura";

export function SessionCardsFaturas() {
  return (
    <div className={styled.sessionSpace}>
      <div className={styled.main}>
        <div className={styled.sessionTop}>
          <h1>Faturas</h1>
          <SelectMonth />
        </div>
        <div className={styled.main01}>
          <div className={styled.sessionCard}>
            <Paid />
          </div>
          <div className={styled.sessionCard}>
            <Vencido />
          </div>
          <div className={styled.sessionCard}>
            <Open />
          </div>
        </div>
        <TableFatura />
      </div>
    </div>
  );
}
