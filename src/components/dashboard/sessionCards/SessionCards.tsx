"use client"

import { LatestPurchases } from "./components/LatestPurchases";
import { NextInvoice } from "./components/NextInvoice";
import styled from "../../../styles/allStyles/sessionCards/sessionCards.module.css";
import { Purchases } from "./components/purchases/Purchases";
import { SelectConta } from "./components/SelectConta";
import { useAuth } from "@/context/authContext/AuthContext";



export function SessionCards() {
  const { user, logout } = useAuth()

  return (
    <section className={styled.sessionSpace}>
      <div className={styled.main}>
        <div className={styled.cards}>
          <div className={styled.select}>
            <h1>Olá, {user?.username}!</h1>
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


