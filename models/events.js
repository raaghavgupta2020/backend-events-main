const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    eventname: {
        type: String,
        trim: true,
    },
    /*eventdate: {
        type: String,
        trim: true,
    },
    eventtime: {
        type: String,
        trim: true,
    },*/
    eventlocation: {
        type: String,
        trim: true,
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
});

module.exports = mongoose.model("Events", userSchema);
