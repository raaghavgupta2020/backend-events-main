require('dotenv').config();
const mongoose = require('mongoose');
const URL = "mongodb+srv://admin:admin123@cluster0.6leob20.mongodb.net/motorq?retryWrites=true&w=majority";

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