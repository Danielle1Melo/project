import { LatestPurchases } from "../latestPurchases/LatestPurchases";
import { NextInvoice } from "../sessionCards/components/NextInvoice";
import { Purchases } from "../purchases/Purchases";

export function SessionUserPage(){
    return (
        <div>
            <div>
                <LatestPurchases />

                <NextInvoice />
            </div>

            <Purchases />
        </div>
    )
}