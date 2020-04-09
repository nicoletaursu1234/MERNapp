import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import AuthService from '../Services/AuthService'


const Links = props => {
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext)

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user)
                setIsAuthenticated(false)
            }
        })
    }
    const unauthenticatedNavbar = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">Pagina principala</li>
                </Link>
                <Link to="/products">
                    <li className="nav-item nav-link">Produse</li>
                </Link>
                <Link to="/articles">
                    <li className="nav-item nav-link">Articole</li>
                </Link>
                <Link to="/login">
                    <li className="nav-item nav-link">Forum</li>
                </Link>
                <Link to="/contacts">
                    <li className="nav-item nav-link">Contacte</li>
                </Link>
                <Link to="/login">
                    <li className="nav-item nav-link">Login</li>
                </Link>
            </>
        )
    }
    const authenticatedNavbar = () => {
        return (
            <>

                {
                    user.role === "admin"
                        ?
                        <Link to="/admin/panel">
                            <li className="nav-item nav-link">Admin Panel</li>
                        </Link>
                        :<>
                        <Link to="/products">
                            <li className="nav-item nav-link">Produse</li>
                        </Link>
                        <Link to="/articles">
                            <li className="nav-item nav-link">Articole</li>
                        </Link>
                        <Link to="/forum">
                            <li className="nav-item nav-link">Forum</li>
                        </Link>
                        <Link to="/contacts">
                            <li className="nav-item nav-link">Contacte</li>
                        </Link>
                        <Link to="/forum">
                            <li className="nav-item nav-link">{user.username}</li>
                        </Link>
                        </>
                }
                <Link to="#">
                    <li className="nav-item nav-link" onClick={onClickLogoutHandler}>Signout</li>
                </Link>
            </>
        )
    }
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
            </ul>
        </div>

    )
}

export default Links