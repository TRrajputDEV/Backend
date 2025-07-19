import express from 'express'
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { configDotenv } from 'dotenv';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
configDotenv();
const port = process.env.PORT;


const app = express();


app.use(morgan('combined'));
// To parse form data, add this middleware
app.use(express.urlencoded({ extended: true }));

// tell express where your template lives.
app.set('views', path.join(__dirname, 'views'));

// setting ejs as view engine.
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, ()=>{
    console.log(`listning on the port ${port}`)
})


import userrouter from './routes/user.route.js';
import productrouter from './routes/products.route.js'

app.use("/api/v1/user", userrouter)
app.use("/api/v1/product", productrouter)



/*
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls. */