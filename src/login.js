import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import {
  Table,
  Button,
  Container,
  Navbar,
 
} from "reactstrap";

    function Login() {

  
            return (
        
              <>
                <div>
                  <Navbar className="color-nav" variant="light">
                    <Link to="/">  
                        <input type="image" id="image" alt="Home" src="Logo-FTK-new-blanco.png" width="150px"/>
                    </Link>
                  </Navbar>  
                </div> 
        
                <Container align="center">
                  <br></br>
                  <br></br>
                  <br></br>
                  <div>
                    <h1>Inicia Sesión</h1>
                    <br></br>
                    <input type="text" placeholder="ID" type="id"></input>
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="Contraseña"></input>
                    <br></br>
                    <br></br>
                    <Link to="/ccenter">
                    <button class="buttong" type="submit">Iniciar sesión</button>
                    </Link>
                  </div>
                </Container>
        
        
              </>
            );
          }
        
        

    export default Login;