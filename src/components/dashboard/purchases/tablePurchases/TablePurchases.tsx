"use client";

import styled from "../../../../styles/allStyles/purchases/table.module.css";

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
            <td>R$259,20</td>
          </tr>
          <tr>
            <td>Shopping</td>
            <td>R$259,20</td>
          </tr>
          <tr>
            <td>Restaurante</td>
            <td>R$259,20</td>
          </tr>
          <tr>
            <td>Conveniência</td>
            <td>R$259,20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
