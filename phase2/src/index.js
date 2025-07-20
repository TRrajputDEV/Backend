import dotenv from 'dotenv';
import { app } from './app.js';
import connect_DB from './db/index.js'

dotenv.config({
    path: './env'
})

connect_DB()
.then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running at port ${process.env.PORT}`)
        })
})
.catch((err)=>{
    console.log("connection with MongoDB failed !!", err);
})
