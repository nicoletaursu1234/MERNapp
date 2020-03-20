import React, {Component} from 'react'
import {Navbar, Footer} from '../components' 

class Login extends Component{
    render(){
        return(
        <div>
            <Navbar />
            <div class="signup">
              <div class="signup-inside">
                
                <div class="container form sign-up-form">
                    <form id="sign-up-form">
                        <h3>Intră în cont</h3>
                      <div class="form-row">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="E-mail"/>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="col">
                          <input type="password" class="form-control" placeholder="Parola"/>
                        </div>
                      </div>
                    <button type="submit" class="btn btn-secondary">Log in</button><span class="option">sau <a class="link-option" href="/signup">Creează cont nou</a></span>
                  </form>
                  </div>
              </div> 
          </div>
          <Footer/>
        </div>
        )
    }
}
export default Login;