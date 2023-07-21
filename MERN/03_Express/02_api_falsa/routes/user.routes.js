const usuarioController = require('../controllers/user.controller');

module.exports = (app) => {
    app.post("/api/users/new", (req, res) => {
        usuarioController.createUser(req, res, (userData) => {
            res.json(userData);
        });
    });
};