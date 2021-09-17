import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login.js";
import Ccenter from "./ccenter.js";
import Calendario from "./calendario.js";
import Rcliente from "./rCliente.js";
import Rventa from "./rVenta.js";
import Consultarf from "./consultarF.js";
import Agendarc from "./agendarC.js";
import Consultarc from "./consultarC.js"
import Historial from "./historial.js";
import Contactc from "./contactc.js"
import Clientescc from "./clientescc.js";
import Pendientes from "./pendientes.js";
import Facialista from "./facialista.js";
import Citfac from "./citfac.js";
import Config from "./config.js";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/ccenter" component={Ccenter} />
      <Route path="/calendario" component={Calendario} />
      <Route path="/rcliente" component={Rcliente} />
      <Route path="/rventa" component={Rventa} />
      <Route path="/consultarf" component={Consultarf} />
      <Route path="/agendarc" component={Agendarc} />
      <Route path="/consultarc" component={Consultarc} />
      <Route path="/historial" component={Historial} />
      <Route path="/contactc" component={Contactc} />
      <Route path="/clientescc" component={Clientescc} />
      <Route path="/pendientes" component={Pendientes} />
      <Route path="/facialista" component={Facialista} />
      <Route path="/citfac" component={Citfac} />
      <Route path="/config" component={Config} />
    </Switch>
  </BrowserRouter>,
  rootElement
);