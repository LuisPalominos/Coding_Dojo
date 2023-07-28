// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const AdminProductSchema = new mongoose.Schema(
{
    title:{
        type: String,
        required: [true, "fill this title"],
    }, 
    price:{
        type: Number,
        required: [true, "fill the price"],
    },
    description:{
        type: String,
        required: [true, "fill this description"],
    }
}, 
    { timestamps: true}
);

// 3) Creating Model using Schema
const AdminProductModel = mongoose.model("AdminProduct", AdminProductSchema);

// 4) Exporting Model
module.exports = AdminProductModel;