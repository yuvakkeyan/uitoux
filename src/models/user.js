const  mongoose = require("mongoose")

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
    email:{
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
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;