import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useHistory } from "react-router-dom";
import {
  Table,
  Container,
  Navbar,
 
} from "reactstrap";

    function Clientescc() {

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
                <Container class="bckgc">
        <br />
        <table>
          <tbody>
            <tr>
              <td width="950px"><h2>Nombre Empleado</h2></td>
              <td><button class="buttong">Nuevo Registro</button></td>
            </tr>
          </tbody>
        </table>
          <br />
          <Table>
            <thead>
              <tr class="tablecolor">
                <th>ID</th>
                <th>Fecha</th>
                <th>Tienda</th>
                <th>Vendedor</th>
                <th>Cliente</th>
                <th>Vendedor&nbsp;Asignado</th>
                <th>Estatus</th>
                <th>Fecha&nbsp;Creacion</th>
                <th>Notas</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody class="tablecolor">
                <tr>
                  <td>1</td>
                  <td>09/09/2021</td>
                  <td>Vine&nbsp;Vera&nbsp;1</td>
                  <td>Vendedor&nbsp;1</td> 
                  <td>Cliente&nbsp;1</td>  
                  <td align="center">Nombre&nbsp;Empleado</td> 
                  <td>Confirmado</td> 
                  <td>09/09/2021</td> 
                  <td>Las notas no deberian de romperse</td> 
                  <td>
                    <input class="buttoneditcolor" type="image" id="image" src="edit.png" width="30px"/>
                  </td>
                  <td>
                    <input class="buttondeletecolor" type="image" id="image" src="delete.png" width="25px"/>
                  </td>
                </tr>
            </tbody>
          </Table>
        </Container>

              </>
            );
          }
        
    export default Clientescc;