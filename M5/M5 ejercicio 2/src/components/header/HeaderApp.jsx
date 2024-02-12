import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';


export default function HeaderApp() {

    const navigate = useNavigate();


    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" className='bg-primary' data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Presupuestos <FaMoneyBillTrendUp  className='mx-2 mb-2'/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <Button className='btn btn-secondary my-2 my-sm-0'
                        onClick={()=>navigate("/create-presupuesto")}>
                            Crear Presupuesto
                </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
