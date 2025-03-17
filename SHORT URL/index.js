import express from 'express';
import urlRouter from './routes/url.route.js'
import { connectMongodb } from './dbconnect.db.js';
import path from 'path'
import { Url } from './models/url.model.js';

const app = express();
const PORT = 8000;

connectMongodb("mongodb://127.0.0.1:27017/shortUrl")
console.log("db connected");

app.set("view engine", "ejs")
app.set("views",path.resolve('./views'))
app.get('/html',async(req,res)=>{

    const allUrls = await Url.find({})
    res.render("home",{urls:allUrls})
})
app.use(express.json())
app.use("/url",urlRouter)
app.listen(PORT,()=>{
    console.log(`Server listening on this port: ${PORT}`)
})