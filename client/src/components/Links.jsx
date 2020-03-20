import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
    id: "navbarResponsive"
})``

const List = styled.div.attrs({
    className: 'navbar-nav ml-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    FitPass
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/" className="nav-link">
                                Pagina principala
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/products" className="nav-link">
                                Produse
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/articles" className="nav-link">
                                Articole
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/forum" className="nav-link">
                                Forum
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/contacts" className="nav-link">
                                Contacte
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/login" className="nav-link">
                                Log in
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links