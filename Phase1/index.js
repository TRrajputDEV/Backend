import express from 'express'
import morgan from 'morgan';
import { configDotenv } from 'dotenv';
configDotenv();
const port = process.env.PORT;
const app = express();
app.use(morgan('combined'));
// To parse form data, add this middleware
app.use(express.urlencoded({ extended: true }));
app.listen(port, ()=>{
    console.log(`listning on the port ${port}`)
})
import userrouter from './routes/user.route.js';
import productrouter from './routes/products.route.js'
app.use("/api/v1/user", userrouter)
app.use("/api/v1/product", productrouter)
/*
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls. */