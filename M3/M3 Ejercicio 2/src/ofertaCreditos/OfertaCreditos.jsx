import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import useCredit from "../hook/useCredit";
import PlanCredito from "../creditos/PlanCredito";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ResultInteres from "../interes/ResultInteres";

export default function OfertaCreditos() {

    const {values, calcularInteres, resetData} = useCredit([{
        id:1,
        nombre: "Plan 001",
        capital: 150000,
        plazo: "30 dias",
        tasa: "15%"
    },
    {
        id:2,
        nombre: "Plan 002",
        capital: 300000,
        plazo: "180 dias",
        tasa: "10%"
    },
    {
        id:3,
        nombre: "Plan 003",
        capital: 485000,
        plazo: "60 dias",
        tasa: "23%"
    }
])

const [datos, setValues] = useState([]);
const [interesTable, setInteresTable] = useState(false);

useEffect(()=>{
    setValues(values);
},[values])

const handleInteres = () => {
    setValues(prevValues => {
        const planesConInteres = prevValues.map(initialValues => ({
            ...initialValues,
            interes: calcularInteres(initialValues)
        }));
        return planesConInteres;
    });
    setInteresTable(true);
}

const resetPage = () => {
    resetData();
    setInteresTable(false);
}

    return (
        <>
            <div className='container-fluid mt-5'>
                    <Table striped bordered hover variant='dark' responsive>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Capítal</th>
                                    <th>Plazo</th>
                                    <th>Tasa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datos.map(initialValues=><PlanCredito initialValues={initialValues} key={initialValues.id}/>)}
                            </tbody>
                        </Table>
            </div>

            {interesTable && (
                <div className='container-fluid mt-5'>
                    <Table striped bordered hover variant='dark' responsive>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Capítal</th>
                                <th>Plazo</th>
                                <th>Tasa</th>
                                <th>Interes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map(initialValues => <ResultInteres initialValues={initialValues} key={initialValues.id} />)}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-center mb-3">
                        <Button variant="success" size="lg" onClick={resetPage}>
                            Resetear
                        </Button>
                    </div>
                </div>
            )}

            <Container>
                <div className="d-grid gap-2">
                    <Button variant="dark" size="lg" onClick={handleInteres}>
                        Calcular Interes
                    </Button>
                </div>
            </Container>
        </>
    )
}