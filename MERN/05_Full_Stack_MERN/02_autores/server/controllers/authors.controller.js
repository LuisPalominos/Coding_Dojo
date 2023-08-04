// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

// 1) Importing Model
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Types;
const AuthorsModel = require("../models/authors.model");

// 2) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
    getAllAuthors : (req, res) => {
        AuthorsModel.find()
            .then((authors) => {
                res.json({data: authors})
            })
            .catch((error) => {
                res.status(500).json({error: error})
            })
    },
    getOneAuthor : (req, res) => {
        let id = req.params.id
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "id doesn't match the expected format"});
        AuthorsModel.find({_id: id})
            .then((authors) => {
                res.json({data: authors})
            })
            .catch((error) => {
                res.status(500).json({error: error})
            })
    },
    // 2.2) CREATE METHODS
    createAuthor : (req, res) => {
        let data = req.body;
        AuthorsModel.create(data)
            .then((author) => {
                res.json({data: author})
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
    editAuthor : (req, res) => {
        let id = req.params.id;
        let data = req.body;
        const updateOptions = {
            new: true, // Return the updated document
            runValidators: true, // Enforce validation during update
        };
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "id doesn't match the expected format"});
        AuthorsModel.findByIdAndUpdate({_id: id}, data, updateOptions)
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
    deleteAuthor : (req, res) => {
        let id = req.params.id
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "id doesn't match the expected format"});
        AuthorsModel.deleteOne({_id: id})
            .then(() => {
                res.json({success: true})
            })
            .catch((error) => {
                res.status(500).json({error: error})
            })
    },
};