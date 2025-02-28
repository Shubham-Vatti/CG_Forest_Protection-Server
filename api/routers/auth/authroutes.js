import { Router } from "express";
import {
  RegisterUser,
  LoginUser,
} from "../../controller/auth/authcontroller.js";
const router = Router();

// Auth Routes

router.post("/register", RegisterUser);
router.post("/login", LoginUser);

export default router;
