import { useContext } from "react";
import { StatusMenuContext } from "../contextSidebar/StatusMenu";


export default function useStatusMenuContext(){
    const context = useContext(StatusMenuContext);
    return context;
}