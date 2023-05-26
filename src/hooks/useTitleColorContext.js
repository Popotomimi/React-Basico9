import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext);

    if(!context) {
        console.log("Não veio o contexto");
    }

    return context;

}