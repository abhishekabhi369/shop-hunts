const express=require('express');
const bodyParser = require('body-parser');
const connection = require('./mongo-config/mongo');
const router = require('./Routes/TestRoutes');
const cors=require('cors')
const dotenv=require('dotenv')
const app=express()
const port=4001;
connection()
dotenv.config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/',router)

app.get('/',(req,res)=>
{
    res.send("Welcome")
})
app.listen(port,()=>{
    console.log(`Server is Runing on ${port}`);
})