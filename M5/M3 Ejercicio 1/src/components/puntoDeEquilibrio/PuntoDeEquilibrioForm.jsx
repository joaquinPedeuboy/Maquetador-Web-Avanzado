import {Container, Form } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEquilibrio } from "../hook/useEquilibrio";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addDatos, getListDatos } from "../service/localStorage";
import { Card, Table } from "react-bootstrap";
import PuntoDeEquilibrioTable from "../tablaGeneral/PuntoDeEquilibrioTabla";

export default function PuntoDeEquilibrioForm() {
    const navigate = useNavigate();

    const {inputValues, resetDataForm, handleInputForm,setDataForm,calculoPuntoDeEquilibrio, resetData}= useEquilibrio({
        costoFijo:'',
        costoVariable:'',
        precioMedioDeVenta:''
    })

    const [equilibrioTable, setEquilibrioTable] = useState(false);

    const [datos, setDatos] = useState([]);


    useEffect(()=>{
        setDatos(getListDatos());
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        //validaciones
        const puntoDeEquilibrio = calculoPuntoDeEquilibrio(inputValues);
        addDatos({...inputValues, puntoDeEquilibrio});
        setDatos(getListDatos());
        resetDataForm();
        setEquilibrioTable(true);
    }

    const resetPage = () => {
        resetData();
        setEquilibrioTable(false);
    }

    return (
        <>
        <div className="d-flex my-5 justify-content-between">
                <Button variant="secondary"
                        onClick={()=>navigate("/")}>
                            volver
                </Button>
        </div>

        <Container fluid>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlid="txtCostoFijo">
                            <Form.Label className="label">Ingrese el costo fijo</Form.Label>
                            <Form.Control type="number" placeholder="Enter number" size="sm"
                                            id="txtCostoFijo" name="costoFijo"
                                            value={inputValues.costoFijo} onChange={handleInputForm}/>
                            <Form.Text className="text-muted">
                                Este campo es obligatorio.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlid="txtCostoVariable">
                            <Form.Label className="label">Ingrese los costos variables </Form.Label>
                            <Form.Control type="number" placeholder="Enter number" size="sm"
                                            id="txtCostoVariable" name="costoVariable"
                                            value={inputValues.costoVariable} onChange={handleInputForm}/>
                            <Form.Text className="text-muted">
                                Este campo es obligatorio.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlid="txtVenta">
                            <Form.Label className="label">Ingrese el precio medio de venta </Form.Label>
                            <Form.Control type="number" placeholder="Enter number" size="sm"
                                            id="txtVenta" name="precioMedioDeVenta"
                                            value={inputValues.precioMedioDeVenta} onChange={handleInputForm}/>
                            <Form.Text className="text-muted">
                                Este campo es obligatorio.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid ga-2 mt-3">
                        <Button variant="outline-primary" type="submit">
                            Calcular Datos
                        </Button>
                </div>
            </Form>
            {equilibrioTable && (
                <div className='container-fluid mt-5'>
                    <Card bg="secondary" className="p-3">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Costos Fijos</th>
                                    <th>Costos Variables</th>
                                    <th>Precio Medio de Venta</th>
                                    <th>Punto de Equilibrio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datos.map(dato=><PuntoDeEquilibrioTable dato={dato} key={dato.id}
                                                                            setDatos={setDatos}/>)}
                            </tbody>
                        </Table>
                    </Card>

                    <Container>
                        <div className="d-grid ga-2 mt-3">
                            <Button variant="outline-primary" onClick={resetPage}>
                                Resetear Datos
                            </Button>
                        </div>

                    </Container>
                </div>
                
            )}
        </Container>
        </>    
    );
}