import React, {Component} from 'react'
import {Navbar, Footer} from '../components'

class Contacts extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="form-header">
                    <div className="form-header-inside">
                    <h1>Au apărut întrebări?</h1>
                    <h3>Contactați-ne!</h3>
                    </div> 
                </div>
                <div className="container form">
                <form>
                <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Nume" required/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Prenume" required/>
                </div>
                </div>
                <div className="form-row">
                <div className="col-12">
                  <input type="email" className="form-control" placeholder="E-mail" required/>
                </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comentarii" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-secondary" method="POST">Trimite</button>
                </form>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Contacts