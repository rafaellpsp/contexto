import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

export function HandleCounter(){
    
    const {counter, increaseCounter} = useContext(CounterContext);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increaseCounter}>Aumentar Counter</button>
        </div>
    )
}