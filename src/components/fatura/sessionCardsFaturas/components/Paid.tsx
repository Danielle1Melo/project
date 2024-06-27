"use client";

import { CardFatura } from "../../cardFatura/CardFatura";
import { CurrencyDollarSimple, Spinner } from "@phosphor-icons/react";

const styledItenCard = {
  backgroundColor: "var(--background)",
  border: "5px solid var(--backgroud-icon)",
  borderRadius: "20px",
};

export function Paid() {
  return (
    <div style={styledItenCard}>
      <CardFatura
        title="PAGO"
        icon={<CurrencyDollarSimple size={40} color="#003B6B" />}
        valueDecimal={450}
      />
    </div>
  );
}
