import { useState } from "react";

export default function useCounter(initialValues={}) {
    const [counter, setCounter] = useState(initialValues);

    const calcularResultado = ()=>{
        const totalIngresos = counter.reduce((total,mes)=> total + mes.ingreso,0);
        const totalEgresos = counter.reduce((total,mes)=> total + mes.egreso,0);
        const resultado = totalIngresos - totalEgresos;
        const esGanancia = resultado >=0;

        return {
            resultado: resultado,
            totalEgresos: totalEgresos,
            totalIngresos: totalIngresos,
            esGanancia: esGanancia,
        };

    };

    return{
        counter,
        calcularResultado
    }
}