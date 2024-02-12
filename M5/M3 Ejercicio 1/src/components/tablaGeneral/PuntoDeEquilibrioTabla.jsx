import { deleteDatos, getListDatos } from "../service/localStorage";

export default function PuntoDeEquilibrioTable({ dato,setDatos }) {

    const { id, costoFijo, costoVariable, precioMedioDeVenta, puntoDeEquilibrio } = dato;

    const removeDatos= ()=>{
        deleteDatos(id);
        setDatos(getListDatos());
    }

    return (
        <>
            <tr>
                <th>{costoFijo}</th>
                <th>{costoVariable}</th>
                <th>{precioMedioDeVenta}</th>
                <th>{puntoDeEquilibrio}</th>
                <th>
                <div className="d-flex gap-3">
                    <span role="button" className="badge bg-danger"
                            onClick={()=>removeDatos()}>
                        Eliminar
                    </span>
                </div>
            </th>
        </tr>
        </>
    )
}