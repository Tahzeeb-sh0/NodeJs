import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true,
    
    },
    visitHistory:[{ timestamp:{type:Number}}]
})

export const Url = mongoose.model('Url',urlSchema);