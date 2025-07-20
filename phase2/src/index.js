import dotenv from 'dotenv';
import { app } from './app.js';

dotenv.config({
        path: './env'
    })


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
})