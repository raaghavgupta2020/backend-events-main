const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        minlength:8,
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
    }],
})

module.exports = mongoose.model('User',userSchema)