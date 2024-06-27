"use client";

import { CardFatura } from "../../cardFatura/CardFatura";
import { Spinner } from "@phosphor-icons/react";
import styled from "../../../../styles/allStyles/faturaPage/cardFatura.module.css";


const styledItenCard = {
  backgroundColor: "var(--background)",
  border: "5px solid var(--gray-10)",
  borderRadius: "20px",
};

export function Open() {
  return (
    <div style={styledItenCard} className={styled.cardOpen}>
     
        <CardFatura
          title="EM ABERTO"
          // icon={<Spinner size={35} color="#4E4E4E" />}
          valueDecimal={4500}
        />
        
        <div className={styled.contentIcon}>
        <Spinner size={25} color="#4E4E4E" className={styled.openIcon}/> 
        </div>
          
        
     
    </div>
  );
}
