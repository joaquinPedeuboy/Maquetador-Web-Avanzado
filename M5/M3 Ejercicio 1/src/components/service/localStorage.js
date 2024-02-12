import uuid from "react-uuid";

export const getListDatos = ()=>{
    if(!localStorage["@listDatos"]){
        localStorage["@listDatos"]=JSON.stringify([]);
    }

    let listDatos = JSON.parse(localStorage["@listDatos"]);
    return listDatos;
}

export const addDatos =(dato)=>{
    const datos = getListDatos();
    datos.push({id:uuid(),...dato});
    localStorage["@listDatos"]=JSON.stringify(datos);
}

export const deleteDatos = (id) => {
    let datos = getListDatos();
    datos = datos.filter(dato=>dato.id!==id);
    localStorage["@listDatos"]=JSON.stringify(datos);
}

