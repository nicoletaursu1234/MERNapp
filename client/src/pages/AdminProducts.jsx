import React, { useState, useContext, useEffect } from 'react'
import { Navbar, Footer } from '../components'
import { AuthContext } from '../Context/AuthContext'
import axios from 'axios'
import ProductItems from '../components/ProductItems'
import Message from "../components/Message"

const AdminProducts = props => {
    const [product, setProduct] = useState({ name: "", description: "", image: null, price: "" })
    const [products, setProducts] = useState([])
    const [message, setMessage]=useState(null)
    const authContext =useContext(AuthContext)

    useEffect(()=>{
        axios.get('/products')
        .then(res=>{
            if(res.status!==401){
                console.log(res.data)
                setProducts(res.data)
            }
            else{
                return{message:{msgBody: "UnAuthorized", msgError : true}}
            }
        })
    },[])

    const onSubmit=e=>{
        e.preventDefault()
        axios.post('/admin/products',product)
        .then(res =>{
            const {message}=res.data
            resetForm()
            if(!message.msgError){
                    setProduct(res.data)
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
        setProduct({...product, [e.target.name] : e.target.value})
        console.log(product)
      }
    const resetForm=()=>{
        setProduct({name:"", description:"", image:null, price: ""})
    }

    return (
        <div>
            <Navbar/>
                <header className="lessons">
                    <h1>Produse</h1>
                </header>
                <section id="lessons">
            <form className="adminForm" onSubmit={onSubmit}>
                <input 
                    className="form-control"
                    type="text" 
                    onChange={onChange}
                    value={product.name} 
                    name="name" 
                    placeholder="Denumirea produsului" />
                <input 
                    className="form-control"
                    type="text" 
                    onChange={onChange}
                    value={product.description} 
                    name="description" 
                    placeholder="Descriere" />
                <input 
                    className="form-control"
                    type="number" 
                    onChange={onChange}
                    value={product.price} 
                    name="price" 
                    placeholder="Pretul" />
               
                <button  className="btn btn-primary" type="submit">Adauga</button>
            </form>
            {message ? <Message message={message} /> : null}
            <ul className="items-ul items" style={{paddingTop:"40px"}}>
            {
                products.data && products.data.map(product =>{
                return <ProductItems product={product} id={product._id} key={product._id}/>
                }
            )}
            </ul>
            </section>
            <Footer />
        </div>
    )
}
export default AdminProducts