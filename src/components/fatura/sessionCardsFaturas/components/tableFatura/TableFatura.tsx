import { CaretRight, DiceFive } from "@phosphor-icons/react";
import styled from "../../../../../styles/allStyles/faturaPage/tableFatura.module.css";
import { priceFormatter } from "@/utils/formatteNumber";
import { useRouter } from "next/navigation";

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

const styleStatusPago = {
  backgroundColor: "var(--backgroud-icon)",
  borderRadius: "20px",
  padding: "5px 25px",
  color: "var(--second-blue)",
};

const styleStatusVencido = {
  backgroundColor: "var(--backgroud-danger)",
  borderRadius: "20px",
  padding: "5px 25px",
  color: "var(--danger)",
};

const styleStatusAberto = {
  backgroundColor: "var(--background-table)",
  borderRadius: "20px",
  padding: "5px 25px",
  color: "var(--font-status-aberto)",
};

export function TableFatura() {
  const router = useRouter();

  return (
    <div className={styled.container}>
      <div className={styled.titles}>
        <p>Todas as faturas</p>
        <p>Pago</p>
        <p>Vencido</p>
        <p>Em aberto</p>
      </div>
      <table className={styled.table}>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Vencimento</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Detalhes</th>
          </tr>
        </thead>

        <tbody>
          {itensTable.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.vencimento}</td>
                <td>{item.value}</td>
                <td>
                  <button
                    className={styled.statusBtn}
                    style={
                      item.status === "PAGO"
                        ? styleStatusPago
                        : item.status === "EM ABERTO"
                        ? styleStatusAberto
                        : styleStatusVencido
                    }
                  >
                    {item.status}
                  </button>
                </td>
                <td>
                  <button
                    className={styled.iconDetails}
                    onClick={() => router.push("/dialogDetailsFatura")}
                  >
                    <CaretRight size={23} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
