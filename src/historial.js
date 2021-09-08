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

    function Historial() {

  
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
                <div align="center"> 
                  <h2>Historial de ventas de: <b>'Vendedor'</b></h2>
                </div>
                <div>
                  <h4 class="texts"># Servicios: <u>'Cantidad'.</u></h4>
                  <br></br>
                  <h4 class="texts">Monto Servicios: <u>'$ Cantidad'.</u></h4>
                  <br></br>
                  <h4 class="texts">Venta total: <u>'$ Cantidad'.</u></h4>
                  <br></br>
                  <h4 class="texts">Mis citas totales (mes): <u>'Cantidad'.</u></h4>
                  <br></br>
                </div>
              </>
            );
          }
        
        

    export default Historial;