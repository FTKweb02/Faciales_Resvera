import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Row,
  Col

} from "reactstrap";


class Ccenter extends React.Component {


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
          <h1 align="center">Menú</h1>
          <br></br>
          <br></br>

        <Container align="center">

          <Row>
            <Col>
          <Link to="/calendario">
            <button className="button" type="submit">Calendario</button>
          </Link>
          <br></br>
          </Col>
          <br></br>
          <br></br>
          <Col>
          <Link to="/rcliente">
            <button className="button" type="submit">Registrar Cliente</button>
          </Link>
          <br></br>
          </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
          <Link to="/rventa">
            <button className="button" type="submit">Registrar Membresia</button>
          </Link>
          <br></br>
          </Col>
          <br></br>
          <br></br>
          <Col>
          <Link to="/consultarf">
            <button className="button" type="submit">Consultar Folio</button>
          </Link>
          <br></br>
          </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
          <Link to="/agendarc">
            <button className="button" type="submit">Agendar Cita</button>
          </Link>
          <br></br>
          </Col>
          <br></br>
          <br></br>
          <Col>
          <Link to="/consultarc">
            <button className="button" type="submit">Consultar Cita</button>
          </Link>
          <br></br>
          </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
          <Link to="/historial">
            <button className="button" type="submit">Mi historial</button>
          </Link>
          </Col>
          <Col><button className="buttonh" type="submit" disabled value></button></Col>
          </Row>

        </Container>
        <br></br>
      </>
    );
  }
}

export default Ccenter;
