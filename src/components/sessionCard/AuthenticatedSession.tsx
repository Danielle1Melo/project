"use client";

import { LOGO } from "@/utils/logos";
import Image from "next/image";
import styled from "../../styles/allStyles/authenticated.module.css";
import { useRouter } from "next/navigation";
import { Lock, User } from "@phosphor-icons/react";

export default function AuthenticatedSession() {
  const router = useRouter();

  function getPage() {
    router.push("/userPage");
  }

  return (
    <main>
      <section className={styled.header}>
        <Image src={LOGO.I9on} alt="" className={styled.logo} />
      </section>
      <div className={styled.sessions}>
        <section className={styled.firstSession}>
          <h1>Área do Cliente</h1>
          <p>Seja bem vindo(a)!</p>
          <Image src={LOGO.Welcome} alt="" className={styled.welcomeImage} />
        </section>
        <section className={styled.SecondSession}>
          <h3>Login i9ON</h3>
          <p>Acesse com seus dados</p>
          <form className={styled.form}>
            <div className={styled.inputs}>
              <User size={30} className={styled.icon} />
              <input type="text" placeholder="Usuário" />
            </div>

            <div className={styled.inputs}>
              <Lock size={30} className={styled.icon} />
              <input type="password" placeholder="Senha" />
            </div>

            <button
              className={styled.enterBtn}
              type="button"
              onClick={() => getPage()}
            >
              Entrar
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
