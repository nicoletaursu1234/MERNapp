import React, {Component} from 'react'
import {Navbar, Footer} from '../components'

class Signup extends Component{
    render(){
        return(
        <div>
            <Navbar />
            
            <div className="signup">
              <div className="signup-inside">
                
                <div className="container form sign-up-form">
                    <form id="sign-up-form">
                        <h3>Cont nou</h3>
                      <div className="form-row">
                        <div className="col">
                          <input type="text" className="form-control" placeholder="Nume" required/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col">
                          <input type="text" className="form-control" placeholder="Prenume" required/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-12">
                          <input type="email" className="form-control" placeholder="E-mail" required/>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="col-12">
                          <input type="password" className="form-control" placeholder="Parola"/>
                        </div>
                      </div>
                    <button type="submit" className="btn btn-secondary">Creează cont</button><span class="option">sau <a class="link-option" href="/login">Intră în cont</a></span>
                  </form>
                  </div>
              </div> 
          </div>
          <Footer/>
        </div>
        )
    }
}
export default Signup