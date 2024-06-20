"use client"

import { priceFormatter } from "@/utils/formatteNumber";
import styled from "../../../styles/allStyles/card/itenCard.module.css"

interface ItenCardProps{
    title: string;
    valueDecimal: number;
}

export function ItenCard({title, valueDecimal}: ItenCardProps){
    return (
        <div className={styled.card}>
            <p>{title}</p>
            <h3>{priceFormatter.format(valueDecimal)}</h3>
        </div>
    )
}