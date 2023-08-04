// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const AuthorsSchema = new mongoose.Schema(
{
    fullname:{
        type: String,
        required: [true, "please put author full name"],
        minLength: [3, "Authors need normal names"]
    }, 
    quote:{
        type: String,
        required: [true, "please put you'r favorite quote of this author"],
        minLength: [3, "Authors need normal quotes"]
    }
}, 
    { timestamps: true}
);

// 3) Creating Model using Schema
const AuthorsModel = mongoose.model("Authors", AuthorsSchema);

// 4) Exporting Model
module.exports = AuthorsModel;