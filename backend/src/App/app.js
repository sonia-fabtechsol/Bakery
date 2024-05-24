import express from 'express'
import authRouter from '../routers/authRouter.js';
import categoryRouter from '../routers/categoryRouter.js';
import productRouter from '../routers/producRouter.js';
import morgan from 'morgan';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const app=express();

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);



//middleware
app.use(express.json());
app.use(express.static("public"))
app.use(express.static(path.join(__dirname, '../frontend/build')))
app.use(morgan('dev'));
app.use(cors());
app.use(cookieParser());

//routing.......
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/category',categoryRouter);
app.use('/api/v1/product',productRouter);

app.use('*', function(req,res){
    res.sendFile(path.join(--dirname, '../frontend/build/index.html'));

})

export default app