"use client";

import { LOGO } from "@/utils/logos";
import Image from "next/image";
import styled from "../../styles/allStyles/authenticated.module.css";
import { useRouter } from "next/navigation";

export default function AuthenticatedSession() {
  const router = useRouter();

  function getPage() {
    router.push("/userPage");
  }

  return (
    <main>
      <section className={styled.header}>
        <Image src={LOGO.Mirian} alt="" />
      </section>
      <div className={styled.sessions}>
        <section className={styled.firstSession}>
          <h1>Área do Cliente</h1>
          <p>Seja bem vindo(a)!</p>
          <Image src={LOGO.Welcome} alt="" />
        </section>
        <section className={styled.SecondSession}>
          <h3>Login Mirian</h3>
          <p>Acesse com seus dados</p>
          <form className={styled.form}>
            <div className={styled.inputs}>
              <Image src={LOGO.User} alt="" width={35} height={35} />
              <input type="text" placeholder="Usuário" />
            </div>

            <div className={styled.inputs}>
              <Image src={LOGO.Password} alt="" width={35} height={35} />
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
