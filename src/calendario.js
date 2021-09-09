import React, {useState} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-calendar/dist/Calendar.css';
import { Link, useHistory } from "react-router-dom";
import Calendar from 'react-calendar';
import {
  Table,
  Button,
  Container,
  Navbar,
 
} from "reactstrap";

    function Calendario() {

      const history = useHistory();
      const [value, onChange] = useState(new Date());
  
            return (
        
              <>
                <div>
                  <Navbar className="color-nav" variant="light">
                    <Link to="/">  
                        <input type="image" id="image" alt="Home" src="logomq2.png" width="80px"/>
                    </Link>
                    <Link to="/">
                      <button className="buttonis"><b>Cerrar Sesion</b></button>
                    </Link>
                  </Navbar>  
                </div>
                <br></br>
                <div align="right" class="menubutton">
                  <button onClick={() => {
                    history.goBack();
                }} type="submit">Menú</button>
                </div>
                <br></br>
                <br></br>
                <Container align="center">
                  <h1>Calendario</h1>
                  <br></br>
                  <Calendar>
                  onChange={onChange}
                  value={value}
                  </Calendar>
                </Container>
                
                

                
              </>

              
            );
          }
        
        

    export default Calendario;