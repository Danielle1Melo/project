"use client";

import { CardFatura } from "../../cardFatura/CardFatura";
import { CurrencyDollarSimple } from "@phosphor-icons/react";
import styled from "../../../../styles/allStyles/faturaPage/cardFatura.module.css";

const styledItenCard = {
  backgroundColor: "var(--background)",
  border: "3px solid var(--backgroud-icon)",
  borderRadius: "20px",
};

export function Paid() {
  return (
    <div style={styledItenCard} className={styled.cardOpen}>
      <CardFatura title="PAGO" valueDecimal={4500} />

      <div className={styled.contentIconPaid}>
        <CurrencyDollarSimple
          size={25}
          color="##003B6B"
          className={styled.openIcon}
        />
      </div>
    </div>
  );
}
