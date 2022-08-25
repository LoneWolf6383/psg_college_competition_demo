const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express()
const connection = require('./db')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');

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



const port = process.env.PORT || 5000
app.listen(process.env.PORT, () => {
    console.log('Server fired up at ',port)
})