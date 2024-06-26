"use client";

import useStatusMenuContext from "@/context/contextSidebar/useStatusContext";
import styled from "@/styles/allStyles/header.module.css";
import { LOGO } from "@/utils/logos";
import { List, SignOut } from "@phosphor-icons/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import SideBar from "../sidebar/Sidebar";

export function HeaderPage() {
  const { activeMenu, statusMenu } = useStatusMenuContext();

  return (
    <>
      <div style={!statusMenu ? { height: "100%" }: { height: "0" }}>
        <SideBar />
      </div>
      <main className={styled.container}>
        <Image src={LOGO.I9on} alt="" className={styled.logo} />

        <div className={styled.menuItens}>
          <button>Início</button>
          <button>Fatura</button>
        </div>
        <div className={styled.sairBtn}>
          <SignOut size={35} color="#ffffff" />
          <button type="button" onClick={() => signOut()}>
            Sair
          </button>
        </div>

        <List
          size={35}
          color="#ffffff"
          className={styled.menuIcon}
          onClick={() => activeMenu()}
        />
      </main>
    </>
  );
}
