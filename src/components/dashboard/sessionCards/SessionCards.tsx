import styled from "../../../styles/allStyles/sessionCards.module.css";
import { Purchases } from "./components/purchases/Purchases";
import { SessionInvoices } from "./components/sessionInvoices/SessionInvoices";

export function SessionCards() {
  return (
    <section className={styled.main}>
      <div className={styled.main02}>
        <SessionInvoices />
        <div className={styled.sessionCardPurchases}>
          <Purchases />
        </div>
      </div>
    </section>
  );
}
