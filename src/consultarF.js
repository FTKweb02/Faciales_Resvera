import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useHistory } from "react-router-dom";
import {
  Table,
  Button,
  Container,
  Navbar,
 
} from "reactstrap";


    function Consultarf() {

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
                <div align="center">
                  <h1>Datos de Cliente</h1>
                  <input type="text" placeholder="Nombre"></input>
                  <br></br>
                  <br></br>
                  <select>
                    <option value="select" selected="selected">Selecciona una marca: </option>
                    <option value="vinevera">Vine Vera</option>
                    <option value="orogold">Orogold</option>
                    <option value="reservecut">Reserve Cut</option>
                    <option value="resvera">Resvera</option>
                    <option value="umaf">Umaf</option>
                    <option value="vinevxp">Vine Vera Experience</option>
                  </select>
                  <br></br>
                </div>
                <br></br>
                <div align="center">
                  <button class="buttoncons" type="submit"><b>Consultar</b></button>
                </div>
                <br></br>
                <div align="center">
                <table width="100%" border="1px solid black">
                  <thead>
                    <tr>
                     <th>Nombre</th>
                     <th>Telefono</th>
                     <th>Folio</th>
                     <th>Acompañantes</th>
                     <th># Faciales</th>
                     <th>Faciales restantes</th>
                     <th>Asesor</th>
                     <th>Citas</th>
                   </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                   </tr>
                  </tbody>
                </table>
                </div>
              </>
            );
          }
        
        

    export default Consultarf;