import mongoose from "mongoose"

const Todo = new mongoose.Schema({
    title: {
        Type: String,
        required: true,
        
    }
},{timestamps: true})

