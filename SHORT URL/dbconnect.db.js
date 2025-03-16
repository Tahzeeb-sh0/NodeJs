import mongoose from "mongoose";

async function connectMongodb(url) {
    return await mongoose.connect(url);
}


export{connectMongodb}