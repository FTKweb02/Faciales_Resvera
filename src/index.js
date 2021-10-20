import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login.js";
import Ccenter from "./ventas/ccenter.js";
import Calendario from "./calendario.js";
import Rcliente from "./ventas/rCliente.js";
import Rventa from "./rVenta.js";
import Consultarf from "./ventas/consultarF.js";
import Agendarc from "./agendarC.js";
import Consultarc from "./ventas/consultarC.js"
import Historial from "./ventas/historial.js";
import Contactc from "./contactc/contactc.js"
import Clientescc from "./contactc/clientescc.js";
import Pendientes from "./contactc/pendientes.js";
import Facialista from "./facialista/facialista.js";
import Citfac from "./facialista/citfac.js";
import Config from "./admin/config.js";
import Citafac from "./facialista/citafac.js";


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
      <Route path="/citafac" component={Citafac} />
    </Switch>
  </BrowserRouter>,
  rootElement
);



  