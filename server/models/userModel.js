const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true},
        lastName: { type: String, required: true},
        userName: { type: String, required: true, unique: true },
        password: { type: String, required: true, },
        email: { type: String, required: true, unique: true },
        phNo:{type:String,required:true,unique:true},
        userRole: { type: String, required: true }
    },
    { collection: 'userInfo' }
)
mongo
const User = mongoose.model('User', userSchema)

module.exports = { User } 