import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import $ from 'jquery';
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
   </Switch>
   </BrowserRouter>,
   rootElement
 );