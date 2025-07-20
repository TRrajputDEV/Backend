import express from 'express';
import morgan from 'morgan';

const app  = express();

// Logger - config.
app.use(morgan('combined'));

export {app};