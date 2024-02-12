import { Alert } from "react-bootstrap";

export default function AlertForm(){
    return (
        <Alert variant="succes">
            <Alert.Heading>Accion realizada</Alert.Heading>
            <p>Se ha registrado el presupuesto de manera exitosa</p>
            <hr />
            <p className="mb-0">Puede volver a la pagina principal para ver los resultados</p>
        </Alert>
    )
}