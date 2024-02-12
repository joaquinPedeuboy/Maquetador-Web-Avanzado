import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { getListDatos } from "../service/localStorage";
import { Card, Table } from "react-bootstrap";
import PuntoDeEquilibrioTable from "../tablaGeneral/PuntoDeEquilibrioTabla";

export default function PuntoDeEquilibrioList() {
    const navigate = useNavigate();

    const [datos, setDatos] = useState([]);

    useEffect(()=>{
        setDatos(getListDatos());
    },[])

    return (
        <>
            <h1 className="my-5 text-center">Lista de Datos</h1>
            {
                datos.length>0 ?(
                    <Card bg="secondary" className="p-3">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Costos Fijos</th>
                                    <th>Costos Variables</th>
                                    <th>Precio Medio de Venta</th>
                                    <th>Punto de Equilibrio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datos.map(dato=><PuntoDeEquilibrioTable dato={dato} key={dato.id}
                                                                            setDatos={setDatos}/>)}
                            </tbody>
                        </Table>
                    </Card>
                ):(
                    <h3 className="text-center">Sin datos</h3>
                )
            }

            <div className="mt-5 text-center">
                <Button variant="outline-success"
                        onClick={()=>navigate("/create-puntoDeEquilibrio")}>
                            Registrar Nuevos Datos
                </Button>
            </div>
        </>
    )
}