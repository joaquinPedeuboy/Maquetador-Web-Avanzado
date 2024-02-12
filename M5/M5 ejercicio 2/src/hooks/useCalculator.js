import { useState } from "react"

export const useCalculator= (initialState = {})=> {

    const [inputValues, setInputValues] = useState(initialState);

    const resetDataForm = ()=>{
        setInputValues(initialState);
    }

    const handleInputForm = ({target})=>{
        setInputValues({
            ...inputValues,
            [target.name]: target.value,
        })
    }

    const calculoPresupuesto = (calculo)=>{
        const montoTotal = parseFloat(calculo.monto);

        const LoQueNecesita = parseFloat(montoTotal * 0.5);
        const LoQueQuiere = parseFloat(montoTotal * 0.3);
        const AhorrosODeudas = parseFloat(montoTotal * 0.2);

        return [{
            montoTotal,
            LoQueNecesita,
            LoQueQuiere,
            AhorrosODeudas
        }]
    }

    return {
        inputValues,
        resetDataForm,
        handleInputForm,
        calculoPresupuesto
    }
}