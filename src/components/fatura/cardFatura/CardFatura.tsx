"use client";
import { priceFormatter } from "@/utils/formatteNumber";
import styled from "../../../styles/allStyles/faturaPage/cardFatura.module.css";

interface CardFaturaProps {
  title: string;

  valueDecimal: number;
}

export function CardFatura({ title, valueDecimal }: CardFaturaProps) {
  return (
    <div className={styled.content}>
      
        <p>{title}</p>
        <h3>{priceFormatter.format(valueDecimal)}</h3>
     
     
    </div>
  );
}
