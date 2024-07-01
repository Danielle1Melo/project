"use client";
import styled from "../../../../styles/allStyles/sessionCards/selectConta.module.css";

export function SelectConta() {
  return (
    <div className={styled.container}>
      <select className={styled.selectContainer}>
        <option>Selecione sua conta</option>
      </select>
    </div>
  );
}
