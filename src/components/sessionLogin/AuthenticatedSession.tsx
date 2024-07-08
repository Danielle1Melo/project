"use client";

import { LOGO } from "@/utils/logos";
import Image from "next/image";
import styled from "../../styles/allStyles/authenticated.module.css";
import { useRouter } from "next/navigation";
import { Lock, User } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext/AuthContext";

export default function AuthenticatedSession() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: any) {
    await signIn(data);
  }

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
          <form className={styled.form} onSubmit={handleSubmit(handleSignIn)}>
            <div className={styled.inputs}>
              <User size={30} className={styled.icon} />
              <input
                {...register("email")}
                type="text"
                placeholder="Usuário"
                name="email"
                id="email-address"
                required
              />
            </div>

            <div className={styled.inputs}>
              <Lock size={30} className={styled.icon} />
              <input
                {...register("password")}
                type="password"
                placeholder="Senha"
                name="password"
                id="password"
                required
              />
            </div>

            <button
              className={styled.enterBtn}
              type="submit"
              // onClick={() => router.push("/mainPage")}
            >
              Entrar
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
