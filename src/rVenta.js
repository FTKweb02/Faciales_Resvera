import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import {
  Table,
  Button,
  Container,
  Navbar,
  Form,

} from "reactstrap";

function Rventa() {

  const history = useHistory();
  return (

    <>
      <div>
        <Navbar className="color-nav" variant="light">
          <Link to="/">
            <input type="image" id="image" alt="Home" src="Logo-FTK-new-blanco.png" width="150px" />
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
      <Form method="post">
      <h1 align="center">Registrar Venta</h1>
      <form>
        <table align="center">
          <tbody>
            <tr>
              <td><label for="folio"><b>Folio: </b></label><br></br>
                    <input size="30" type="text" name=""id="folio"></input></td>
            </tr>
            <tr>
              <td><label for="idcliente"><b>ID Cliente: </b></label><br></br>
                    <input size="30" type="text" id="idcliente"></input></td>
            </tr>
            <tr>
              <td><label for="idasesor"><b>ID Asesor: </b></label><br></br>
                    <input size="30" type="text" id="idasesor"></input></td>
            </tr>
            <tr>
              <td><label for="fechacompra"><b>Fecha Compra: </b></label><br></br>
                    <input type="date" id="fechacompra"></input></td>
            </tr>
            <tr>
              <td><label for="sucursal"><b>Sucursal: </b></label><br></br>
                    <select id="sucursal">
                      <option selected="" value=""></option>
                      <option value="sucursal1">Sucursal 1</option>
                      <option value="sucursal1">Sucursal 2</option>
                      <option value="sucursal1">Sucursal 3</option>
                      <option value="sucursal1">Sucursal 4</option>
                      <option value="sucursal1">Sucursal 5</option>
                      <option value="sucursal1">Sucursal 6</option>
                    </select></td>
            </tr>
            <tr>
              <td><label for="cat"><b>Categoría: </b></label><br></br>
                    <select id="cat">
                      <option selected="" value=""></option>
                      <option value="cat1">Categoría 1</option>
                      <option value="cat2">Categoría 2</option>
                      <option value="cat3">Categoría 3</option>
                      <option value="cat4">Categoría 4</option>
                      <option value="cat5">Categoría 5</option>
                      <option value="cat6">Categoría 6</option>
                    </select></td>
            </tr>
            <tr>
              <td><label for="cantses"><b>Cantidad de sesiones: </b></label><br></br>
                    <input size="30" type="text" id="cantses"></input></td>
            </tr>
            <tr>
              <td><label><b>Acompañantes: </b></label><br></br>
                    <input type="radio" name="acompañante" id="1"></input>&nbsp;
                    <label for="1">1</label>
                    <br></br>
                    <input type="radio" name="acompañante" id="2"></input>&nbsp;
                    <label for="2">2</label>
                    <br></br>
                    <input type="radio" name="acompañante" id="3"></input>&nbsp;
                    <label for="3">3</label>
                    <br></br>
                    <input type="radio" name="acompañante" id="4"></input>&nbsp;
                    <label for="4">4</label>
                    <br></br>
                    <input type="radio" name="acompañante" id="5"></input>&nbsp;
                    <label for="5">5</label>
                    <br></br>
                    <input type="radio" name="acompañante" id="otro"></input>&nbsp;
                    <label for="otro">Otro: <input size="22" type="text"></input></label></td>
            </tr>
            <tr>
              <td><label for="vigencia"><b>Vigencia:</b> </label><br></br>
                    <input type="date" id="vigencia"></input></td>
            </tr>
            <tr>
              <td><label for="ticketnova"><b># Ticket: </b></label><br></br>
                    <input size="30" type="text" id="ticketnova"></input></td>
            </tr>
            <tr>
              <td><label for="importetr"><b>Importe Total (Tratamientos):</b> </label><br></br>
                    <input size="30" type="text" id="importetr"></input></td>
            </tr>
            <tr>
              <td><label><b>Descuento en futuras compras: </b></label><br></br>
                    <input type="radio" name="acompañante" id="10"></input>&nbsp;
                    <label for="10">10% (Paquete hasta $9,999)</label>
                    <br></br>
                    <input type="radio" name="acompañante" id="15"></input>&nbsp;
                    <label for="15">15% (Compra hasta $19,999)</label>
                    <br></br>
                    <input type="radio" name="acompañante" id="20"></input>&nbsp;
                    <label for="20">20% (Compra hasta $29,999)</label></td>
            </tr>
            <tr>
              <td><label for="importep"><b>Importe (Productos): </b></label><br></br>
                    <input size="30" type="text" id="importep"></input></td>
            </tr>
            <tr>
              <td><label for="observaciones"><b>Observaciones: </b></label><br></br>
                    <input size="30" type="text" id="observaciones"></input></td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <div align="center">
        <button class="buttong" type="submit" name="registrar">Registrar Venta</button>
        </div>
        <br></br>
        </form>
      </Form>
    </>
  );
}

export default Rventa;