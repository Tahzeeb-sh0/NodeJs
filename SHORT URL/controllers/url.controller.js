import { nanoid } from "nanoid";
import { Url } from "../models/url.model.js";
async function generateShortUrl(req,res) {

    const body = req.body;
 
    if (!body.url.trim()) {
        return res.status(400).json({error:'Url is required'})
    }
    const shortID = nanoid(8);
    Url.create({
        shortId:shortID,
        redirectUrl:body.url,
        visitHistory:[]
    })

    return res.status(201).json({url:shortID})
}


async function redirectToOriginWebsite(req,res) {
        const shortId = req.params.shortId;
        const entry = await Url.findOneAndUpdate({
            shortId
        },{
            $push:{
                visitHistory:{
                    timestamp:Date.now()
                }
            }
        })
       
        
    
         res.redirect(entry.redirectUrl)
    
}

async function showAnalytics(req,res) {
    const shortId = req.params.shortId;
    const result = await Url.findOne({shortId});

    if (!result) {
        return res.status(400).json({massage:"Failed"})
    }

    return res.status(200).json({
        TotalClickCount:result.visitHistory? result.visitHistory.length: 0,
        Analytics: result.visitHistory || []
    })
}

export {generateShortUrl,redirectToOriginWebsite,showAnalytics}