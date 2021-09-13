import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, Link } from  "react-router-dom"
import {
  Table,
  Button,
  Container,
  Navbar,
 
} from "reactstrap";

    function Consultarc() {

      const history = useHistory();
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
                <br></br>
                <div align="right">
                <button  class="menubutton" onClick={() => {
                    history.goBack();
                }} type="submit">Menú</button>
                </div>
                <br></br>
                <div align="center">
                <a class="agpro" href="https://agendapro.com/mx/clients" target="_blank">Consultar</a>
                </div>
              </>
            );
          }
        
        

    export default Consultarc;