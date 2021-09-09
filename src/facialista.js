import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import {
  Table,
  Button,
  Container,
  Navbar,
 
} from "reactstrap";

    function Facialista() {

  
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
                  <div>
                    <h1>Seleccionar Cabina</h1>
                    <br></br>
                  </div>
                  <select>
                    <option selected="" value=""></option>
                    <option value="cabina1">Cabina 1</option>
                    <option value="cabina2">Cabina 2</option>
                    <option value="cabina3">Cabina 3</option>
                    <option value="cabina4">Cabina 4</option>
                    <option value="cabina5">Cabina 5</option>
                    <option value="cabina6">Cabina 6</option>
                  </select>
                  <br></br>
                  <br></br>
                  <Link to="/citfac">
                  <button type="submit">Seleccionar</button>
                  </Link>
                </Container>
        
        
              </>
            );
          }
        
        

    export default Facialista;