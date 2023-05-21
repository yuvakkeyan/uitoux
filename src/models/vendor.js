const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    company_name: {
        type: String,
        required: true,
        trim: true
    },
    plan_id:{

    },
    varified_vendor:{

    },
    email_id:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    status:{
        type: String,
        enum: ["COMPLETED", "INCOMPLETED"]
    }
})

const Vendor = mongoose.model("Vendor", VendorSchema);
module.exports = Vendor;