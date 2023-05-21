const service = require("./admin.service");

const getAdmin = async (req, res)=> {
  try {
    let admin = await service.getAdmin(req);
    res.status(200).send(admin);
  }catch(err) {
    res.status(500).send("Internal server Error");
  }
};

const getAdminById = async (req, res) => {
  try {
    let admin = await service.getAdminById(req);
    res.status(200).send(admin);
  }catch(err) {
    res.status(500).send("Internal server Error");
  }
};

const saveAdmin = async (req, res) => {
  try {
    let admin = await service.saveAdmin(req);
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
};

const updateAdmin = async (req, res) => {
  try {
    let admin = await service.updateAdmin(req);
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
};

const deleteAdmin = async(req, res) => {
  try {
    let admin = await service.deleteAdmin(req);
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
};

module.exports = {
  getAdmin,
  getAdminById,
  saveAdmin,
  updateAdmin,
  deleteAdmin,
};
