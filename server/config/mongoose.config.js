const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_manager_project", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log("I FOUND the mongoose!"))
    .catch(err => console.log("I LOST the mongoose!!", err))