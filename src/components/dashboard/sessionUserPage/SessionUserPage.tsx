import { LatestPurchases } from "../sessionCards/components/sessionInvoices/LatestPurchases";
import { NextInvoice } from "../sessionCards/components/sessionInvoices/NextInvoice";
import { Purchases } from "../sessionCards/components/purchases/Purchases";

export function SessionUserPage() {
  return (
    <div>
      <div>
        <LatestPurchases />

        <NextInvoice />
      </div>

      <Purchases />
    </div>
  );
}
