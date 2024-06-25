"use client";

import { LOGO } from "@/utils/logos";
import Image from "next/image";
import styled from "../../styles/allStyles/authenticated.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, User } from "@phosphor-icons/react";
import { signIn } from "next-auth/react";

export default function AuthenticatedSession() {
  const router = useRouter();

  function login() {
    router.push("/userPage");
  }
  // const searchParams = useSearchParams();
  // const error = searchParams.get("error");

  // async function login(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);

  //   const data = {
  //     email: formData.get('email'),
  //     password: formData.get('password'),
  //   }

  //   signIn("credentials", {
  //     ...data,
  //     callbackUrl:"/userPage"
  //   })
  // }

  return (
    <main className={styled.container}>
      <section className={styled.header}>
        <Image src={LOGO.I9on} alt="" className={styled.logo} />
        <p className={styled.subtitle}>Seja bem vindo(a)!</p>
      </section>
      <div className={styled.sessions}>
        <section className={styled.firstSession}>
          <h1>Área do Cliente</h1>
          <p>Seja bem vindo(a)!</p>
          <Image src={LOGO.Welcome} alt="" />
        </section>
        <section className={styled.SecondSession}>
          <h3>Login i9ON</h3>
          <p>Acesse com seus dados</p>
          <form className={styled.form}>
            <div className={styled.inputs}>
              <User size={30} className={styled.icon} />
              <input type="text" placeholder="Usuário" name="email" />
            </div>

            <div className={styled.inputs}>
              <Lock size={30} className={styled.icon} />
              <input type="password" placeholder="Senha" name="password" />
            </div>

            <button
              className={styled.enterBtn}
              type="button"
              onClick={() => login()}
            >
              Entrar
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
