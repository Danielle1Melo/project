"use client"

import { LatestPurchases } from "./components/LatestPurchases";
import { NextInvoice } from "./components/NextInvoice";
import styled from "../../../styles/allStyles/sessionCards/sessionCards.module.css";
import { Purchases } from "./components/purchases/Purchases";
import { SelectConta } from "./components/SelectConta";
import {  useContext, useEffect } from "react";
import { AuthContext } from "@/context/authContext/AuthContext";
import { api } from "@/services/api";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getApiClient } from "@/services/axios";



export function SessionCards() {
  const {user} = useContext(AuthContext);

  useEffect(() => {
    //verificar se tem token, se não manda pra login
    // api.get('/users')
  }, [])

  return (
    <section className={styled.sessionSpace}>
      <div className={styled.main}>
        <div className={styled.cards}>
          <div className={styled.select}>
            <h1>Olá, {user?.name}!</h1>
            <SelectConta />
          </div>

          <div className={styled.sessionCard}>
            <LatestPurchases />
          </div>
          <div className={styled.sessionCard}>
            <NextInvoice />
          </div>
        </div>
        <div className={styled.sessionCardPurchases}>
          <Purchases />
        </div>
      </div>
    </section>
  );
}

export const getServerSideprops: GetServerSideProps = async (ctx) => {
  const {["nextauth.token"]: token} = parseCookies(ctx);
  const apiClient = getApiClient(ctx);

  if(!token){
    return{
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  await apiClient.get("/users");

  return {
    props: {}
  }
}


