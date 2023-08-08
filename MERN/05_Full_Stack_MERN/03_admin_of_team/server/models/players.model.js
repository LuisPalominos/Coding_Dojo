// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const PlayersSchema = new mongoose.Schema(
{
    fullname:{
        type: String,
        required: [true, "please put player full name"],
        minLength: [2, "Authors need normal names"]
    }, 
    position:{
        type: String
    },
    playing:{
        type: String,
        enum: ["playing", "not playing", "undefined"]
    }
}, 
    { timestamps: true}
);

// 3) Creating Model using Schema
const PlayersModel = mongoose.model("Players", PlayersSchema);

// 4) Exporting Model
module.exports = PlayersModel;