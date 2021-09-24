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
                  <Navbar className="color-nav" variant="light" >
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
                <Container class="bckgc" fluid>
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
              <tr class="table_border">
                <th>ID</th>
                <th>Fecha Cita</th>
                <th>Tienda</th>
                <th>Sucursal</th>
                <th>Cliente</th>
                <th>Teléfono</th>
                <th>Tratamiento</th>
                <th>Cabina</th>
                <th>Estatus</th>
                <th>Asesor</th>
                <th>Fecha&nbsp;Creación</th>
                <th>Atiende</th>
                <th>Notas</th>
              </tr>
            </thead>

            <tbody class="table_border">
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td> 
                  <td></td>  
                  <td></td> 
                  <td>
                    <select>
                      <option disabled value selected="selected" value="">Tratamiento</option>
                    </select>
                  </td> 
                  <td></td> 
                  <td>
                    <select>
                      <option disabled value selected="selected" value=""></option>
                      <option value="pend">Pendiente</option>
                      <option value="confirm">Confirmado</option>
                      <option value="cancel">Cancelado</option>
                      <option value="reag">Reagendado</option>
                      <option value="noasist">No Asistio</option>
                      <option value="noconfirm">No Confirmo</option>
                      <option value="asistsc">Asistio s/compra</option>
                      <option value="asistcc">Asistio c/compra</option>
                    </select>
                  </td> 
                  <td></td>
                  <td></td>
                  <td>
                  <select>
                      <option disabled value selected="selected" value="">Atiende</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
            </tbody>
          </Table>
        </Container>

              </>
            );
          }
        
    export default Clientescc;