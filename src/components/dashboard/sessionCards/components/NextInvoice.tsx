"use client";

import styled from "@/styles/allStyles/sessionCards/nextInvoice.module.css";
import { ItenCard } from "../../itenCard/ItenCard";
import { MainCards } from "../../card/MainCards";
import {DialogDetailsFatura} from "@/components/fatura/dialogDetailsFatura/dialogDetailsFatura";
import { useState } from "react";


const styledItenCard = {
  backgroundColor: "var(--danger-10)",
};

export function NextInvoice() {
  const [openDialogDetailsFatura, setOpenDialogDetailsFatura] = useState(false);
  function handleCloseDialogDetailsFatura() {
    setOpenDialogDetailsFatura(false);
  }

  function handleOpenDialogDetailsFatura() {
    setOpenDialogDetailsFatura(true);
  }
  
  return (
    <>
    <DialogDetailsFatura openDialog={openDialogDetailsFatura} closedDialog={handleCloseDialogDetailsFatura}/>
    <main className={styled.container} >
      <MainCards title="Próxima fatura" subtitle="Vence dia 20 de junho">
        <section className={styled.section} style={styledItenCard}>
          <ItenCard title="Valor Total" valueDecimal={225.11} />
        </section>

        <div className={styled.details}>
          <button type="button" onClick={() => handleOpenDialogDetailsFatura()}>Detalhes da fatura</button>
          <span className={styled.separator}></span>
          <button type="button">Abrir 2° via da fatura</button>
        </div>
      </MainCards>
    </main>
    </>
    
  );
}
