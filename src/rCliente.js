import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import $ from "jquery";
import './rCliente.css';
import {
  Table,
  Button,
  Container,
  Navbar,
 
} from "reactstrap";

    function Rcliente() {

      var FormStuff = {
  
        init: function() {
          // kick it off once, in case the radio is already checked when the page loads
          this.applyConditionalRequired();
          this.bindUIActions();
        },
        
        bindUIActions: function() {
          // when a radio or checkbox changes value, click or otherwise
          $("input[type='radio']").on("change", this.applyConditionalRequired);
        },
        
        applyConditionalRequired: function() {
          // find each input that may be hidden or not
          $(".require-if-active").each(function() {
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
                        <input type="image" id="image" alt="Home" src="logomq2.png" width="80px"/>
                    </Link>
                    <Link to="/">
                      <button className="buttonis"><b>Cerrar Sesion</b></button>
                    </Link>
                  </Navbar>  
                </div> 
                <br></br>
                <div align="right" class="menubutton">
                  <Link to="/ccenter">
                  <button type="submit">Menu</button>
                  </Link>
                </div>
                <br></br>
                <form method="post" action="#">
  
  <div>
    <div>
      <input type="radio" name="marca" id="vinevera"></input>&nbsp;<img src="logomq2.png" class="logos"></img>
      <label for="vinevera">Vine Vera</label>
    
      <div class="reveal-if-active" align="center">
              <table class="require-if-active" data-require-pair="#vinevera">
                    <thead>
                      <tr>
                        <div>
                        <td align="center"><input name="sucursalvv" type="radio"></input>&nbsp;
                        <label><b>Vine Vera 1</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalvv" type="radio"></input>&nbsp;
                        <label><b>Vine Vera 2</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalvv" type="radio"></input>&nbsp;
                        <label><b>Vine Vera 3</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                        <br></br>
                        <div>
                        <td align="center"><input name="sucursalvv" type="radio"></input>&nbsp;
                        <label><b>Vine Vera 4</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalvv" type="radio"></input>&nbsp;
                        <label><b>Vine Vera 5</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalvv" type="radio"></input>&nbsp;
                        <label><b>Vine Vera 6</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                      </tr>
                    </thead>
                  </table>
                  <br></br>
              </div>
    </div>
    
    <div>
      <input type="radio" name="marca" id="orogold"></input>&nbsp;<img src="logomq2.png" class="logos"></img>
      <label for="orogold">Orogold</label>
    
      <div class="reveal-if-active" align="center">
              <table class="require-if-active" data-require-pair="#orogold">
                    <thead>
                      <tr>
                        <div>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Orogold 1</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Orogold 2</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Orogold 3</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                        <br></br>
                        <div>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Orogold 4</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Orogold 5</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Orogold 6</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                      </tr>
                    </thead>
                  </table>
                  <br></br>
              </div>
    </div>

    <div>
      <input type="radio" name="marca" id="reservec"></input>&nbsp;<img src="logomq2.png" class="logos"></img>
      <label for="reservec">Reserve Cut</label>
    
      <div class="reveal-if-active" align="center">
              <table class="require-if-active" data-require-pair="#reservec">
                    <thead>
                      <tr>
                        <div>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Reserve Cut 1</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Reserve Cut 2</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Reserve Cut 3</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                        <br></br>
                        <div>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Reserve Cut 4</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Reserve Cut 5</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Reserve Cut 6</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                      </tr>
                    </thead>
                  </table>
                  <br></br>
              </div>
    </div>

    <div>
      <input type="radio" name="marca" id="resvera"></input>&nbsp;<img src="logomq2.png" class="logos"></img>
      <label for="resvera">Resvera</label>
    
      <div class="reveal-if-active" align="center">
              <table class="require-if-active" data-require-pair="#resvera">
                    <thead>
                      <tr>
                        <div>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Resvera 1</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Resvera 2</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Resvera 3</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                        <br></br>
                        <div>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Resvera 4</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Resvera 5</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Resvera 6</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                      </tr>
                    </thead>
                  </table>
                  <br></br>
              </div>
    </div>
    <div>
      <input type="radio" name="marca" id="umaf"></input>&nbsp;<img src="logomq2.png" class="logos"></img>
      <label for="umaf">Umaf</label>
    
      <div class="reveal-if-active" align="center">
              <table class="require-if-active" data-require-pair="#umaf">
                    <thead>
                      <tr>
                        <div>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Umaf 1</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Umaf 2</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Umaf 3</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                        <br></br>
                        <div>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Umaf 4</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Umaf 5</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Umaf 6</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                      </tr>
                    </thead>
                  </table>
                  <br></br>
              </div>
    </div>
    <div>
      <input type="radio" name="marca" id="vvxp"></input>&nbsp;<img src="logomq2.png" class="logos"></img>
      <label for="vvxp">Vine Vera Experience</label>
    
      <div class="reveal-if-active" align="center">
              <table class="require-if-active" data-require-pair="#vvxp">
                    <thead>
                      <tr>
                        <div>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Vine Vera Experience 1</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Vine Vera Experience 2</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Vine Vera Experience 3</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                        <br></br>
                        <div>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Vine Vera Experience 4</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Vine Vera Experience 5</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        <td align="center"><input name="sucursalog" type="radio"></input>&nbsp;
                        <label><b>Vine Vera Experience 6</b></label>
                        <br></br><img src="logomq2.png"></img></td>
                        </div>
                      </tr>
                    </thead>
                  </table>
                  <br></br>
              </div>
    </div>
  </div>
      
</form>
              </>
            );
          }
        
    export default Rcliente;