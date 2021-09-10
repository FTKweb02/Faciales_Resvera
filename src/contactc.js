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
          <input type="image" id="image" alt="Home" src="logomq2.png" width="80px"/>
          </Link>
          <Link to="/">
            <button className="buttonis"><b>Cerrar Sesion</b></button>
          </Link>
      </Navbar>  
      </div> 
      
        <Container align="center">
            <br></br>
            <h1>Menú</h1>
            <br></br>
            <Link to="/agendarc">
            <button class="button" type="submit">Agendar</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/rventa">
            <button class="button" type="submit">Vender</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/pendientes">
            <button class="button" type="submit">Pendientes</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/calendario">
            <button class="button" type="submit">Calendario</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/clientescc">
            <button class="button" type="submit">Clientes</button>
            </Link>
            <br></br>
            <br></br>
        </Container>

        
      </>
    );
  }
}

export default Contactc;
