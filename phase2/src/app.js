import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app  = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// Middleware to parse JSON bodies
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
// Logger - config.
app.use(morgan('combined'));
app.use(cookieParser());
//Routes Segregations
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
// Route declaration
app.use('/api/v1/users', userRouter);

export {app};