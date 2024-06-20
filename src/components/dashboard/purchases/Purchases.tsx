"use client";

import styled from "@/styles/allStyles/purchases/purchases.module.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Card } from "../card/Card";
import { Graphic } from "./graphic/Graphic";
import { TablePurchases } from "./tablePurchases/TablePurchases";

export function Purchases() {
  return (
    <main className={styled.container}>
      <Card title="Compras" subtitle="por Postos Mirian">
        <div className={styled.search}>
          <input type="text" placeholder="Pesquise aqui " />

          <button className={styled.searchBtn}>
            <MagnifyingGlass size={24} />
          </button>
        </div>
        <div>
          <Graphic />
          <TablePurchases />
        </div>
      </Card>
    </main>
  );
}
