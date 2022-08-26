const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express()
const connection = require('./db')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
dotenv.config();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
connection()
app.use(cors())
app.use(helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy:false
}))
app.use(express.json())
app.use("/api/auth/", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const port = process.env.PORT || 5000
app.listen(process.env.PORT, () => {
    console.log('Server fired up at ',port)
})