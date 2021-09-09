import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useHistory} from "react-router-dom";
import {
  Table,
  Button,
  Container,
  Navbar,
 
} from "reactstrap";

    function Agendarc() {

      const history = useHistory();
  
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
                <br></br>
                <div align="right" class="menubutton">
                  <button onClick={() => {
                    history.goBack();
                }} type="submit">Menu</button>
                </div>
                <br></br>
                <div align="center"> 
                  <h1>Agenda Proooo</h1>
                </div>
              </>
            );
          }
        
        

    export default Agendarc;