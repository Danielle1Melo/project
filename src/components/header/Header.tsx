"use client";

import useStatusMenuContext from "@/context/contextSidebar/useStatusContext";
import styled from "@/styles/allStyles/header.module.css";
import { LOGO } from "@/utils/logos";
import { List, SignOut } from "@phosphor-icons/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import SideBar from "../sidebar/Sidebar";
import { useRouter } from "next/navigation";
export function HeaderPage() {
  const { activeMenu, statusMenu } = useStatusMenuContext();
  const router = useRouter();

  return (
    <>
      <div className={styled.sidebar}>
        <SideBar />
      </div>
      <main className={styled.container}>
        <Image src={LOGO.I9on} alt="" className={styled.logo} />

        <div className={styled.menuItens}>
          <button onClick={() => router.push("/mainPage")}>Início</button>
          <button onClick={() => router.push("/faturas")}>Fatura</button>
        </div>
        <div className={styled.sairBtn}>
          <SignOut size={35} color="#ffffff" />
          <button type="button" onClick={() => router.push("/")}>
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
