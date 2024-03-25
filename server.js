import express from "express";
import cors from 'cors'
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT 
import dbConnect from "./config/dbConnect.js"
import userRoute from "./routes/userRoutes.js"; 


dbConnect();

const app = express()

app.use(express.json()) 
app.use(express.urlencoded({extended:true}))

app.use(
    cors({
        origin:'http://localhost:5000',
        methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials:true
    })
)  

app.use('/',userRoute)

app.listen(port,()=>{
    console.log('connected to server');
})