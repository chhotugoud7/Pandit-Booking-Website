import mongoose from "mongoose";

const panditSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique: true},
    password: {type:String, required:true},
    Image: {type:String, required:true},
    categories: {type:String, required:true},
    experience: {type:String, required:true},
    about: {type:String, required:true},
    available: {type:Boolean, required:true},
    fees: {type:Number, required:true},
    address: {type:Object, required:true},
    date: {type:Number, required:true},
    slots_booked: {type:Object, default:{}},

},{minimize:false})

const panditModel = mongoose.models.pandit || mongoose.model('pandit',panditSchema)

export default doctorModel