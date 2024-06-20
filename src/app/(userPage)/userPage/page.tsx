import { LatestPurchases } from "@/components/dashboard/latestPurchases/LatestPurchases";
import { HeaderPage } from "@/components/header/Header";
import { NextInvoice } from "@/components/dashboard/nextInvoice/NextInvoice";
import { Purchases } from "@/components/dashboard/purchases/Purchases";
import styled from "@/styles/allStyles/userPage.module.css";

export default function UserPage() {
  return (
    <>
      <HeaderPage />

      <div className={styled.content}>
        <div>
          <LatestPurchases />
          <NextInvoice />
        </div>

        <Purchases />
      </div>
    </>
  );
}
