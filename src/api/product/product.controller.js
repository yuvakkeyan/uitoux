const service = require("./product.service");

const getProducts = async function(req,res){
    try{
        var Product = await service.getProducts(req);
        res.status(200).send(Product)
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
};

const getProductById = async function(req,res){
   try{
    var product = await service.getProductById(req);
    res.status(200).send();
   }catch(err){
    res.status(500).send("Internal Server Error");
   }
};

const saveProduct = async function(req,res){
    try {
        console.log("--------req.body.data", req.body.data);
        await service.saveProduct(req);
        res.status(200).send("Product saved succesfully");
    }catch(err){
        console.log(err);
    res.status(500).send("Internal Server Error");
}
};

const updateProduct = async function(req,res){
    try{
       var Product =  await service.updateProduct(req);
       res.status(200).send("Product details updated successfully")
    }catch(err){
    res.status(500).send("Internal server Error");
}
};

const deleteProduct = async function(req,res){
    try{
        var Product =  await service.deleteProduct(req);
        res.status(200).send("Product details deleted successfully")
     }catch (err){
     res.status(500).send("Internal server Error");
 }
 };

const countProduct = async function(req,res){
    try{
        var count =  await service.countProduct(req);
        res.status(200).send({
            count
        });
     }catch(err){
     res.status(500).send("Internal server Error");
 }
 };

module.exports = {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct,
    countProduct
};