import { FcMoneyTransfer } from "react-icons/fc";
import { Container } from "react-bootstrap";

export default function Titulo() {
    return (
        <>
            <Container className="d-flex justify-content-center mt-3">
                <h1>App del Flujo de Caja <FcMoneyTransfer /></h1>
            </Container>

        </>
    )
}