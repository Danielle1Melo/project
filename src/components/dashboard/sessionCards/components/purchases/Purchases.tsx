"use client";

import styled from "@/styles/allStyles/purchases/purchases.module.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { MainCards } from "../../../card/MainCards";
import { Graphic } from "./graphic/Graphic";
import { TablePurchases } from "./tablePurchases/TablePurchases";
import { SelectConta } from "../SelectConta";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const styledItenCard = {
  color: "var(--gray)",
};

export function Purchases() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace} = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    const params = new URLSearchParams(searchParams);
    const searchString = event.currentTarget.value;
    
    if(searchString){
      params.set('search', searchString);
    }else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <main className={styled.container} style={styledItenCard}>
      
      <MainCards title="Compras" subtitle="por Postos Mirian">
        <div className={styled.search}>
          <input type="text" placeholder="Pesquise aqui " onChange={handleChange}/>

          <button className={styled.searchBtn}>
            <MagnifyingGlass size={24} />
          </button>
        </div>
        <div>
          <Graphic />
          <TablePurchases />
        </div>
      </MainCards>
    </main>
  );
}
