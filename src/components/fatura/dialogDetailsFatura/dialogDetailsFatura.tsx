import styled from "../../../styles/allStyles/faturaPage/dialogDetailsFatura.module.css";

export function DialogDetailsFatura() {
  return (
    <div className={styled.container}>
      <div>
        <p>Fatura Semana 1</p>

        <div>
          <div>
            <p>Cliente</p>
            <h2>João da Silva</h2>
            <p>(83) 9 9999-9999</p>
          </div>
          <p>Fatura n°</p>
          <p>
            <span>#</span>000123
          </p>
        </div>
      </div>
    </div>
  );
}
