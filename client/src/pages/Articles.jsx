import React, {Component} from 'react'
import {Navbar, Footer} from '../components'

class Articles extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <header className="lessons">
                    <h1>Articole</h1>
                </header>
                <section id="lessons">
                    <div class="container">

                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Articles
