import express from 'express';
import { generateShortUrl , showAnalytics, redirectToOriginWebsite} from '../controllers/url.controller.js';
import { Url } from '../models/url.model.js';

const router = express.Router();

router
.post("/",generateShortUrl)
.get('/:shortId',redirectToOriginWebsite)
.get('/analytics/:shortId',showAnalytics)

 
export default router