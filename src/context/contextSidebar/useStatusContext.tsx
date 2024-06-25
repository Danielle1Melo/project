import { useContext } from "react";
import { StatusMenuContext } from "./StatusMenu";


export default function useStatusMenuContext(){
    const context = useContext(StatusMenuContext);
    return context;
}