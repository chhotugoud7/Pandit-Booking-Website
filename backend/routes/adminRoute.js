import express from "express";
import { addPandit, loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";


const adminRouter = express.Router()

adminRouter.post('/add-pandit',authAdmin,upload.single('image'), addPandit)

adminRouter.post('/login', loginAdmin)


export default adminRouter