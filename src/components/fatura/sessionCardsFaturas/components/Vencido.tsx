"use client"

import { CardFatura } from "../../cardFatura/CardFatura"
import { Coins } from "@phosphor-icons/react"
import styled from "../../../../styles/allStyles/faturaPage/sessionCardsFaturas.module.css"

const styledItenCard = {
    border: "5px solid var(--backgroud-danger)",
    color: "var(--backgroud-danger)",
    borderRadius: "20px",
  };
  

export function Vencido(){
    return (
        <div style={styledItenCard} className={styled.icon}>
            <CardFatura title="VENCIDO" icon={<Coins size={40}/>} valueDecimal={450}/>
        </div>
       
    )
}