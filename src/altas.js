import React from "react";
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
                        <button class="button">Sucrusal Alta</button>
                    </Link></Col>
                    <Col><Link to="/">
                        <button class="button">Alta Asesores</button>
                    </Link></Col>
                </Row>
                <br></br>
                <Row>
                    <Col><Link to="/">
                        <button class="button">Marca Alta</button>
                    </Link></Col>
                    <Col><Link to="/">
                        <button class="button">Alta Asesor Telefónico</button>
                    </Link></Col>
                </Row>
                <br></br>
                <Row>
                    <Col><Link to="/">
                        <button class="button">Cabina Alta</button>
                    </Link></Col>
                    <Col><Link to="/">
                        <button class="button">Usuarios</button>
                    </Link></Col>
                </Row>
                <br></br>
                <Row>
                    <Col><Link to="/">
                        <button class="button">Configurar Horario</button>
                    </Link></Col>
                    <Col><Link to="/">
                        <button class="button">Alta Facialistas</button>
                    </Link></Col>
                </Row>
                <br></br>
                <Row>
                    <Col><Link to="/">
                        <button class="button">Alta&nbsp;Servicio/Tratamiento</button>
                    </Link></Col>
                    <Col><Link to="/">
                        <button class="button">Contraseñas</button>
                    </Link></Col>
                </Row>
            </Container>

        </>
    );
}

export default Altas;
