"use client";
import styled from "@/styles/allStyles/lastestPurchases.module.css";

export function LatestPurchases() {
  return (
    <main className={styled.container}>
      <h1>Olá, João!</h1>

      <section className={styled.card}>
        <h3>Últimas compras</h3>

        <div className={styled.sections}>
          <section>
            <p>Posto Mirian 02</p>
            <h3>R$625,50</h3>
          </section>
          <section>
            <p>Posto Mirian 05</p>
            <h3>R$576,00</h3>
          </section>
          <section>
            <p>Posto Mirian 01</p>
            <h3>R$491,75</h3>
          </section>
        </div>
      </section>
    </main>
  );
}
