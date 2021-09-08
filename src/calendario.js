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

    function Calendario() {

  
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
                  <Link to="/ccenter">
                  <button type="submit">Menu</button>
                  </Link>
                </div>
                <div id="calendar"></div>
                  <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js"></script>

                
              </>

              
            );
          }
        
        

    export default Calendario;