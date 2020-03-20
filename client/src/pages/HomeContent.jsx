import React, { Component } from 'react'
import {Navbar, Footer} from '../components'
import '../style/styles.css'


class MainHeader extends Component{
    render(){
        return(
            <div className="header">
              <div className="container" style={{paddingTop:'20rem'}}>
                <h1>Începe modelarea corpului visurilor tale acum!</h1>
                <h4>Alătură-te comunității persoanelor pasionate de sport</h4>
              </div>
              <div className="headerButtons">
              <button type="button" id="sign-up" className="btn btn-secondary btn-md"><a href="/signup">Cont nou</a></button>
              <button type="button" id="learn-more" className="btn btn-secondary btn-md"><a href="/about">Despre</a></button>
              </div>
            </div>
        )
    }
}
class SecondaryHeaders extends Component{
    render(){
        return(
        <div>
            <div className="header2">
              <div className="header2-inside">
                <h1 id="first-div">Ce oferim</h1>
                <div className="container">
                  <div className="row">
                    <div className="col-sm sv">
                      <h3>Produse sportive și suplimente</h3>
                      <h5>Oferim cele mai bune și calitative suplimente în dependență de nevoile Dvs.</h5>
                    </div>
                    <div className="col-sm sv">
                      <h3>Forum</h3>
                      <h5>Comunică cu persoane pasionate de același lucru și află răspunsuri la întrebările tale!</h5>
                    </div>
                    <div className="col-sm sv">
                      <h3>Informații</h3>
                      <h5>Află lucruri utile și experiențele altor oameni care trec prin aceeași aventură.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header3">
              <div className="header3-inside">
              <h1>Nu ezita!</h1>
              <button type="button" id="start-now"  className="btn btn-secondary btn-lg"><a href="/signup">Modelează-ți corpul perfect!</a></button>
              </div>
            </div>
        </div>
        )
    }
}
class HomeContent extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <MainHeader/>
            <SecondaryHeaders />
            <Footer/>
        </div>
        )
    }
}
export default HomeContent;