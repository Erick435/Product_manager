const ProductController = require("../controllers/product.controller")

module.exports = app => {

    //CREATE ROUTE  (MAKE SURE TO USE POST, NOT GET FOR CREATING )
    app.post("/api/product/create", ProductController.createProduct);

    //READ ALL ROUTE
    app.get("/api/products", ProductController.findAllProducts);
    
    //READ ONE ROUTE
    app.get("/api/product/:_id", ProductController.findProduct);

    //UPDATE ONE ROUTE  (MAKE SURE TO USE PUT FOR UPDATING THINGS)
    app.put("/api/product/update/:_id", ProductController.updateProduct)

    // DELETE ONE ROUTE (MAKE SURE TO USE DELETE TO DELETE THINGS)
    app.delete("/api/product/delete/:_id", ProductController.deleteProduct);

}