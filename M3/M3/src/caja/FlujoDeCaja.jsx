
export default function FlujoDeCaja({initialValues}){
    const {periodo,ingreso,egreso}=initialValues;

    return(
        <>
                    <tr>
                        <td>{periodo}</td>
                        <td>{ingreso}</td>
                        <td>{egreso}</td>
                    </tr>
                    
        </>
        
    );
}