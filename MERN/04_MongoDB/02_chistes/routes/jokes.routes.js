// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller
const JokesController = require("../controllers/jokes.controllers");

// 2) Exporting Routes
module.exports = (app) => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/:id", JokesController.findOneJokeById);
    app.post("/api/jokes", JokesController.createNewJoke);
    app.put("/api/jokes/:id", JokesController.updateExistingJoke);
    app.delete("/api/jokes/:id", JokesController.deleteAnExistingJoke);
};