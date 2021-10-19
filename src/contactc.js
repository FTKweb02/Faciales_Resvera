import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import {
  Container,
  Navbar

} from "reactstrap";


class Contactc extends React.Component {


  render() {
    

    return (
      <>

      <div>
      <Navbar className="color-nav" variant="light">
          <Link to="/">  
          <input type="image" id="image" alt="Home" src="Logo-FTK-new-blanco.png" width="150px"/>
          </Link>
          <Link to="/">
            <button className="buttonis">Cerrar Sesión</button>
          </Link>
      </Navbar>  
      </div> 
      
        <Container align="center">
            <br></br>
            <h1>Menú</h1>
            <br></br>
            <Link to="/agendarc">
            <button className="button" type="submit">Agendar</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/rventa">
            <button className="button" type="submit">Registrar Membresía</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/pendientes">
            <button className="button" type="submit">Pendientes</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/calendario">
            <button className="button" type="submit">Calendario</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/clientescc">
            <button className="button" type="submit">Clientes</button>
            </Link>
            <br></br>
            <br></br>
        </Container>

        
      </>
    );
  }
}

export default Contactc;
