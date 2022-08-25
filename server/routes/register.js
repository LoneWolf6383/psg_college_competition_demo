const router = require('express').Router()
const {User} = require('../models/userModel')
router.post('/', async(req,res) => {
    try {
        if (await User.findOne({ userName: req.body.userName}))
    } catch (error) {
        
    }
})