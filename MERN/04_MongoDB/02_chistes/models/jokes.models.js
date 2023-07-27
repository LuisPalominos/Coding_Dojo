// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const JokesSchema = new mongoose.Schema(
{
    setup:{
        type: String,
        required: [true, "fill this setup"],
        maxLength: [10, "the set up must be 10 or less characters long"]
        
    }, 
    punchline:{
        type: String,
        required: [true, "fill this punchline"],
        minLength: [3, "the punch line must be at least 3 characters long"]
    }
}, 
    { timestamps: true}
);

// 3) Creating Model using Schema
const JokesModel = mongoose.model("Joke", JokesSchema);

// 4) Exporting Model
module.exports = JokesModel;