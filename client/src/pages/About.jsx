import React, {Component} from 'react'
import {Navbar, Footer} from '../components'
import png from '../img/gym.png'

class About extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <header>
                    <h1>Despre noi</h1>
                </header>
                <section>
                <div className="container" style={{paddingTop:"100px"}}>
                <h2>Despre FitPass</h2>
                <article>
                    Suntem o comunitate de persoane pasionate de sport care doresc să ofere posibilitatea
                    de a învăța lucruri noi despre un mod sănătos de viață.
                </article>
                <p>În caz de neclarități, nu ezitați să ne <a href="/contacts">contactați!</a></p>
                <img id="about" src={png} alt="sport"/>
                </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default About