import express from 'express';
import handlerPage from '../controllers/page.controller.js';

const router = express.Router();

router
.get('/',handlerPage)
export default router