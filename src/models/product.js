const  mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        trim: true
    },
    description:{
        type: Number,
        required: true,
    },
    vendor_id:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "vendor"
    },
    status:{
        type: String,
        enum: ["COMPLETED", "INCOMPLETED"]
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