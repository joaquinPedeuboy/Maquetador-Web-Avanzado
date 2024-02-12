import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { useCalculator } from '../../hooks/useCalculator';
import AlertForm from '../alert/AlertForm';
import { useState } from 'react';
import { addPresupuesto } from '../../service/LocalStorage';

export default function PresupuestoForm() {
    const navigate = useNavigate();

    const [showMessage, setShowMessage]= useState(false);

    const {inputValues, resetDataForm, handleInputForm, calculoPresupuesto}=useCalculator({
        monto:'',
        LoQueNecesita:'',
        LoQueQuiere:'',
        AhorrosODeudas:''
    });

    const handleSubmit=(e)=>{
        e.preventDefault();

        const presupuestos = calculoPresupuesto(inputValues);
        presupuestos.forEach((presupuesto) => {
        addPresupuesto(presupuesto);
        });
        setShowMessage(true);
        resetDataForm();
        setTimeout(()=>{
            setShowMessage(false);
        },10000);
    }

    return (
        <>
            <div className="d-flex my-5 justify-content-between">
                <Button variant="secondary"
                        onClick={()=>navigate("/")}>
                            volver
                </Button>
            </div>
            <Card bg='info' className='p-5 m-5'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 text-white" controlid="txtMonto">
                        <Form.Label>Ingrese el monto total de sus ingresos</Form.Label>
                        <Form.Control type="text" placeholder="Ingresos"
                                        id='txtMonto' name='monto'
                                        value={inputValues.monto} onChange={handleInputForm}/>
                        <Form.Text className="text-muted">
                        Este campo es obligatorio.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="secondary" type="submit">
                        Calcular
                    </Button>
                </Form>
            </Card>
            {showMessage && <AlertForm/>}
        </>
        
        
    );
}

