import express from "express";
import cors from 'cors'
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 5000
import dbConnect from "./config/dbConnect.js"
import userRoute from "./routes/userRoutes.js"; 


dbConnect();

const app = express()

app.use(express.json()) 
app.use(express.urlencoded({extended:true}))

// app.use(
//     cors({
//     })
// )    

app.use('/user',userRoute)

app.listen(port,()=>{
    console.log('connected to server');
})