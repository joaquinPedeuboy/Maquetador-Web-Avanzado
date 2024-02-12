import { useState } from "react"

export const useEquilibrio = (initalState = {})=> {
    const [inputValues, setInputValues] = useState(initalState);

    const resetDataForm = ()=> {
        setInputValues(initalState);
    }

    const handleInputForm = ({target}) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value,
        })
    }

    const setDataForm=(newValues) => {
        setInputValues(newValues);
    }

    const calculoPuntoDeEquilibrio = (calculo)=>{
        const precioMedioDeVenta = parseFloat(calculo.precioMedioDeVenta);
        const costosVariable = parseFloat(calculo.costoVariable);
        const costosFijos = parseFloat(calculo.costoFijo);

        const puntoDeEquilibrio = (costosFijos / (precioMedioDeVenta - costosVariable)).toFixed(2);

        return parseFloat(puntoDeEquilibrio);
    }

    const resetData = ()=>{
        setInputValues(initalState);
    }

    return {
        inputValues,
        resetDataForm,
        handleInputForm,
        setDataForm,
        calculoPuntoDeEquilibrio,
        resetData
    }
}