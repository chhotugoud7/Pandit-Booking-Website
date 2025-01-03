import express from "express";
import { addPandit } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";


const adminRouter = express.Router()

adminRouter.post('/addPandit', upload.single('image'), addPandit)

export default adminRouter