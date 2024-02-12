import { useEffect, useState } from "react"
import { Card, Table } from "react-bootstrap";
import { getListPresupuesto } from "../../service/LocalStorage";
import PresupuestoTable from "../table/PresupuestoTable";

export default function VistaPresupuesto() {

    const [listas, setLista] = useState([]);
    

    useEffect(()=>{
        const presupuestos = getListPresupuesto
        setLista(presupuestos);
    },[])

    return (
        <>
            <h1 className="my-5 text-center">Lista de Presupuestos</h1>
            {
                listas.length>0 ?(
                    <Card bg="secondary" className="p-3">
                        <h2 className="my-5 text-center">Regla 50/30/20</h2>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Monto</th>
                                    <th>Lo que necesita</th>
                                    <th>Lo que quiere</th>
                                    <th>Ahorros o deudas</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listas.map(lista=><PresupuestoTable lista={lista} key={lista.id}
                                                                            setLista={setLista}/>)}
                            </tbody>
                        </Table>
                    </Card>
                ):(
                    <h3 className="text-center">Sin Presupuestos</h3>
                )
            }
        </>
    )
}