const service = require("./user.service");

const getUsers = async function(req,res){
    try{
        var users = await service.getusers(req);
        res.status(200).send(users);
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
};

const getUsersById = async function(req,res){
   try{
    var user = await service.getUsersById(req);
    res.status(200).send(user);
   }catch(err){
    res.status(500).send("Internal Server Error");
   }
};

const saveUser = async function(req,res){
    try {
        var user = await service.saveUser(req);
        res.status(200).send("user saved succesfully");
    }catch(err){
    res.status(500).send("Internal Server Error");
}
};

const updateUser = async function(req,res){
    try{
       var user =  await service.updateUser(req);
       res.status(200).send("User details updated successfully")
    }catch(err){
    res.status(500).send("Internal server Error");
}
};

const deleteUser = async function(req,res){
    try{
        var user =  await service.deleteUser(req);
        res.status(200).send("User details deleted successfully")
     }catch (err){
     res.status(500).send("Internal server Error");
 }
 };

const countUser = async function(req,res){
    try{
        var count =  await service.countUser(req);
        res.status(200).send({
            count
        });
     }catch(err){
     res.status(500).send("Internal server Error");
 }
 };

module.exports = {
    getUsers,
    getUsersById,
    saveUser,
    updateUser,
    deleteUser,
    countUser
};