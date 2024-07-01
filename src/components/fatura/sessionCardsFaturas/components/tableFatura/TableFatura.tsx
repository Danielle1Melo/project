import {
  CaretRight,

  DownloadSimple,
  FunnelSimple,
} from "@phosphor-icons/react";
import styled from "../../../../../styles/allStyles/faturaPage/tableFatura.module.css";
import { priceFormatter } from "@/utils/formatteNumber";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import {DialogDetailsFatura} from "@/components/fatura/dialogDetailsFatura/dialogDetailsFatura"
import { it } from "node:test";

const itensTable = [
  {
    id: 1,
    description: "Fatura Semana 1",
    vencimento: "07/06/2024",
    value: 1240.0,
    status: "PAGO",
  },
  {
    id: 2,
    description: "Fatura Semana 2",
    vencimento: "07/06/2024",
    value: 1240.0,
    status: "VENCIDO",
  },
  {
    id: 3,
    description: "Fatura Semana 3",
    vencimento: "07/06/2024",
    value: 1240.0,
    status: "EM ABERTO",
  },
  {
    id: 4,
    description: "Fatura Semana 4",
    vencimento: "07/06/2024",
    value: 1240.0,
    status: "EM ABERTO",
  },
];

export function TableFatura() {
  const [openDialogDetailsFatura, setOpenDialogDetailsFatura] = useState(false);
  const router = useRouter();

  function handleCloseDialogDetailsFatura() {
    setOpenDialogDetailsFatura(false);
    console.log("closed")
  }

  function handleOpenDialogDetailsFatura() {
    setOpenDialogDetailsFatura(true);
    console.log("open")
  }

  return (
    <>
    <DialogDetailsFatura openDialog={openDialogDetailsFatura} closedDialog={handleCloseDialogDetailsFatura}/>

      <div className={styled.container}>
        <div className={styled.contentTitles}>
          <div className={styled.titles}>
            <p style={{ color: "#171717" }}>Todas as faturas</p>
            <p style={{ color: "#003B6B" }}>Pago</p>
            <p style={{ color: "#AD1212" }}>Vencido</p>
            <p style={{ color: "#4E4E4E" }}>Em aberto</p>
          </div>

          <div>
            <button className={styled.filtroBtn}>
              <FunnelSimple size={20} />
              Filtrar
            </button>
          </div>
        </div>
        <table className={styled.table}>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Vencimento</th>
              <th>Valor</th>
              <th>Status</th>

              <th>Detalhes</th>
              <th>Exportar</th>
            </tr>
          </thead>

          <tbody>
            {itensTable.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.vencimento}</td>
                  <td>{priceFormatter.format(item.value)}</td>
                  <td>
                    <button
                      className={
                        item.status === "PAGO"
                          ? styled.styleStatusPago
                          : item.status === "EM ABERTO"
                          ? styled.styleStatusAberto
                          : styled.styleStatusVencido
                      }
                    >
                      {item.status}
                    </button>
                  </td>
                  <td>
                    <button
                    type="button"
                      className={styled.iconDetails}
                      onClick={() => handleOpenDialogDetailsFatura()}
                    >
                      <CaretRight size={23} />
                    </button>
                  </td>
                  <td>
                    <button
                    type="button"
                      className={styled.iconDetailsExport}
                      onClick={handleOpenDialogDetailsFatura}
                    >
                      <DownloadSimple size={23} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
