import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Row,
  Col,

} from "reactstrap";


class Config extends React.Component {


  render() {


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
        <Container align="center">
          <br></br>
          <h1>Configuración</h1>
          <br></br>
          <br></br>
          <Row>
            <Col><Link to="/">
              <button class="button">Marca</button>
            </Link></Col>
            <Col><Link to="/">
              <button class="button">Usuario</button>
            </Link></Col>
          </Row>
          <br></br>
          <Row>
            <Col><Link to="/">
              <button class="button">Sucursal</button>
            </Link></Col>
            <Col><Link to="/">
              <button class="button">Facialista</button>
            </Link></Col>
          </Row>
          <br></br>
          <Row>
            <Col><Link to="/">
              <button class="button">Servicio/Tratamiento</button>
            </Link></Col>
            <Col><Link to="/">
              <button class="button">Asesor</button>
            </Link></Col>
          </Row>
          <br></br>
          <Row>
            <Col><Link to="/">
              <button class="button">Tecnología</button>
            </Link></Col>
            <Col><Link to="/">
              <button class="button">Asesor Telefónico</button>
            </Link></Col>
          </Row>
          <br></br>
        </Container>

      </>
    );
  }
}

export default Config;
