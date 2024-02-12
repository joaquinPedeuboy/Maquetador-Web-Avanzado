import uuid from "react-uuid";

export const getListPresupuesto = ()=>{
    if(!localStorage["@listPresupuesto"]){
        localStorage["@listPresupuesto"]=JSON.stringify([]);
    }

    let listDatos = JSON.parse(localStorage["@listPresupuesto"]);
    return listDatos;
}

export const addPresupuesto =(presupuesto)=>{
    const presupuestos = getListPresupuesto();
    presupuestos.push({id:uuid(),...presupuesto});
    localStorage["@listPresupuesto"]=JSON.stringify(presupuestos);
}

export const deletePresupuesto = (id) => {
    let presupuestos = getListPresupuesto();
    presupuestos = presupuestos.filter(presupuesto=>presupuesto.id!==id);
    localStorage["@listPresupuesto"]=JSON.stringify(presupuestos);
}

