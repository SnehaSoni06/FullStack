import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import DefaultData from './default.js';



const app=express();

dotenv.config(); //to initialise dotenv

app.use(cors());   //can use cors as function
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', Router);

const PORT=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>console.log(`Server is running sucessfully on PORT ${PORT}   `))

DefaultData();