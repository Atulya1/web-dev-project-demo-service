import express from 'express';
import Connection from './database/db.js'
import dotenv from 'dotenv';
const app = express();
import cors from 'cors';
import bodyParser from "body-parser";

import userData from './routes/route.js';
dotenv.config()
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', userData)

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = 8081;
app.listen(PORT, () => console.log("server is running successfully on port 8081"))

Connection(USERNAME, PASSWORD).then(r => console.log("connection successful"));

