import express from 'express';
import morgan from 'morgan';

const app  = express();

// Logger - config.
app.use(morgan('combined'));

//Routes Segregations
import userRouter from './routes/user.routes.js'
// Route declaration
app.use('/api/v1/users', userRouter);

export {app};