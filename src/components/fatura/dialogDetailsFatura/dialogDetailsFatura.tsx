import { X } from "@phosphor-icons/react";
import styled from "../../../styles/allStyles/faturaPage/dialogDetailsFatura.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { priceFormatter } from "@/utils/formatteNumber";

interface DialogDetailsFaturaProps {
  openDialog: boolean;
  closedDialog: () => void;
}

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
