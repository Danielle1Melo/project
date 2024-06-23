"use client";

import styled from "@/styles/allStyles/header.module.css";
import { LOGO } from "@/utils/logos";
import { SignOut } from "@phosphor-icons/react";
import Image from "next/image";

export function HeaderPage() {
  return (
    <main className={styled.container}>
      <Image src={LOGO.I9on} alt="" />
      <div className={styled.menuItens}>
        <button>Início</button>
        <button>Fatura</button>
      </div>
      <div className={styled.sairBtn}>
        <SignOut size={35} color="#ffffff" />
        <button type="button">Sair</button>
      </div>
    </main>
  );
}
