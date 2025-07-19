import { Router } from "express";
import {ping, home, ejsEnginePage} from '../controllers/user.controller.js'
const router = Router();
import requestTime from '../middleware/logger.middleware.js'
router.use(requestTime)

router.get('/ejs',ejsEnginePage)

router.get('/new',ping )
router.get('/home',home )
.post('/home',home)

export default router