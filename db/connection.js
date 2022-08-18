require('dotenv').config();
const mongoose = require('mongoose');
const URL = "mongodb://localhost/events";

mongoose.connect(URL,{
    useUnifiedTopology: true ,
    useNewUrlParser: true
},(err) => {
    if(!err){
        console.log('Mongo DB Connected')
    }else{
        console.log(err)
    }
})