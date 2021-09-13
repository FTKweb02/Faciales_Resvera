import React from "react";
import Sidebar from "react-sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import {
    Container,
    Navbar,
    Row,
    Col

} from "reactstrap";


function Altas() {

    const history = useHistory();

    return (
        <>

            <div>
                <Navbar className="color-nav" variant="light">
                    <Link to="/">
                        <input type="image" id="image" alt="Home" src="Logo-FTK-new-blanco.png" width="150px" />
                    </Link>
                    <Link to="/">
                        <button className="buttonis">Cerrar Sesión</button>
                    </Link>
                </Navbar>
            </div>
            <br></br>
            <div align="right" >
                <button class="menubutton" onClick={() => {
                    history.goBack();
                }} type="submit">Menú</button>
            </div>
            <br></br>
            <br></br>

            <Container align="center">
                <br></br>
                <h1>Altas</h1>
                <br></br>
                <Row>
                    <Col><Link to="/">
                        <button class="button"><b>Sucrusal Alta</b></button>
                    </Link></Col>
                    <Col><Link to="/">
                        <button class="button"><b>Alta Asesores</b></button>
                    </Link></Col>
                </Row>
                <br></br>
                <Row>
                    <Col><Link to="/">
                        <button class="button"><b>Marca Alta</b></button>
                    </Link></Col>
                    <Col><Link to="/">
                        <button class="button"><b>Alta Asesor Telefónico</b></button>
                    </Link></Col>
                </Row>
                <br></br>
                <Row>
                    <Col><Link to="/">
                        <button class="button"><b>Cabina Alta</b></button>
                    </Link></Col>
                    <Col><Link to="/">
                        <button class="button"><b>Usuarios</b></button>
                    </Link></Col>
                </Row>
                <br></br>
                <Row>
                    <Col><Link to="/">
                        <button class="button"><b>Configurar Horario</b></button>
                    </Link></Col>
                    <Col><Link to="/">
                        <button class="button"><b>Alta Facialistas</b></button>
                    </Link></Col>
                </Row>
                <br></br>
                <Row>
                    <Col><Link to="/">
                        <button class="button"><b>Alta&nbsp;Servicio/Tratamiento</b></button>
                    </Link></Col>
                    <Col><Link to="/">
                        <button class="button"><b>Contraseñas</b></button>
                    </Link></Col>
                </Row>
            </Container>

        </>
    );
}

export default Altas;
