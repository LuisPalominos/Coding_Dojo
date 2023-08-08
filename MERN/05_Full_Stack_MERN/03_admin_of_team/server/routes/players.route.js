// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller
const { getAllPlayers, getOnePlayer, createPlayer, deletePlayer, editPlayer} = require("../controllers/players.controller");

// 2) Exporting Routes
module.exports = (app) => {
    app.get('/players/', getAllPlayers);
    app.get('/players/:id/', getOnePlayer);
    app.post('/players/', createPlayer);
    app.put('/players/:id/', editPlayer);
    app.delete('/players/:id/', deletePlayer);
}