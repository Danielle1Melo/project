"use client"

import { CardFatura } from "../../cardFatura/CardFatura"
import { Spinner } from "@phosphor-icons/react"

const styledItenCard = {
    backgroundColor: "var(--background)",
    border: "5px solid var(--backgroud-icon)",
  };

export function Open(){
    return (
        <div  style={styledItenCard}>
            <CardFatura title="EM ABERTO" icon={<Spinner size={40}/>} valueDecimal={450}/>
        </div>
       
    )
}