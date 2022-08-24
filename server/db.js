const mongoose = require('mongoose');
const mongoUrl='mongodb://127.0.0.1:27017/aids_feedback_form_db'

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