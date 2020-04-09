import React from 'react'
import Links from './Links'
import '../style/styles.css'

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">FitPass</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Links />
        </nav>
    )
}


export default Navbar