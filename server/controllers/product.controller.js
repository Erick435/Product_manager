const Product = require("../models/product.model");

//CREATE
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message: "Error CREATING a new product",
        error: err}))
}

//READ ALL
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "Error FINDING ALL products", 
        error: err}))
}

//READ ONE
module.exports.findProduct = (req, res) => {
    Product.find({_id: req.params._id})
        .then(product => res.json(product))
        .catch(err => res.json({message: "Error FINDING ONE product",
        error: err}))
}

//UPDATE ONE 
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params._id}, req.body)
        .then(update => res.json(update))
        .catch(err => res.json({messasge: "Error UPDATING product", 
        error: err}))
}

//DELETE ONE 
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
        .then(res.json({message: "Item Deleted"}))
        .catch(err => res.json({message: "Error DELETING a product",
        error: err}))
}