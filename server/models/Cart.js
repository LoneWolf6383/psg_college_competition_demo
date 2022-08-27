const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {collection:'Cart'}
);

module.exports = mongoose.model("Cart", CartSchema);
