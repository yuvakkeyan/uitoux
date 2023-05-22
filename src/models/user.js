const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim: true
    },
    status:{
        type: String,
        enum: ["ACTIVE", "INACTIVE"]
    },
    role: {
        type: String,
        enum: ["ADMIN", "VENDOR", "USER"],
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    token: {
        type: String,
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;