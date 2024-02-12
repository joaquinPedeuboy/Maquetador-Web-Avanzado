export default function({initialValues}) {

    const {nombre,capital,plazo,tasa}=initialValues;

    return (
        <>
            <tr>
                        <td>{nombre}</td>
                        <td>{capital}</td>
                        <td>{plazo}</td>
                        <td>{tasa}</td>
                    </tr>
        </>
    )
}