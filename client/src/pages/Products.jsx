import React, {Component} from 'react'
import {Navbar, Footer} from '../components'
class Products extends Component{
    render(){
        return(
            <div>
            <Navbar />
            <header className="articles">
                <h1 className="forum">Produse</h1>
            </header>
            <section>
                <div className="container" id="articles"></div>
            </section>
            <Footer />
            </div>
        )
    }
}
export default Products