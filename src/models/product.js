const  mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        trim: true
    },
    description:{
        type: String,
        required: true,
    },
    image_url:{
        type: String,
    },
    vendor_id:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status:{
        type: String,
        enum: ["AVAILABLE", "OUT_OF_STOCK"]
    },
    quantity_available:{
        type: Number,
        required: true,

    },
    price:{
        type: Number,
        required: true,
    }
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;