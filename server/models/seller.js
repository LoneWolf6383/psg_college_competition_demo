const mongoose = require('mongoose')

const SellerSchema = new mongoose.Schema(
    {
        sellerId: { type: String, required: true },
        products: [
            {
                productId: {
                type: String,
                },
                price: {
                    type:Number
                },
                quantity: {
                type: Number,
                default: 1,
                },
            },
        ],
        location: {type:Array,required:true}
    },
    { collection:'SellerInfo' }
)
module.exports = mongoose.model('Seller',SellerSchema)