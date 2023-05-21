const Admin = require("../../models/admin");

const getAdmin = function(req){
    try{
        return Admin.find(req.query);
    }catch(err){
        return err;
    }
}

const getAdminById = function(req){
    try{
        return Admin.findById(req.params.id);
    }catch(err){
        return err;
    }
}

const saveAdmin = function(req){
    try {
        var Admin = new Admin(req.body);
        return Admin.save();
    }catch(err){
        return err;
    }
}

const updateAdmin = function(req){
    try{
        return Admin.findByIdAndUpdate(req.params.id, res.body);
    }catch(err){
        return err;
    }
}

const deleteAdmin = function(req){
    try{
        return Admin.findByIdAndDelete(req.params.id);
    }catch(err){
        return err;
    }
}

module.exports = {
    getAdmin,
    getAdminById,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}