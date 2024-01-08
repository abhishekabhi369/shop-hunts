const express=require('express');
const bodyParser = require('body-parser')
// const router = require('./Router/TestRouter');
// const connection = require('./Controller/Mongo');
const app=express()
const port=4001;
// connection()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// app.use('/',router)
app.use(express.json())
app.get('/',(req,res)=>
{
    res.send("Welcome")
})
app.listen(port,()=>{
    console.log(`Server is Runing on ${port}`);
})