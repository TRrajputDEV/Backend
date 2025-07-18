import express from 'express'
import { configDotenv } from 'dotenv';
configDotenv();
const port = process.env.PORT;
const app = express();

// To parse form data, add this middleware
app.use(express.urlencoded({ extended: true }));
app.listen(port, ()=>{
    console.log(`listning on the port ${port}`)
})
import userrouter from './routes/user.route.js';
import productrouter from './routes/products.route.js'
app.use("/api/v1/user", userrouter)
app.use("/api/v1/product", productrouter)
