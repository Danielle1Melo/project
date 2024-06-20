"use client";

import styled from "@/styles/allStyles/nextInvoice.module.css";

export function NextInvoice() {
  return (
    <main className={styled.container}>
      <div className={styled.content}>
        <h3>Próxima fatura</h3>
        <p>Vence dia 20 de junho</p>

        <section className={styled.section}>
          <p>Valor Total</p>
          <h3>R$225,11</h3>
        </section>

        <div className={styled.details}>
          <button type="button">Detalhes da fatura</button>
          <span className={styled.separator}></span>
          <button type="button">Abrir 2° via da fatura</button>
        </div>
      </div>
    </main>
  );
}
