import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,

} from "reactstrap";

function Agendarc() {

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
      <br></br>
      <div align="center">
        <iframe src="https://agendapro.com/iframe/overview/dFhydEVSUEtqcDYxK2Y2aTFIVXlFZz09LS1JcnFkVWlFbFBudlVpUml4Mi9pWllnPT0=--551e7dc01b0129de908ed04d800772b734b82ddc" height="500" width="100%" marginwidth="0" marginheight="0" frameborder="no" scrolling="yes" class="frameap"></iframe>
      </div>
    </>
  );
}



export default Agendarc;