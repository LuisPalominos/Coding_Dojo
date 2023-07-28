// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller
const AdminProduct = require("../controllers/admin.controllers");

// 2) Exporting Routes
module.exports = (app) => {
    app.get("/api/products", AdminProduct.findAllProducts);
    app.get("/api/products/:id", AdminProduct.findOneProductById);
    app.post("/api/products", AdminProduct.createNewProduct);
    app.put("/api/products/:id", AdminProduct.updateExistingProduct);
    app.delete("/api/products", AdminProduct.deleteAllProducts);
    app.delete("/api/products/:id", AdminProduct.deleteAnExistingProduct);
};