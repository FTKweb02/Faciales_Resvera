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
                        <input type="image" id="image" alt="Home" src="Logo-FTK-new-blanco.png" width="150px"/>
                    </Link>
                    <Link to="/">
                        <button className="buttonis">Cerrar Sesión</button>
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
                    <option value="cabina1">Cabina Emerald</option>
                    <option value="cabina2">Cabina Opal</option>
                    <option value="cabina3">Cabina Pearl</option>
                    <option value="cabina4">Cabina Ruby</option>
                    <option value="cabina5">Cabina Sapphire</option>
                    <option value="cabina6">Cabina Starlight</option>
                  </select>
                  <br></br>
                  <br></br>
                  <Link to="/citfac">
                  <button class="buttong" type="submit">Seleccionar</button>
                  </Link>
                </Container>
        
        
              </>
            );
          }
        
        

    export default Facialista;