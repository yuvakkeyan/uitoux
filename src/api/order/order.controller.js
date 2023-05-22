const service = require("./order.service");

const getOrders = async function(req,res){
    try{
        var orders = await service.getOrders(req);
        res.status(200).send(orders);
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
};

const getOrdersById = async function(req,res){
   try{
    var order = await service.getOrdersById(req);
    res.status(200).send(order);
   }catch(err){
    res.status(500).send("Internal Server Error");
   }
};

const saveOrder = async function(req,res){
    try {
        var order = await service.saveOrder(req);
        res.status(200).send("order saved succesfully");
    }catch(err){
    res.status(500).send("Internal Server Error");
}
};

const updateOrder = async function(req,res){
    try{
       var order =  await service.updateOrder(req);
       res.status(200).send("Order details updated successfully")
    }catch(err){
    res.status(500).send("Internal server Error");
}
};

const deleteOrder = async function(req,res){
    try{
        var order =  await service.deleteOrder(req);
        res.status(200).send("Order details deleted successfully")
     }catch (err){
     res.status(500).send("Internal server Error");
 }
 };

const countOrder = async function(req,res){
    try{
        var count =  await service.countOrder(req);
        res.status(200).send({
            count
        });
     }catch(err){
     res.status(500).send("Internal server Error");
 }
 };

module.exports = {
    getOrders,
    getOrdersById,
    saveOrder,
    updateOrder,
    deleteOrder,
    countOrder
};