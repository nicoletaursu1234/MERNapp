import React, {Component} from 'react'
import {Navbar, Footer} from '../components'

class Forum extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <header className="lessons">
                    <h1>Forum</h1>
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
export default Forum