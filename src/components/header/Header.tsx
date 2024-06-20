"use client";

import styled from "@/styles/allStyles/header.module.css";
import { LOGO } from "@/utils/logos";
import Image from "next/image";

export function HeaderPage() {
  return (
    <main className={styled.container}>
      {/* <Image src={LOGO.Mirian} alt="" /> */}
      <div className={styled.menuItens}>
        <button>Início</button>
        <button>Fatura</button>
      </div>
      <div className={styled.sairBtn}>
        <Image src={LOGO.Sair} alt="" />
        <button type="button">Sair</button>
      </div>
    </main>
  );
}
