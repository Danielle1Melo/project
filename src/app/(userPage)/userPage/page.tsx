import { LatestPurchases } from "@/components/dashboard/sessionCards/components/sessionInvoices/LatestPurchases";
import { HeaderPage } from "@/components/header/Header";
import { NextInvoice } from "@/components/dashboard/sessionCards/components/NextInvoice";
import { Purchases } from "@/components/dashboard/sessionCards/components/purchases/Purchases";
import styled from "@/styles/allStyles/userPage.module.css";
import { SessionCards } from "@/components/dashboard/sessionCards/SessionCards";

export default function UserPage() {
  return (
    <>
      <HeaderPage />

      <SessionCards />
    </>
  );
}
