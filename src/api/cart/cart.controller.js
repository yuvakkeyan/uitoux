const service = require("./cart.service");

const getCart = async function(req,res){
    try{
        var Cart = await service.getCart(req);
        res.status(200).send(Cart)
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
};

const getCartById = async function(req,res){
   try{
    var cart = await service.getCartById(req);
    res.status(200).send();
   }catch(err){
    res.status(500).send("Internal Server Error");
   }
};

const saveCart = async function(req,res){
    try {
        var cart = await service.saveCart(req);
        res.status(200).send("Cart saved succesfully");
    }catch(err){
    res.status(500).send("Internal Server Error");
}
};

const updateCart = async function(req,res){
    try{
       var cart =  await service.updateCart(req);
       res.status(200).send("Cart details updated successfully")
    }catch(err){
    res.status(500).send("Internal server Error");
}
};

const deleteCart = async function(req,res){
    try{
        var Cart =  await service.deleteCart(req);
        res.status(200).send("Cart details deleted successfully")
     }catch (err){
     res.status(500).send("Internal server Error");
 }
 };

const countCart = async function(req,res){
    try{
        var count =  await service.countCart(req);
        res.status(200).send({
            count
        });
     }catch(err){
     res.status(500).send("Internal server Error");
 }
 };

module.exports = {
    getCart,
    getCartById,
    saveCart,
    updateCart,
    deleteCart,
    countCart
};