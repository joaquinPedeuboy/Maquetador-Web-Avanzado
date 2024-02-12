import { deletePresupuesto, getListPresupuesto } from "../../service/LocalStorage";

export default function PresupuestoTable({ lista, setLista }) {
    const { id,montoTotal,LoQueNecesita,LoQueQuiere,AhorrosODeudas } = lista;

    const removePresupuesto= ()=>{
        deletePresupuesto(id);
        setLista(getListPresupuesto());
    }

    return (
        <>
            <tr>
                <th>{montoTotal}</th>
                <th>{LoQueNecesita}</th>
                <th>{LoQueQuiere}</th>
                <th>{AhorrosODeudas}</th>
                <th>
                <div className="d-flex gap-3">
                    <span role="button" className="badge bg-danger"
                            onClick={()=>removePresupuesto()}>
                        Eliminar
                    </span>
                </div>
                </th>
            </tr>
        </>
    )
}