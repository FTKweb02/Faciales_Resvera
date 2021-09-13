import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar

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
              <button className="buttonis">Cerrar Sesion</button>
            </Link>
          </Navbar>
        </div>

        <Container align="center">

          <br></br>
          <h1>Menú</h1>
          <br></br>
          <Link to="/calendario">
            <button class="button" type="submit">Calendario</button>
          </Link>
          <br></br>
          <br></br>
          <Link to="/rcliente">
            <button class="button" type="submit">Registrar Cliente</button>
          </Link>
          <br></br>
          <br></br>
          <Link to="/rventa">
            <button class="button" type="submit">Registrar Venta</button>
          </Link>
          <br></br>
          <br></br>
          <Link to="/consultarf">
            <button class="button" type="submit">Consultar Folio</button>
          </Link>
          <br></br>
          <br></br>
          <Link to="/agendarc">
            <button class="button" type="submit">Agendar Cita</button>
          </Link>
          <br></br>
          <br></br>
          <Link to="/consultarc">
            <button class="button" type="submit">Consultar Cita</button>
          </Link>
          <br></br>
          <br></br>
          <Link to="/historial">
            <button class="button" type="submit">Mi historial</button>
          </Link>

        </Container>

      </>
    );
  }
}

export default Ccenter;
