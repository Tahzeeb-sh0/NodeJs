import { Url } from "../models/url.model.js"
async function handlerPage(req,res){

    const allUrls = await Url.find({})
    res.render("home",{urls:allUrls})
}


export default handlerPage