import { useContext } from "react"
import { CounterContext } from "../Context/CounterContext";

export function DoubleCounter (){

    const {doubleCounter} = useContext(CounterContext);

    return(
        <h1>Dobro de counter:{doubleCounter}</h1>
    )
}