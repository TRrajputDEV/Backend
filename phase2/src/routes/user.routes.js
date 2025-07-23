import Router from 'express';
import {registerUser, loginUser, logoutUser, changeCurrentPassword, getCurrentUser} from '../controllers/user.controller.js'
import {VerifyJWT} from '../middlewares/auth.middleware.js'


const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(VerifyJWT, logoutUser);
router.route('/change-password').post(VerifyJWT, changeCurrentPassword);
router.route('/getCurrentUser').get(VerifyJWT, getCurrentUser);

export default router;