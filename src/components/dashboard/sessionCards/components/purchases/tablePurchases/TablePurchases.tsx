"use client";

import { priceFormatter } from "@/utils/formatteNumber";
import styled from "../../../../../../styles/allStyles/purchases/table.module.css";


const styleInline = {
  display: "flex",
  gap: "10px"
}

export function TablePurchases() {
  return (
    <div>
      <table className={styled.table}>
        <thead>
          <tr>
            <th>CATEGORIA</th>
            <th>VALOR</th>
          </tr>
        </thead>

        <tbody>
          <tr>                           
            <td style={styleInline}><div className={styled.circleAbastecimento}></div>Abastecimento</td>
            <td>{priceFormatter.format(46.08)}</td>
          </tr>
          <tr>
            <td style={styleInline}><div className={styled.circleShopping}></div>Shopping</td>
            <td>{priceFormatter.format(46.08)}</td>
          </tr>
          <tr>
            <td style={styleInline}><div className={styled.circleRestaurante}></div>Restaurante</td>
            <td>{priceFormatter.format(46.08)}</td>
          </tr>
          <tr>
            <td style={styleInline}><div className={styled.circleConveniência}></div>Conveniência</td>
            <td>{priceFormatter.format(46.08)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
