// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const JokesSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {
    timestamps: true
});

// 3) Creating Model using Schema
const JokesModel = mongoose.model("Broma", JokesSchema);

// 4) Exporting Model
module.exports = JokesModel;