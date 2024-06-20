"use client";
import styled from "@/styles/allStyles/lastestPurchases.module.css";
import { ItenCard } from "../itenCard/ItenCard";
import { Card } from "../card/Card";

const styledItenCard = {
  backgroundColor: "var(--yellow-10)",
};

export function LatestPurchases() {
  return (
    <main className={styled.container}>
      <h1>Olá, João!</h1>

      <Card title="Últimas compras" subtitle="">
        <div className={styled.sections}>
          <section style={styledItenCard}>
            <ItenCard title="Posto Mirian 02" valueDecimal={625.5} />
          </section>
          <section style={styledItenCard}>
            <ItenCard title="Posto Mirian 02" valueDecimal={625.5} />
          </section>
          <section style={styledItenCard}>
            <ItenCard title="Posto Mirian 02" valueDecimal={625.5} />
          </section>
        </div>
      </Card>
    </main>
  );
}
