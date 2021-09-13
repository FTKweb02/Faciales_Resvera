import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useHistory } from "react-router-dom";
import {
  Table,
  Button,
  Container,
  Navbar,
  Row,
  Col
 
} from "reactstrap";

    function Historial() {

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
                <div align="right" >
                <button class="menubutton" onClick={() => {
                    history.goBack();
                }} type="submit">Menú</button>
                </div>
                <br></br>
                <Container fluid>
                  <Row>
                    <Col><h2>Historial de ventas de: <b>'Vendedor'</b></h2></Col>
                    <Col><h2>1er Lugar Servicios Vendidos: <b>'Vendedor'</b></h2></Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col><h4 class="texts"># Servicios: <u>'Cantidad'.</u></h4>
                  <br></br>
                  <h4 class="texts">Monto Servicios: <u>'$ Cantidad'.</u></h4>
                  <br></br>
                  <h4 class="texts">Venta total: <u>'$ Cantidad'.</u></h4>
                  <br></br>
                  <h4 class="texts">Mis citas totales (mes): <u>'Cantidad'.</u></h4>
                  <br></br></Col>
                  <Col><h2>1er Lugar Monto Vendido: <b><u>'$100000.00'</u></b></h2></Col>
                  </Row>
                </Container>
              </>
            );
          }
        
        

    export default Historial;