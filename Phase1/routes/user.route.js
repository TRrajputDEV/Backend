import { Router } from "express";
import {ping, home} from '../controllers/user.controller.js'
const router = Router();
import requestTime from '../middleware/logger.middleware.js'
router.use(requestTime)

router.get('/new',ping )
router.get('/home',home )
.post('/home',home)

export default router