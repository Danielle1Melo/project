"use client";

import styled from "@/styles/allStyles/sessionCards/nextInvoice.module.css";
import { ItenCard } from "../../itenCard/ItenCard";
import { MainCards } from "../../card/MainCards";

const styledItenCard = {
  backgroundColor: "var(--danger-10)",
};

export function NextInvoice() {
  return (
    <main className={styled.container} >
      <MainCards title="Próxima fatura" subtitle="Vence dia 20 de junho">
        <section className={styled.section} style={styledItenCard}>
          <ItenCard title="Valor Total" valueDecimal={225.11} />
        </section>

        <div className={styled.details}>
          <button type="button">Detalhes da fatura</button>
          <span className={styled.separator}></span>
          <button type="button">Abrir 2° via da fatura</button>
        </div>
      </MainCards>
    </main>
  );
}
