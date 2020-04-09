
export default {
    getArticles: ()=>{
         return fetch('http://localhost:5000/articles')
            .then((response, error)=>{
                if(response.status !== 401){
                    console.log(response)
                    return response.json().then((data,err) => {console.log(data); return data})
                }
                else{
                    console.log(error)
                    return {message:{msgBody:"Error"}}
                    
                }
            
            })
    },
    postArticle: article=>{
        return fetch('/admin/article',{
            method: 'post',
            body: JSON.stringify(article),
            headers:{
                'Content-type':'application/json'
            }
        }).then(response=>{
            if(response.status !== 401){
                return response.json().then(data => data)
            }
            else
                return {message:{msgBody:"Nu sunteți autorizat!"}}
        })
    }
}
