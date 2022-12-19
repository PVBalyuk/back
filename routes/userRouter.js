import { json, Router } from "express";
import { UserController } from "../controllers/userController";
import { registrationValidation, validateAuth } from "../validators/userValidators"
const router = Router();

router.post('/registration', json(), registrationValidation, validateAuth, UserController.registrationHandler);
router.post('/login', UserController.loginHandler);
router.post('/logout', UserController.logoutHandler);  
// router.post('/token', tokenHandler);



export default router 