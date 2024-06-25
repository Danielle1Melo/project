"use client";

import { priceFormatter } from "@/utils/formatteNumber";
import styled from "../../../../../../styles/allStyles/purchases/table.module.css";

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
            <td>Abastecimento</td>
            <td>{priceFormatter.format(46.08)}</td>
          </tr>
          <tr>
            <td>Shopping</td>
            <td>{priceFormatter.format(46.08)}</td>
          </tr>
          <tr>
            <td>Restaurante</td>
            <td>{priceFormatter.format(46.08)}</td>
          </tr>
          <tr>
            <td>Conveniência</td>
            <td>{priceFormatter.format(46.08)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
