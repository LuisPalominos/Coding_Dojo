// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

// 1) Importing Model
const AdminProductModel = require("../models/admin.models");

// 2) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
    findAllProducts: (req, res) => {
        AdminProductModel.find()
        .then((allProducts) => res.json({ Products: allProducts }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
    findOneProductById: (req, res) => {
        AdminProductModel.findOne({ _id: req.params.id })
        .then((oneSingleProduct) => res.json({ Product: oneSingleProduct }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
    // 2.2) CREATE METHODS
    createNewProduct: (req, res) => {
        AdminProductModel.create(req.body)
        .then((newlyCreatedProduct) => res.json({ Product: newlyCreatedProduct }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
    // 2.3) UPDATE METHODS
    updateExistingProduct: (req, res) => {
        AdminProductModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // { new: true } -> returns updated document instead of original
        .then((updatedProduct) => res.json({ Product: updatedProduct }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
    // 2.4) DELETE METHODS
    deleteAllProducts: (req, res) => {
        AdminProductModel.deleteMany({})
        .then((result) => res.json({ result: result }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
    deleteAnExistingProduct: (req, res) => {
        AdminProductModel.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
    },
};