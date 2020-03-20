//jshint esversion:6
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const db=require('./db');
const articleRouter=require('./routes/article-router');

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//-----------------------
// app.get('/', (req, res)=>{
//     res.send('Hello World');
// })
//app.use('/', articleRouter);

app.listen(5000, ()=>
    console.log('Server started on port 5000')
);