const  mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [
        { productId: {
            type: String,  
        },
        quantity: {
            type: Number,
            default:1,
        },
    },
    ],  
}, { timestamp: true }
);
  

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;