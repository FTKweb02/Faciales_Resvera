import React from "react";
import Sidebar from "react-sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar

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
              <button className="buttonis"><b>Cerrar Sesion</b></button>
            </Link>
          </Navbar>
        </div>

        <Container align="center">
          
          <br></br>
          <h1>Configuración</h1>
          <br></br>
          <Link to="/altas">
            <button class="button" type="submit">Altas</button>
          </Link>
          <br></br>
          <br></br>
          <Link to="/bajas">
            <button class="button" type="submit">Bajas</button>
          </Link>
          <br></br>          
        </Container>

      </>
    );
  }
}

export default Config;
