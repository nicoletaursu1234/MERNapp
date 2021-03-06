import React, { useState, useContext, useEffect } from 'react'
import { Navbar, Footer } from '../components'
import { AuthContext } from '../Context/AuthContext'
import axios from 'axios'
import ForumItems from '../components/ForumItems'
import Message from "../components/Message"

const Forum = props => {
    const [post, setPost] = useState({ title: "", text: "", comments: [], _creator: "" })
    const [posts, setPosts] = useState([])
    const [message, setMessage]=useState(null)
    const authContext=useContext(AuthContext)

    useEffect(()=>{
        axios.get('/forum')
        .then(res=>{
            if(res.status!==401){
                console.log(res.data)
                setPosts(res.data)
            }
            else{
                return{message:{msgBody: "UnAuthorized", msgError : true}}
            }
        })
    },[])

    const onSubmit=e=>{
        e.preventDefault()
        axios.post('/forum',post)
        .then(res =>{
            const {message}=res.data
            resetForm()
            if(!message.msgError){
                    setPosts(res.data)
                    setMessage(message)
                }
            
            else if(message.msgBody==="UnAuthorized"){
                setMessage(message)
                authContext.setUser({username:"", role: ""})
                authContext.setIsAuthenticated(false)
            }
            else{
                setMessage(message)
            }
        })
    }
    const onChange = e =>{
        setPost({...post, [e.target.name] : e.target.value})
        console.log(post)
      }
    const resetForm=()=>{
        setPost({title:"", text: ""})
    }

    return (
        <div>
            <Navbar/>
                <header className="lessons">
                    <h1>Forum</h1>
                </header>
                <section id="lessons" className="container">
            <form className="forumItem" onSubmit={onSubmit}>
                <h3>Adauga o postare</h3>
                <input 
                    className="form-control"
                    type="text" 
                    onChange={onChange}
                    value={post.title} 
                    name="title" 
                    placeholder="Tema postarii" />
                <br/>
                <textarea rows="4"
                    className="form-control"
                    type="text" 
                    onChange={onChange}
                    value={post.text} 
                    name="text" 
                    placeholder="Text" />
                <button  className="btn btn-primary" type="submit">Adauga</button>
            </form>
            {message ? <Message message={message} /> : null}
            <ul>
            {
                posts.data && posts.data.map(post =>{
                return <ForumItems id={post._id} creator={post._creator} post={post} data={posts.data} comments={post._comments} key={post._id}/>
                }
            )}
            </ul>
            </section>
            <Footer />
        </div>
    )
}
export default Forum