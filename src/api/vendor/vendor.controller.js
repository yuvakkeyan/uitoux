const service = require("./vendor.service");

const getVendor = async (req, res)=> {
  try {
    let vendor = await service.getVendor(req);
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
};

const getVendorById = async (req, res) => {
  try {
    let vendor = await service.getVendorById(req);
    res.status(200).send(vendor);
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
};

const saveVendor = async (req, res) => {
  try {
    let vendor = await service.savevendor(req);
    res.status(200).send(vendor);
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
};

const updateVendor = async (req, res) => {
  try {
    let vendor = await service.updateVendor(req);
    res.status(200).send(vendor);
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
};

const deleteVendor = async(req, res) => {
  try {
    let vendor = await service.deleteVendor(req);
    res.status(200).send(vendor);
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
};

module.exports = {
  getVendor,
  getVendorById,
  saveVendor,
  updateVendor,
  deleteVendor,
};
