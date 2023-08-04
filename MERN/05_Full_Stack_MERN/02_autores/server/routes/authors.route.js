// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller
const { getAllAuthors, getOneAuthor, createAuthor, deleteAuthor, editAuthor } = require("../controllers/authors.controller");

// 2) Exporting Routes
module.exports = (app) => {
    app.get('/authors/', getAllAuthors);
    app.get('/authors/:id/', getOneAuthor);
    app.post('/authors/', createAuthor);
    app.delete('/authors/:id/', deleteAuthor);
    app.put('/authors/:id/', editAuthor);
}