import { Router } from "express";
import {ping, home} from '../controllers/user.controller.js'
const router = Router();
router.get('/new',ping )
router.get('/home',home )


export default router