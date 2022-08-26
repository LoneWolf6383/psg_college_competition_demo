const mongoose = require('mongoose');
// const mongoUrl='mongodb://127.0.0.1:27017/PSG_iHackFest'
const mongoUrl='mongodb+srv://Namasivaayam007:6383512055@cluster0.zaxrt3p.mongodb.net/?retryWrites=true&w=majority/PSG_iHackFest'

module.exports = () => { 
    try {
        mongoose.connect(mongoUrl, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Connection successfull');
    } catch (error) {
        console.log(error,'failed');
    }
}