import { X } from "@phosphor-icons/react";
import styled from "../../../styles/allStyles/faturaPage/dialogDetailsFatura.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { priceFormatter } from "@/utils/formatteNumber";
import { TableDialog } from "./tableDialog/TableDialo";

interface DialogDetailsFaturaProps {
  openDialog: boolean;
  closedDialog: () => void;
}





export function DialogDetailsFatura({
  openDialog,
  closedDialog,
}: DialogDetailsFaturaProps) {
  return (
    <Dialog.Root open={openDialog}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={styled.dialogOverlay}
          onClick={() => closedDialog()}
        />
        <Dialog.Content className={styled.dialogContent}>
          <Dialog.Title></Dialog.Title>
          <section className={styled.section}>
            <div>
              <h3>Fatura Semana 1</h3>
            </div>

            <div className={styled.sectionClient}>
              <div className={styled.client}>
                <p>Cliente</p>
                <h3>João da Silva</h3>
                <p>(83) 9 9999-9999</p>
              </div>

              <div className={styled.sectionInformation}>
                <p>Fatura nº</p>
                <h3>
                  <span>#</span>000123
                </h3>
              </div>
            </div>
          </section>

          <main>
            <TableDialog />

            <div className={styled.buttonsPaid}>
              <button>Pagar via PIX - QR Code</button>
              <button>Gerar boleto de pagamento</button>
            </div>
          </main>

          <button onClick={closedDialog} className={styled.iconButton}>
            <X size={35} />
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
