// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

// 1) Importing Model
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Types;
const PlayersModel = require("../models/players.model");

// 2) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
    getAllPlayers : (req, res) => {
        PlayersModel.find()
            .then((players) => {
                res.json({data: players})
            })
            .catch((error) => {
                res.status(500).json({error: error})
            })
    },
    getOnePlayer : (req, res) => {
        let id = req.params.id
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "id doesn't match the expected format"});
        PlayersModel.findOne({_id: id})
            .then((player) => {
                res.json({data: player})
            })
            .catch((error) => {
                res.status(500).json({error: error})
            })
    },
    // 2.2) CREATE METHODS
    createPlayer : (req, res) => {
        let data = req.body;
        PlayersModel.create(data)
            .then((player) => {
                res.json({data: player})
            })
            .catch((error) => {
                if (error instanceof mongoose.Error.ValidationError){
                    let keys = Object.keys(error.errors);
                    let error_dict = {};
                    keys.map((key) => {
                        error_dict[key] = error.errors[key].message
                    });
                    res.status(500).json({error: error_dict})
                } else {
                    res.status(500).json({error: error})
                }
            })
    },
    // 2.3) UPDATE METHODS
    editPlayer : (req, res) => {
        let id = req.params.id;
        let data = req.body;
        const updateOptions = {
            new: true, // Return the updated document
            runValidators: true, // Enforce validation during update
        };
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "id doesn't match the expected format"});
        PlayersModel.findByIdAndUpdate({_id: id}, data, updateOptions)
            .then(() => {
                res.json({success: true})
            })
            .catch((error) => {
                if (error instanceof mongoose.Error.ValidationError){
                    let keys = Object.keys(error.errors);
                    let error_dict = {};
                    keys.map((key) => {
                        error_dict[key] = error.errors[key].message
                    });
                    res.status(500).json({error: error_dict})
                } else {
                    res.status(500).json({error: error})
                }
            })
    },
    // 2.4) DELETE METHODS
    deletePlayer : (req, res) => {
        let id = req.params.id
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "id doesn't match the expected format"});
        PlayersModel.deleteOne({_id: id})
            .then(() => {
                res.json({success: true})
            })
            .catch((error) => {
                res.status(500).json({error: error})
            })
    },
};