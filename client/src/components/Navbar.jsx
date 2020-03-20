import React, { Component } from 'react'
import styled from 'styled-components'

import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top',
})``
const NavStyle={
    backgroundColor:'hsla(220, 15%, 30%, 0.5)',
    paddingTop: '20px',
    paddingBottom:'20px'
}
class Toggle extends Component{
    render(){return(
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    )}
}
class Navbar extends Component {
    render() {
        return (
            <Container>
                <Nav style={NavStyle}>
                    <Links />
                    <Toggle />
                </Nav>
            </Container>
        )
    }
}

export default Navbar