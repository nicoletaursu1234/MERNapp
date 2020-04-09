import React, {useState, useEffect} from 'react'
import {Navbar, Footer} from '../components'
import axios from 'axios'
const Articles=props=>{
    const [articles, setArticles]=useState([])
    
    useEffect(()=>{
        axios
        .get('/articles')
        .then((response, error)=>{
            if(response.status !== 401){
                console.log(response)
                setArticles(response.data)
            }
            else{
                console.log(error)
                return {message:{msgBody:"Error"}}
                
            }

    
    })
},[])

    return(
        <div>
        <Navbar/>
            <header className="lessons">
                <h1>Articole</h1>
            </header>
            <section id="lessons" className="container">
            <ul className="items-ul items">
                {
                     articles.data && articles.data.map(article => (
                        
                        <li key={article._id} article={article}>
                        <h1>{article.title}</h1>
                        <article>{article.content}</article>
                        </li> 
                    
                    ))
                }
            </ul>
            </section>
        <Footer />
        </div>
    )
}

export default Articles
