"use client"
import styled from "@/styles/allStyles/lastestPurchases.module.css";
import { ItenCard } from "../itenCard/ItenCard";
import { MainCards } from "../card/MainCards";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const styledItenCard = {
  backgroundColor: "var(--yellow-10)",
};

export async function LatestPurchases() {
  const session = await getServerSession();

  if(!session){
    redirect("/");
  }
  return ( 
    <main className={styled.container}>
      <h1>Olá, {session?.user?.name}!</h1>

      <MainCards title="Últimas compras" subtitle="">
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
      </MainCards>
    </main>
  );
}
