const service = require('./address.service');

const getAddress = async function(req,res){
    try{
        var address = await service.getaddress(req);
        res.status(200).send(address);
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
};

const getAddressById = async function(req,res){
   try{
    var address = await service.getAddressById(req);
    res.status(200).send(address);
   }catch(err){
    res.status(500).send("Internal Server Error");
   }
};

const saveAddress = async function(req,res){
    try {
        var address = await service.saveAddress(req);
        res.status(200).send("Address saved succesfully");
    }catch(err){
    res.status(500).send("Internal Server Error");
}
};

const updateAddress = async function(req,res){
    try{
       var address =  await service.updateAddress(req);
       res.status(200).send("Address details updated successfully")
    }catch(err){
    res.status(500).send("Internal server Error");
}
};

const deleteAddress = async function(req,res){
    try{
        var address =  await service.deleteAddress(req);
        res.status(200).send("Address details deleted successfully")
     }catch (err){
     res.status(500).send("Internal server Error");
 }
 };

const countAddress = async function(req,res){
    try{
        var count =  await service.countAddress(req);
        res.status(200).send({
            count
        });
     }catch(err){
     res.status(500).send("Internal server Error");
 }
 };

module.exports = {
    getAddress,
    getAddressById,
    saveAddress,
    updateAddress,
    deleteAddress,
    countAddress
};