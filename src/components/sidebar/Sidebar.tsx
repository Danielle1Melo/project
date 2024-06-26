"use client";
import useStatusMenuContext from "@/context/contextSidebar/useStatusContext";
import styled from "../../styles/allStyles/sidebar.module.css";
import { CreditCard, House, SignOut, X } from "@phosphor-icons/react";
import { LOGO } from "@/utils/logos";
import Image from "next/image";
import { urlLinks } from "@/utils/urlLinks";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function SideBar() {
  const { activeMenu, statusMenu } = useStatusMenuContext();

  return (
    <div
      className={styled.container}
      style={
        statusMenu
          ? {
              transform: "translateY(-100%)",
            }
          : {}
      }
    >
      <div className={styled.contianerItens}>
        <div className={styled.header}>
          <Image src={LOGO.I9on} alt="" className={styled.logo} />
          <X onClick={() => activeMenu()} size={30} color="#ffffff" />
        </div>

        <div className={styled.navBar}>
          <div className={styled.buttons}>
            <House size={30} color="#ffffff" />
            <button>Início</button>
          </div>
          <div className={styled.buttons}>
            <CreditCard size={30} color="#ffffff" />
            <button>Fatura</button>
          </div>

          <div className={styled.buttons}>
            <SignOut size={30} color="#ffffff" />
            <button type="button" onClick={() => signOut({ callbackUrl: "/" })}>
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
