import express from "express";
import { handleuserSignup } from "../controllers/user.controller";

const router = express.Router();

router.post("/", handleuserSignup);
export default router;
