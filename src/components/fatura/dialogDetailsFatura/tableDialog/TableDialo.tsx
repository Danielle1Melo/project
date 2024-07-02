"use client";
import { priceFormatter } from "@/utils/formatteNumber";
import styled from "../../../../styles/allStyles/faturaPage/dialogDetailsFatura.module.css"
const itensTable = [
    {
      id: 1,
      description: "Descrição Item I",
      value: 1240,
    },
    {
      id: 2,
      description: "Descrição Item 2",
      value: 1240,
    },
    {
      id: 3,
      description: "Descrição Item 3",
      value: 1240,
    },
    {
      id: 4,
      description: "Descrição Item 4",
      value: 1240,
    },
  ];

  const totalValue = itensTable.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );

export function TableDialog(){
    return(
        <div>
        <table className={styled.table}>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {itensTable.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.description}</td>
                      <td>{priceFormatter.format(item.value)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className={styled.totalContainer}>
              <div className={styled.totalInformation}>
                <p>
                  Total <span>(BR)</span>
                </p>
                <h3>{priceFormatter.format(totalValue)}</h3>
              </div>
            </div>
    </div>
    )
   
}
