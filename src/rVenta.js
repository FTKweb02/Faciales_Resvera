import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Form,
  Row,
  Col,

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
        <button class="menubutton" onClick={() => {
          history.goBack();
        }} type="submit">Menú</button>
      </div>
      <Form method="post">
        <h1 align="center">Registrar Membresía</h1>
        <form>
          <table align="center">
            <tbody>
              <tr>
                <td><label for="idcliente"><b>ID Cliente: </b></label><br></br>
                  <input size="30" type="text" id="idcliente"></input></td>
              </tr>
              <tr>

                <td><label for="folio"><b>Folio: </b></label><br></br>
                  <input size="30" type="text" name="" id="folio"></input></td>
              </tr>
              <tr>
                <td><label for="idasesor"><b>ID Asesor: </b></label><br></br>
                  <input size="30" type="text" id="idasesor"></input></td>
              </tr>
              <tr>
                <td><label for="fechacompra"><b>Fecha Compra: </b></label><br></br>
                  <input type="date" id="fechacompra"></input></td>
              </tr>
              <br></br>
              <Row>
                <Col>
                  <label for="cat">Categoría</label><br></br><input type="text" id="cat"></input>
                </Col>
                <Col>
                  <label for="cant">Cantidad</label><br></br><input type="text" id="cant"></input>
                </Col>
                <Col>
                  <label for="notas">Notas</label><br></br><input type="textarea" id="notas"></input>
                </Col>
              </Row>
                <br></br>
              <tr>
                <td><label for="ticketnova"><b># Ticket: </b></label><br></br>
                  <input size="30" type="text" id="ticketnova"></input></td>
              </tr>
              <tr>
                <td><label for="importep"><b>Importe Total (Ticket): </b></label><br></br>
                  <input size="30" type="text" id="importep"></input></td>
              </tr>
              <tr>
                <td><label for="descuento"><b>Descuento: </b></label></td>
              </tr>
              <tr>
                <td><label for="observaciones"><b>Observaciones: </b></label><br></br>
                  <input size="30" type="text" id="observaciones"></input></td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <div align="center">
            <button class="buttong" type="submit" name="registrar">Registrar</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="buttong" type="submit" name="registraryag">Registrar y Agendar</button>
          </div>
          <br></br>
        </form>
      </Form>
    </>
  );
}

export default Rventa;