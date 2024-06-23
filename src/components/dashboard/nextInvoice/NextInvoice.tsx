"use client";

import styled from "@/styles/allStyles/nextInvoice.module.css";
import { ItenCard } from "../itenCard/ItenCard";
import { Card } from "../card/Card";

const styledItenCard = {
  backgroundColor: "var(--danger-10)",
  fontSize: "25px",
};

export function NextInvoice() {
  return (
    <main className={styled.container}>
      <Card title="Próxima fatura" subtitle="Vence dia 20 de junho">
        <section className={styled.section} style={styledItenCard}>
          <ItenCard title="Valor Total" valueDecimal={225.11} />
        </section>

        <div className={styled.details}>
          <button type="button">Detalhes da fatura</button>
          <span className={styled.separator}></span>
          <button type="button">Abrir 2° via da fatura</button>
        </div>
      </Card>
    </main>
  );
}
