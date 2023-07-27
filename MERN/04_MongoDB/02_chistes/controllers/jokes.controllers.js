// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

// 1) Importing Model
const JokesModel = require("../models/jokes.models");

// 2) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
    findAllJokes: (req, res) => {
        JokesModel.find()
        .then((allJokes) => res.json({ Jokes: allJokes }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
    findOneJokeById: (req, res) => {
        JokesModel.findOne({ _id: req.params.id })
        .then((oneSingleJoke) => res.json({ Joke: oneSingleJoke }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
    // 2.2) CREATE METHODS
    createNewJoke: (req, res) => {
        JokesModel.create(req.body)
        .then((newlyCreatedJoke) => res.json({ Joke: newlyCreatedJoke }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
    // 2.3) UPDATE METHODS
    updateExistingJoke: (req, res) => {
        JokesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // { new: true } -> returns updated document instead of original
        .then((updatedJoke) => res.json({ Joke: updatedJoke }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
    // 2.4) DELETE METHODS
    deleteAnExistingJoke: (req, res) => {
        JokesModel.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
};