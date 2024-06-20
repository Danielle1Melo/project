"use client";

import styled from "@/styles/allStyles/purchases.module.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import dynamic from "next/dynamic";

export function Purchases() {
  return (
    <main className={styled.container}>
      <div className={styled.title}>
        <h3>Compras</h3>
        <p>por Postos Mirian</p>
      </div>

      <div className={styled.search}>
        <input type="text" placeholder="Pesquise aqui " />

        <button className={styled.searchBtn}>
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </main>
  );
}
