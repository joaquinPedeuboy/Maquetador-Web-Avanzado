import { useEffect, useState } from "react";

export default function useCredit(initialValues={}) {
    const [values, setValues] = useState(initialValues);

    const calcularInteres = (plan)=>{
        const tasaDecimal = parseFloat(plan.tasa.replace("%", "")) / 100;
        const capital = plan.capital;
        const plazo = parseFloat(plan.plazo.replace(" dias", ""));
        if (isNaN(tasaDecimal) || isNaN(capital)) {
            console.error("ERROR: tasaDecimal o capital no son números válidos");
            return 0;
        }
        const interes = ((capital * plazo * tasaDecimal)/ 100).toFixed(2);
        const resultado = parseFloat(interes);

        if (isNaN(resultado)) {
            console.error("ERROR: resultado del interés no es un número válido");
            return 0;
        }

        return resultado;
    }
    
    const resetData = ()=>{
        setValues(initialValues);
    }


    return{
        values,
        calcularInteres,
        resetData
    }
}