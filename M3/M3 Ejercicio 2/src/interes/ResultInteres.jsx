export default function({initialValues}) {

    const {nombre,capital,plazo,tasa,interes}=initialValues;

    return (
        <>
            <tr>
                        <td>{nombre}</td>
                        <td>{capital}</td>
                        <td>{plazo}</td>
                        <td>{tasa}</td>
                        <td>{interes}</td>
                    </tr>
        </>
    )
}