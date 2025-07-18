import { Router } from "express";
const router = Router();
// import {getCars} from '../controllers/product.controller.js'
import CustomURLPath from "../middleware/route.middleware.js";
router.use(CustomURLPath);

export default router;