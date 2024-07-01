"use client";

import { ReactNode, createContext, useState } from "react";
import { StatusMenuContextProps } from "./@types";

export const StatusMenuContext = createContext({} as StatusMenuContextProps);

interface ContextProps {
  children: ReactNode;
}

export default function StatusMenuContextComponent({ children }: ContextProps) {
  const [statusMenu, setStatusMenu] = useState(true);

  function activeMenu() {
    if (statusMenu == true) {
      setStatusMenu(false);
      console.log("menu desativando");
    } else {
      setStatusMenu(true);
      console.log("menu ativando");
    }
  }

  return (
    <StatusMenuContext.Provider value={{ statusMenu, activeMenu }}>
      {children}
    </StatusMenuContext.Provider>
  );
}
