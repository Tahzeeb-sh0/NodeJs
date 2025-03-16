import express from 'express';
import urlRouter from './routes/url.route.js'
import { connectMongodb } from './dbconnect.db.js';

const app = express();
const PORT = 8000;

connectMongodb("mongodb://127.0.0.1:27017/shortUrl")
console.log("db connected")
app.use(express.json())
app.use("/url",urlRouter)
app.listen(PORT,()=>{
    console.log(`Server listening on this port: ${PORT}`)
})