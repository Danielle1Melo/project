"use client";
import { priceFormatter } from "@/utils/formatteNumber";
import styled from "../../../styles/allStyles/faturaPage/cardFatura.module.css";

interface CardFaturaProps {
  title: string;
  icon: any;
  valueDecimal: number;
}

export function CardFatura({ title, icon, valueDecimal }: CardFaturaProps) {
  return (
    <div className={styled.content}>
      <div className={styled.title}>
        <p>{title}</p>
        <h3>{priceFormatter.format(valueDecimal)}</h3>
      </div>
      <div className={styled.icon}>{icon}</div>
    </div>
  );
}
