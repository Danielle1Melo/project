"use client";

import {
  CaretDown,
  CaretRight,
  CaretUp,
  CaretUpDown,
  DownloadSimple,
  FunnelSimple,
} from "@phosphor-icons/react";
import styled from "../../../../../styles/allStyles/faturaPage/tableFatura.module.css";
import { priceFormatter } from "@/utils/formatteNumber";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";
import { DialogDetailsFatura } from "@/components/fatura/dialogDetailsFatura/dialogDetailsFatura";

const styleInline = {
  display: "flex",
  alignItems: "center",
  gap: "2px",
  cursor: "pointer",
};

const itensTable = [
  {
    id: 1,
    description: "Fatura Semana 1",
    vencimento: "07/04/2024",
    value: 1240.0,
    status: "PAGO",
  },
  {
    id: 2,
    description: "Fatura Semana 2",
    vencimento: "01/01/2023",
    value: 1240.0,
    status: "VENCIDO",
  },
  {
    id: 3,
    description: "Fatura Semana 3",
    vencimento: "05/02/2024",
    value: 1240.0,
    status: "EM ABERTO",
  },
  {
    id: 4,
    description: "Fatura Semana 4",
    vencimento: "15/06/2021",
    value: 1240.0,
    status: "EM ABERTO",
  },
];

export function TableFatura() {
  const [openDialogDetailsFatura, setOpenDialogDetailsFatura] = useState(false);
  const [filterStatus, setFilterStatus] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChangeFilter(value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("status", value);
    } else {
      params.delete("status");
    }

    replace(`${pathname}?${params.toString()}`);
    setFilterStatus(value);
  }

  function handleClick(key: string){
    const params = new URLSearchParams(searchParams);

    if(params.get('sort') === key){
        params.set('sort', `-${key}`)
    }else if(params.get('sort') === `-${key}`){
      params.delete('sort');
    } else if(key){
      params.set('sort', key);
    }

    replace(`${pathname}?${params.toString()}`, {scroll: false});
  }

  function getSortIcon(key: string){
    if(searchParams.get('sort') === key){
      return <CaretDown size={15}/>
    }else if(searchParams.get('sort') === `-${key}`){
      return <CaretUp size={15}/>
    }

    return <CaretUpDown size={15} />
  }

  function handleCloseDialogDetailsFatura() {
    setOpenDialogDetailsFatura(false);
    console.log("closed");
  }

  function handleOpenDialogDetailsFatura() {
    setOpenDialogDetailsFatura(true);
    console.log("open");
  }

  return (
    <>
      <DialogDetailsFatura
        openDialog={openDialogDetailsFatura}
        closedDialog={handleCloseDialogDetailsFatura}
      />

      <div className={styled.container}>
        <div className={styled.contentTitles}>
          <div className={styled.titles}>
            <button
              style={{ color: "#171717" }}
              onClick={() => handleChangeFilter("")}
              value=""
            >
              Todas as faturas
            </button>
            <button
              className={styled.titlePago}
              onClick={() => handleChangeFilter("pago")}
              value="pago"
              
            >
              Pago
            </button>
            <button
              className={styled.titleVencido}
              onClick={() => handleChangeFilter("vencido")}
              value="vencido"
              
            >
              Vencido
            </button>
            <button
              className={styled.titleAberto}
              onClick={() => handleChangeFilter("aberto")}
              value="aberto"
            >
              Em aberto
            </button>
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
              <th style={styleInline} onClick={() => handleClick('vencimento')}>
                Vencimento {getSortIcon('vencimento')} 
              </th>
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
