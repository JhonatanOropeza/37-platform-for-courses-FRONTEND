import React, { useState } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';

import examenChico from '../../../images/iconos/examenChico.png';
//------------------- 1.- CSS Style && .env ---------------
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Examen() {
    //--------------------- 3.1- Functions---------------
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //---------------------- 3.2 Return------------------
    return (
        <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
            {/** Button trigger modal */}
            <button
                onClick={handleShow}
                type="button"
                className="p-0"
                style={{ border: '0px' }}>
                <img src={examenChico} alt="" className="bg-danger rounded img-fluid" />
            </button>
            {/** Modal */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card border="dark" className="p-2 mb-2">
                        <h5>Pregunta 1</h5>
                        <Form.Check
                            type="radio"
                            label="Respuesta 1"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="Respuesta 2"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <Form.Check
                            type="radio"
                            label="Respuest 3"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                    </Card>
                    <Card border="dark" className="p-2 mb-2">
                        <h5>Pregunta 2</h5>
                        <Form.Check
                            type="radio"
                            label="Respuesta 1"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="Respuesta 2"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <Form.Check
                            type="radio"
                            label="Respuest 3"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Enviar respuestas</Button>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
//------------------- 4 Other components ------------------

