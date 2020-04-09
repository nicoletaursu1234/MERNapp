//jshint esversion:6
require('dotenv').config()
const express=require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser')
const cors=require('cors');
const app=express();
const path=require('path')


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())


const db=require('./db');
const articleController=require('./controllers/article-controller');
const userController=require('./controllers/user-controller');
const postController=require('./controllers/post-controller');
const commentController=require('./controllers/comment-controller');
const productController=require('./controllers/product-controller');
const mailController=require('./controllers/mail-controller')

db.on('error', console.error.bind(console, 'MongoDB connection error'))
////////////////////////////////////
//article routes
app.get('/articles',articleController.get)
app.post('/admin/articles',articleController.post)
app.post('/admin/articles/delete',articleController.delete)

//Product controller
app.get('/products', productController.get)
app.post('/admin/products', productController.post)
app.post('/admin/products/delete',productController.delete)

//Forum
app.post('/forum/comments',commentController.post)
app.post('/forum',postController.post)
app.post('/forum/delete', postController.delete)
app.get('/forum', postController.get)
//Contact form
app.post('/contacts', mailController.post)
//User routes
app.use('/users',userController)


////////////////////////////////////
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(process.env.PWD, 'client', 'build')))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(process.env.PWD, 'client' ,'build', 'index.html'))
    })
}
const port=process.env.PORT || 5000
app.listen(port, ()=>
    console.log('Server started on port ' +port)
);