"use client";

import { CardFatura } from "../../cardFatura/CardFatura";
import { Coins } from "@phosphor-icons/react";
import styled from "../../../../styles/allStyles/faturaPage/cardFatura.module.css";

const styledItenCard = {
  border: "3px solid var(--backgroud-danger)",
  color: "var(--danger)",
  borderRadius: "20px",
};

export function Vencido() {
  return (
    <div style={styledItenCard} className={styled.cardOpen}>
      <CardFatura title="VENCIDO" valueDecimal={4500} />

      <div className={styled.openIconVencido}>
        <Coins size={25} color="#AD1212" className={styled.openIcon} />
      </div>
    </div>
  );
}
