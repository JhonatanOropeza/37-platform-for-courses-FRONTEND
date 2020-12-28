import React, { useState } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';
import Axios from 'axios';

import { VscChromeClose, VscCheck } from 'react-icons/vsc';
import Loading from '../../../1_Helpers/Loading';
import examenChico from '../../../../images/iconos/examenChico.png';
//------------------- 1.- CSS Style && .env ---------------
const baseURL = process.env.REACT_APP_RUTA_PRINCIPAL;
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Examen({ leccion }) {
    const [show, setShow] = useState(false);
    const [preguntas, setPreguntas] = useState([]);
    const [cargandoPreguntas, setCargandoPreguntas] = useState(false);
    const [respuestas, setRespuestas] = useState([
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null]
    ]);
    const [radioButtons, setRadioButtons] = useState([
        [false, false, false, false],   // ask 0
        [false, false, false, false],   //1
        [false, false, false, false],   //2
        [false, false, false, false],   //3
        [false, false, false, false]    //4
    ]);
    const [calificacionDeRespuestas, setCalificacionDeRespuestas] = useState([]);
    const [examPoints, setExamPoints] = useState(null);
    const [calificandoExamen, setCalificandoExamen] = useState(false);
    const [disabledInput, setDisabledInput] = useState(false);
    //--------------------- 3.1- Functions---------------
    async function loadingQuestions() {
        try {
            setCargandoPreguntas(true);
            const { data } = await Axios.get(baseURL + `/pregunta/get_preguntasForOneTest/${leccion._id}`);
            setPreguntas(data.result3);
            setCargandoPreguntas(false);
        } catch (error) {
            setCargandoPreguntas(false);
            console.log(error);
        }
    }

    const handleClose = () => {
        let reiniciarRespuestas = [[null, null], [null, null], [null, null], [null, null], [null, null]];
        setRespuestas(reiniciarRespuestas);
        let reiniciarRadioButtons = [[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]];
        setRadioButtons(reiniciarRadioButtons);
        setCalificacionDeRespuestas([]);
        setExamPoints(null);
        setDisabledInput(false);
        setShow(false);
    }
    const handleShow = () => setShow(true);

    //1.- Index: número de pregunta actual
    //2.- Answer: respuesta de la pregunta actual (r1, r2, r3, r4)
    //3.- numberOfAnswer: 0, 1, 2, 3 (according the numbre of checkbox)
    function changingAnswers(index, answer, numberOfAnswer, idPregunta) {
        //1.- Storing the user´s answer in the state "respuestas"
        let newArray = [...respuestas];
        newArray[index][0] = idPregunta;
        newArray[index][1] = answer;
        setRespuestas(newArray);
        //2.- Usign radioButtons correctly
        let auxRadioButtons = [...radioButtons];
        for (let i = 0; i < 4; i++) {
            auxRadioButtons[index][i] = false;
        }
        auxRadioButtons[index][numberOfAnswer] = true;
        setRadioButtons(auxRadioButtons);
    }
    async function calificarExamen() {
        let bandera = false;
        //Verify if a question hasn´t been answered
        for (const val of respuestas) {
            if (val[0] === null || val[1] === null) { bandera = true; }
        }
        if (bandera) {
            window.alert("Debes respoder todas las preguntas");
        } else {
            //The back qualify the exam
            try {
                setCalificandoExamen(true);
                const { data } = await Axios.post(baseURL + `/pregunta/auth/qualifyTest/${leccion._id}`, respuestas);
                setCalificacionDeRespuestas(data.qualification)
                setExamPoints(data.examPoints);
                setDisabledInput(true);
                setCalificandoExamen(false);
            } catch (error) {
                //mostrarError
                setCalificandoExamen(false);
            }
        }
    }
    //---------------------- 3.2 Return------------------
    return (
        <div className="col-3 col-md-3 col-lg-2  text-center pt-1 pb-1 pl-1 pr-1">
            {/** Button trigger modal */}
            <button
                onClick={() => { handleShow(); loadingQuestions() }}
                type="button"
                className="p-0"
                style={{ border: '0px' }}>
                <img src={examenChico} alt="" className="bg-danger rounded img-fluid" />
            </button>
            {/** Modal */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Examen de: {leccion.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <MostrarCalificaion examPoints={examPoints} />

                    {
                        cargandoPreguntas
                            ? (
                                <div className="d-flex justify-content-center">
                                    <Loading X_Y_Centered={false} />
                                </div>
                            ) : (
                                preguntas.map((pregunta, index) => (
                                    <MostrarPregunta
                                        key={pregunta._id}
                                        pregunta={pregunta}
                                        index={index}
                                        radioButtons={radioButtons}
                                        changingAnswers={changingAnswers}
                                        calificacionDeRespuestas={calificacionDeRespuestas[index]}
                                        disabledInput={disabledInput}
                                    />
                                ))
                            )
                    }

                    <MostrarCalificaion examPoints={examPoints} />

                </Modal.Body>
                <Modal.Footer>
                    <BotonEnviarRespuesta calificarExamen={calificarExamen}/>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
//------------------- 4 Other components ------------------
function MostrarPregunta({
    pregunta,
    index,
    radioButtons,
    changingAnswers,
    calificacionDeRespuestas,
    disabledInput }) {
    //1.- Index: número de pregunta actual
    //2.- Answer: respuesta de la pregunta actual (r1, r2, r3, r4)
    //3.- numberOfAnswer: 0, 1, 2, 3 (according the number of checkbox)
    function onCheck(answer, numberOfAnswer, idPregunta) {
        changingAnswers(index, answer, numberOfAnswer, idPregunta);
    }
    return (
        <Card border="dark" className="p-2 mb-2">
            <Form.Group>
                {(calificacionDeRespuestas === true || calificacionDeRespuestas === false) && <IconoRespuesta calificacionDeRespuestas={calificacionDeRespuestas} />}
                <p className="mb-2"><b>Pregunta {index}: </b>{pregunta.pregunta}</p>
                <Form.Check
                    type="radio"
                    label={pregunta.re1}
                    name={`pregunta${index}`}
                    id="formHorizontalRadios1"
                    checked={radioButtons[index][0]}
                    onChange={() => onCheck('re1', 0, pregunta._id)}
                    disabled={disabledInput}
                />
                <Form.Check
                    type="radio"
                    label={pregunta.re2}
                    name={`pregunta${index}`}
                    id="formHorizontalRadios2"
                    checked={radioButtons[index][1]}
                    onChange={() => onCheck('re2', 1, pregunta._id)}
                    disabled={disabledInput}
                />
                <Form.Check
                    type="radio"
                    label={pregunta.re3}
                    name={`pregunta${index}`}
                    id="formHorizontalRadios3"
                    checked={radioButtons[index][2]}
                    onChange={() => onCheck('re3', 2, pregunta._id)}
                    disabled={disabledInput}
                />
                <Form.Check
                    type="radio"
                    label={pregunta.re4}
                    name={`pregunta${index}`}
                    id="formHorizontalRadios4"
                    checked={radioButtons[index][3]}
                    onChange={() => onCheck('re4', 3, pregunta._id)}
                    disabled={disabledInput}
                />
            </Form.Group>
        </Card>
    );
}

function IconoRespuesta({ calificacionDeRespuestas }) {
    if (calificacionDeRespuestas) {
        return (
            <p className="m-0"><VscCheck className="text-success" /> Respuesta CORRECTA</p>
        );
    } else {
        return (
            <p className="m-0"><VscChromeClose className="text-danger" /> Respuesta INCORRECTA</p>
        );
    }
}

function MostrarCalificaion({ examPoints }) {
    if (examPoints === null) {
        return <></>
    } else {
        return (
            <h5 className="">Calificación: {} 
                <b>{examPoints}.</b>
                {
                    examPoints >= 7 
                    ? (<div className="text-success" style={{display:'inline'}}> Aprobado</div>) 
                    : (<div className="text-danger" style={{display:'inline'}}> No aprobado</div>)
                }
            </h5>
        );
    }
}

function BotonEnviarRespuesta({calificarExamen}){
    return(
        <Button variant="primary" onClick={calificarExamen}>Enviar respuestas</Button>
    );
}