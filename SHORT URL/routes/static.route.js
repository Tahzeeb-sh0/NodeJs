import express from "express";

const router = express.Router();

router.get("/signup",async(req,res) =>{
    
     return res.render("signup");

 })

router.get("/login",async(req,res)=>{
    return res.render("login")
});
export default router;
