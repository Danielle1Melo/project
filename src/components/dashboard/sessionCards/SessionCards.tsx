import { LatestPurchases } from "./components/LatestPurchases";
import { NextInvoice } from "./components/NextInvoice";
import styled from "../../../styles/allStyles/sessionCards/sessionCards.module.css";
import { Purchases } from "./components/purchases/Purchases";
import { SelectConta } from "./components/SelectConta";

export function SessionCards() {
  return (
    <section className={styled.sessionSpace}>
      <div className={styled.main}>
        <div className={styled.cards}>
          <div className={styled.select}>
            <h1>Olá, Danielle!</h1>
            <SelectConta />
          </div>

          <div className={styled.sessionCard}>
            <LatestPurchases />
          </div>
          <div className={styled.sessionCard}>
            <NextInvoice />
          </div>
        </div>
        <div className={styled.sessionCardPurchases}>
          <Purchases />
        </div>
      </div>
    </section>
  );
}
