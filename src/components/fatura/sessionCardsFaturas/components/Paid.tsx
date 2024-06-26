"use client"

import { CardFatura } from "../../cardFatura/CardFatura"
import { CurrencyDollarSimple, Spinner } from "@phosphor-icons/react"

export function Paid(){
    return (
        <div>
            <CardFatura title="PAGO" icon={<CurrencyDollarSimple size={40}/>} valueDecimal={450}/>
        </div>
    )
}