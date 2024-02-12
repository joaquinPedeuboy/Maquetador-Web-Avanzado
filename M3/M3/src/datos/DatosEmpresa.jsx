import { useEffect, useState } from "react"
import FlujoDeCaja from "../caja/flujoDeCaja";
import Table from 'react-bootstrap/Table';
import useCounter from "../hooks/useCounter";
export default function DatosEmpresa() {

    const {counter, calcularResultado} = useCounter([{
        periodo: "Enero",
        ingreso: 1500,
        egreso: 1500
    },
    {
        periodo: "Febrero",
        ingreso: 2500,
        egreso: 2500
    },
    {
        periodo: "Marzo",
        ingreso: 84683,
        egreso: 1155
    },
    {
        periodo: "Abril",
        ingreso: 135353,
        egreso: 1533
    },
    {
        periodo: "Mayo",
        ingreso: 1535,
        egreso: 5434
    },
    {
        periodo: "Junio",
        ingreso: 4343354,
        egreso: 5434543
    },
    {
        periodo: "Julio",
        ingreso: 435453,
        egreso: 4543
    },
    {
        periodo: "Agosto",
        ingreso: 78351,
        egreso: 7816
    },
    {
        periodo: "Septiembre",
        ingreso: 1878,
        egreso: 95634
    },
    {
        periodo: "Octubre",
        ingreso: 48483,
        egreso: 9433
    },
    {
        periodo: "Noviembre",
        ingreso: 35483,
        egreso: 53133
    },
    {
        periodo: "Diciembre",
        ingreso: 3843,
        egreso: 348133
    }
])

const [flujo, setFlujo] = useState([]);

useEffect(()=>{
    setFlujo(counter);
},[])

const mostrarAlerta = () => {
    const resultados = calcularResultado();

    let mensaje;

    if (resultados.resultado === 0) {
        mensaje = '0 = Ingresos son iguales a las ganancias';
    } else {
        mensaje = resultados.esGanancia ? '1 = Hubo ganancia' : '-1 = Hubo pérdida';
    }

    alert(`
        Total Ingresos: ${resultados.totalIngresos}
        Total Egresos: ${resultados.totalEgresos}
        Resultado: ${resultados.resultado}
        ${mensaje}
    `);

    // alert(`
    //     Total Ingresos: ${resultados.totalIngresos}
    //     Total Egresos: ${resultados.totalEgresos}
    //     Resultado: ${resultados.resultado}
    //     ${resultados.esGanancia ? 'Hubo ganancia 1' : 'Hubo pérdida -1'}
    // `);
};

    return (
        <>  <div className='container-fluid mt-5'>
                    <Table striped bordered hover variant='dark' responsive>
                            <thead>
                                <tr>
                                    <th>Periodo</th>
                                    <th>Ingreso</th>
                                    <th>Egreso</th>
                                </tr>
                            </thead>
                            <tbody>
                                {flujo.map(initialValues=><FlujoDeCaja initialValues={initialValues} key={initialValues.id}/>)}
                                <div className="mt-3">
                                    <span role="button" className="badge bg-success" onClick={mostrarAlerta}>
                                            Calcular flujo de caja
                                    </span>
                                </div>
                            </tbody>
                        </Table>
            </div>
        </>
    )
}