import { LatestPurchases } from "./LatestPurchases";
import { NextInvoice } from "./NextInvoice";
import styled from "../../../../../styles/allStyles/sessionCards.module.css";

export function SessionInvoices() {
  return (
    <section className={styled.sessionSpace}>
      <h1>Olá, Danielle!</h1>
      <div className={styled.main}>
        <div className={styled.sessionCard}>
          <LatestPurchases />
        </div>
        <div className={styled.sessionCard}>
          <NextInvoice />
        </div>
      </div>
    </section>
  );
}
