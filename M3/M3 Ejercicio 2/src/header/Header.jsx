import { RiBankFill } from "react-icons/ri";
import { Container } from "react-bootstrap";

export default function Header() {
    return (
        <>
            <Container className="d-flex justify-content-center mt-3">
                <h1>App del Credito <RiBankFill /></h1>
            </Container>

        </>
    )
}