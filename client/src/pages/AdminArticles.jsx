import React, { useState, useContext, useEffect } from 'react'
import { Navbar, Footer } from '../components'
import { AuthContext } from '../Context/AuthContext'
import axios from 'axios'
import ArticleItems from '../components/ArticleItems'
import Message from "../components/Message"
import '../style/styles.css'
const AdminArticles = props => {
    const [article, setArticle] = useState({ title: "", content: "" })
    const [articles, setArticles] = useState([])
    const [message, setMessage]=useState(null)
    const authContext =useContext(AuthContext)

    useEffect(()=>{
        axios.get('/articles')
        .then(res=>{
            if(res.status!==401){
                console.log(res.data)
                setArticles(res.data)
            }
            else{
                return{message:{msgBody: "UnAuthorized", msgError : true}}
            }
        })
    },[])

    const onSubmit=e=>{
        e.preventDefault()
        axios.post('/admin/articles',article)
        .then(res =>{
            const {message}=res.data
            resetForm()
            if(!message.msgError){
                    setArticles(res.data)
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
        setArticle({...article, [e.target.name] : e.target.value})
        console.log(article)
    }
    const resetForm=()=>{
        setArticle({title:"", content: ""})
    }

    return (
        <div>
            <Navbar/>
                <header className="lessons">
                    <h1>Articole</h1>
                </header>
            <form className="adminForm" style={{paddingTop:"50px"}} onSubmit={onSubmit}>
                <input 
                    className="form-control"
                    type="text" 
                    onChange={onChange}
                    value={article.title} 
                    name="title" 
                    placeholder="Titlul articolului" />
                <br/>
                <textarea
                    rows="7"
                    className="form-control"
                    type="text" 
                    onChange={onChange}
                    value={article.content} 
                    name="content" 
                    placeholder="Continut" />
                <button  className="btn btn-primary" type="submit">Adauga</button>
            </form>
            {message ? <Message message={message} /> : null}
            <ul className="items-ul items" style={{paddingTop:"40px"}}>
            {
                articles.data && articles.data.map(article =>{
                return(
                    <ArticleItems article={article} id={article._id} key={article._id}/>
                )
                
                })
            }
            </ul>
            <Footer />
        </div>
    )
}
export default AdminArticles 