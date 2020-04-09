import React, { useState, useEffect} from 'react'
import { Navbar, Footer } from '../components'
import axios from 'axios'
import ProductItems from '../components/ProductItems'

const Products = props => {
    const [products, setProducts] = useState([])

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

    return (
        <div>
            <Navbar/>
                <header className="lessons">
                    <h1>Produse</h1>
                </header>
            <section id="lessons" className="container">
            <ul className="items-ul items">
            {
                products.data && products.data.map(product =>{
                return <ProductItems product={product} key={product._id}/>
                }
            )}
            </ul>
            </section>
            <Footer />
        </div>
    )
}
export default Products