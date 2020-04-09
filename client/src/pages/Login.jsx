import React, {useState, useContext} from 'react'
import AuthService from '../Services/AuthService'
import {AuthContext} from '../Context/AuthContext'
import {Navbar, Footer} from '../components' 
import Message from '../components/Message'

const Login=props=>{
      const [user,setUser]=useState({username: "", password: ""})
      const [message, setMessage]=useState(null)
      const authContext=useContext(AuthContext)

      const onChange = e =>{
        e.preventDefault()
        setUser({...user, [e.target.name] : e.target.value})
        console.log(user)
      }
      const onSubmit= e=>{
        e.preventDefault()
        AuthService.login(user).then(data=>{
          const { isAuthenticated, user, message}=data
          if(isAuthenticated){
            authContext.setUser(user)
            authContext.setIsAuthenticated(isAuthenticated)
            props.history.push('/forum')
          }
        else{
          setMessage(message)
          alert('Date eronate')
        }
        })
      }
        return(
        <div>
            <Navbar />
            <div className="signup">
              <div className="signup-inside">
                
                <div className="container form sign-up-form">
                    <form onSubmit={onSubmit} id="sign-up-form">
                      <h3>Intră în cont</h3>
                      <div className="form-row">
                        <div className="col">
                          <input 
                          name="username"
                          onChange={onChange}
                          type="text" 
                          className="form-control" 
                          placeholder="Username"/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col">
                          <input 
                          name="password"
                          onChange={onChange}
                          type="password" 
                          className="form-control" 
                          placeholder="Parola"/>
                        </div>
                      </div>
                    <button 
                    type="submit" 
                    className="btn btn-secondary">Log in</button>
                    <span className="option">sau <a className="link-option" href="/signup"> 
                    Creează cont nou</a></span>
                  </form>
                  {message ? <Message message={message}/> : null} 
                  </div>
              </div> 
          </div>
          <Footer/>
        </div>
        )
    }

export default Login;