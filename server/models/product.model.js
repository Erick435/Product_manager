const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
//must know what are your keys and values to do this step
    Title: {
        type: String,
        required: [true, "Must have a Title"]
    },
    Price: {
        type: Number,
        required: [true, "Must have a price"],
        min: [1, "At LEAST 1 dollar is required"]
    },
    Description: {
        type: String, 
        required: [true, "A description is needed"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;