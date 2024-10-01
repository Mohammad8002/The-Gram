import express from "express";
 import isAuthenticated from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";
import { getMessage, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.route('/send/:id').post(isAuthenticated, sendMessage);
router.route('/all/:id').get(isAuthenticated, getMessage);
 
export default router;