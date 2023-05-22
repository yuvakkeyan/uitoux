const User = require("../../models/user");
const bcrypt = require('bcrypt');

const getUser = function(req){
    try{
        return User.find(req.query);
    }catch(err){
        return err;
    }
}

const getUserById = function(req){
    try{
        return User.findById(req.params.id);
    }catch(err){
        return err;
    }
}

const saveUser = async function(req){
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        var user = new User(req.body);
        return user.save();
    }catch(err){
        return err;
    }
}

const updateUser = function(req){
    try{
        return User.findByIdAndUpdate(req.params.id, res.body);
    }catch(err){
        return err;
    }
}

const deleteUser = function(req){
    try{
        return User.findByIdAndDelete(req.params.id);
    }catch(err){
        return err;
    }
}

module.exports = {
    getUser,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
}