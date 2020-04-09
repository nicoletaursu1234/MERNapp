import React, {useState, useRef, useEffect} from 'react'
import AuthService from '../Services/AuthService'
import {Navbar, Footer} from '../components' 
import Message from '../components/Message'

const Signup=props=>{
      const [user,setUser]=useState({username: "", password: "", role: "user"})
      const [message, setMessage]=useState(null)
      let timerID=useRef(null)

      useEffect(()=>{
        return()=>{
          clearTimeout(timerID)
        }
      },[])

      const onChange = e =>{
        setUser({...user, [e.target.name] : e.target.value})
        console.log(user)
      }
      const resetForm=()=>{
        setUser({username: "", password: ""})
      }

      const onSubmit= e=>{
        e.preventDefault()
        AuthService.register(user).then(data=>{
          const {message}=data
          setMessage(message)
          resetForm()
          if(!message.msgError){
            timerID=setTimeout(()=>{
              props.history.push('/login')
            },2000)
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
                      <h3>Cont nou</h3>
                      <div className="form-row">
                        <div className="col">
                          <input 
                          name="firstName"
                          type="text" 
                          className="form-control" 
                          placeholder="Nume" required/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col">
                          <input
                          name="secondName"
                          type="text" 
                          className="form-control" 
                          placeholder="Prenume" required/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-12">
                          <input 
                          onChange={onChange}
                          name="username"
                          type="text" 
                          value={user.username}
                          className="form-control" 
                          placeholder="Username"/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-12">
                          <input 
                          onChange={onChange}
                          name="password" 
                          type="password" 
                          value={user.password}
                          className="form-control" 
                          placeholder="Parola"/>
                        </div>
                      </div>
                    <button type="submit" className="btn btn-secondary">Creează cont</button><span className="option">sau <a className="link-option" href="/login">Intră în cont</a></span>
                  </form>
                  {message ? <Message message={message}/> : null} 
                  </div>
              </div> 
          </div>
          <Footer/>
        </div>
        )
    }

export default Signup