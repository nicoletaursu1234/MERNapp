import axios from "axios"

export default {
    getProducts: ()=>{
        return axios.get('/products')
        .then(res=>{
            if(res.status !== 401){
                return res.json().then(data => data)
            }
            else    
                return {message : {msgBody: "UnAuthorized", msgError : true}}
        })
    },
    postProduct: product=>{
        return axios.post('/products',{
            method: "post",
            body: JSON.stringify(product),
            headers:{
                'Content-type': 'application/json'
            }
        }).then(res=>{
            if(res.status !== 401){
                return res.json().then(data => data)
            }
            else    
                return {message : {msgBody: "UnAuthorized", msgError : true}}
        })
    }
}