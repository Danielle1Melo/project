"use client";
import useStatusMenuContext from "@/context/contextSidebar/useStatusContext";
import styled from "../../styles/allStyles/sidebar.module.css";
import { X } from "@phosphor-icons/react";
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
              transform: "translateX(100%)",
            }
          : {}
      }
    >
      <div className={styled.contianerItens}>
        <header>
          <X onClick={() => activeMenu()} size={30} color="#ffffff"/>

          <Image src={LOGO.I9on} alt="" />
        </header>

        <div className={styled.navBar}>
          {urlLinks.map((url) => {
            return (
              <Link key={url.id} href={url.url} className={styled.link}>
                {url.name}
              </Link>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className={styled.buttonLogoutSession}
        type="button"
      >
        Sair
      </button>
    </div>
  );
}
