import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import panditModel from "../models/panditModel.js"
import jwt from 'jsonwebtoken'


// API for adding pandit
const addPandit = async (req, res) => {

    try{
        const { name, email, password, categories, experience, about, fees, address } = req.body
        // const imageFile = req.File

        // Make sure the file is uploaded correctly
        // if (!req.file) {
        //     return res.json({ success: false, message: "No image uploaded" });
        // }

        // // Get the image file's path
        // const imageFile = req.file.path;

        // You can now access imageFile.path, which will give you the file path of the uploaded image
        // console.log("Uploaded Image Path:", imageFile.path);

        //checking for all data to add pandit
        if(!name || !email || !password || !categories || !experience || !about || !fees || !address ) {
            return res.json({success:false,message:"Missing Details"})

        }

        //validating email format
        if (!validator.isEmail(email)) {
           return res.json({success:false,message:"Please enter a valid email"})                     

        }

        //validating strong password
        if (password.length < 8){
            return res.json({success:false,message:"Please enter a strong Password"})                     
        }


        //hashing pandit password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url


        //pandit data
        const panditData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            categories,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newPandit = new panditModel(panditData)
        await newPandit.save()

        res.json({success:true, message:"Pandit Added"})


    } catch(error) {

        console.log(error)
        res.json({success:false, message:error.message})
    }
}


//API for the admin login
const loginAdmin = async(req, res) => {
    try {

        const {email,password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
           const token = jwt.sign(email+password,process.env.JWT_SECRET)
           res.json({success: true, token})
        } else {
            
            res.json({success: false, message:"Invalid credentials"}) 
        }
        
    } catch (error) {
        
        console.log(error)
        res.json({success:false, message:error.message})
    
    }
}

export {addPandit, loginAdmin}