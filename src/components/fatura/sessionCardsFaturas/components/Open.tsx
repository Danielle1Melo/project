"use client";

import { CardFatura } from "../../cardFatura/CardFatura";
import { Spinner } from "@phosphor-icons/react";

const styledItenCard = {
  backgroundColor: "var(--background)",
  border: "5px solid var(--gray-10)",
  borderRadius: "20px",
};

export function Open() {
  return (
    <div style={styledItenCard}>
      <CardFatura
        title="EM ABERTO"
        icon={<Spinner size={35} color="#4E4E4E" />}
        valueDecimal={450}
      />
    </div>
  );
}
