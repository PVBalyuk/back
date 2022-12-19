import express, { json } from "express";
import cors from "cors";
import { set, connect, disconnect } from "mongoose";
import router from './routes/index';
import * as dotenv from 'dotenv'
import cookieParser from "cookie-parser";

const jsonParser = json();
set('strictQuery', true);
const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api', jsonParser, router)


const start = async () => {
    try { 
        await connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('db connected');
        console.log(PORT);

        app.listen(PORT, () => console.log(`server started on ${PORT} port`))

    } catch (e) {
        console.log(e);
    } 
}

start();