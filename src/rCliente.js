import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";
import './rCliente.css';
import {
  Container,
  Navbar,
  Row,
  Col,

} from "reactstrap";

function Rcliente() {

  const history = useHistory();
  var FormStuff = {

    init: function () {
      // kick it off once, in case the radio is already checked when the page loads
      this.applyConditionalRequired();
      this.bindUIActions();
    },

    bindUIActions: function () {
      // when a radio or checkbox changes value, click or otherwise
      $("input[type='radio']").on("change", this.applyConditionalRequired);
    },

    applyConditionalRequired: function () {
      // find each input that may be hidden or not
      $(".require-if-active").each(function () {
        var el = $(this);
        // find the pairing radio or checkbox
        if ($(el.data("require-pair")).is(":checked")) {
          // if its checked, the field should be required
          el.prop("required", true);
        } else {
          // otherwise it should not
          el.prop("required", false);
        }
      });
    }

  };

  FormStuff.init();
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
      <Container>
        <Row>
          <Col></Col>
          <Col sm={10} align="center"><h1>Registrar Cliente</h1></Col>
          <Col><button class="menubutton" onClick={() => {
            history.goBack();
          }} type="submit">Menú</button></Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <form method="post">
        <Container fluid>
          <Row>
            <Col><input type="radio" name="marca" id="vinevera"></input>&nbsp;<img src="VV_LOGO_Black.png" class="logovv"></img>
              <label for="vinevera"></label>&nbsp;</Col>
            <Col><input type="radio" name="marca" id="orogold"></input>&nbsp;<img src="orogold-dorado@4x.png" class="logoog"></img>
              <label for="orogold"></label>&nbsp;</Col>
            <Col><input type="radio" name="marca" id="reservec"></input>&nbsp;<img src="rc-icon-black@4x.png" class="logos"></img>
              <label for="reservec"></label>&nbsp;</Col>
            <Col><input type="radio" name="marca" id="resvera"></input>&nbsp;<img src="Resvera-logo-degradado-vertical@4x.png" class="logores"></img>
              <label for="resvera"></label>&nbsp;</Col>
            <Col><input type="radio" name="marca" id="umaf"></input>&nbsp;<img src="Logo-UMAF-sin-fondo.png" class="logoumaf"></img>
              <label for="umaf"></label>&nbsp;</Col>
            <Col><input type="radio" name="marca" id="vvxp"></input>&nbsp;<img src="vvxp.png" class="logovvxp"></img>&nbsp;
              <label for="vvxp"></label></Col>
          </Row>
          <br></br>
          <Row>
            <Col align="center">
              <label><b>Sucursal: </b></label>
              <br></br>
              <select>
                <option selected="selected" value=""></option>
                <option value="sucursal1">Sucursal 1</option>
                <option value="sucursal2">Sucursal 2</option>
                <option value="sucursal3">Sucursal 3</option>
              </select>
              <br></br>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col align="center">
              <label><b>Asesor: </b></label>
              <br></br>
              <select>
                <option selected="selected" value=""></option>
                <option value="asesor1">Asesor 1</option>
                <option value="asesor2">Asesor 2</option>
                <option value="asesor3">Asesor 3</option>
              </select></Col>
          </Row>
          <br></br>
          <Row>
            <Col align="center">
              <input type="text" placeholder="Nombre" required></input>
              <br></br>
              <br></br>
              <input type="text" placeholder="Apellidos" required></input>
              <br></br>
              <br></br>
              <label><b>Cumpleaños: </b></label>
              <br></br>
              <input type="date" required></input>
              <br></br>
              <br></br>
              <input type="tel" placeholder="Teléfono 10 digitos" required-pattern="[0-9]{10}"></input>
              <br></br>
              <br></br>
              <input type="email" placeholder="E-mail" required></input>
              <br></br>
              <br></br>
              <input type="text" placeholder="ID Asesor" required></input>
              <br></br>
              <br></br>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="1">
              <button class="buttonis" type="submit" name="registrar">Registrar</button><br></br>
            </Col>
            <Col xs lg="1">
              <button class="buttonis" type="submit" name="regyage">Registrar&nbsp;y&nbsp;Agendar</button>
            </Col>
          </Row>
          <br></br>
        </Container>
      </form>
    </>
  );
}

export default Rcliente;