import { User } from "../models/user.model.js";

async function handleuserSignup(req,res) {
    
    const {username , email , password} = req.body;

    await User.create({
        username,
        email,
        password,
    })

    return res.render("home")
}

export {handleuserSignup}