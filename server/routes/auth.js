const router = require('express').Router()
const {User} = require('../models/userModel')
// const joi = require('joi');
router.post('/', async (req, res) => {
    try {
        console.log(await User.find({}))
        if (await User.findOne({ username: req.body.username })) {
            var user = await User.findOne({ username: req.body.username })
            if (user) {
                if (req.body.password === user.password) {
                    console.log('login success')
                    return res.status(200).send({ message: 'login Successfull' })
                } else {    
                    console.log('Invalid Password')
                    return res.status(500).send('Invalid Password')
                }
            } else {
                console.log('User Not found')
                return res.status(500).send({message:'User Not found'})
            }
         }
        } catch (error) {
            console.log(error);
            return res.send("Internal Server Error")
    }
})
module.exports = router
