const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required"],
    },
    email: {
        type: String,
        required: [true, "EMail Required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password Required"],
    },
    mobileNo: {
        type: Number,
        required: [true, "Mobile Number Required"],
    },
    stateAdd: {
        type: String,
        required: [true, "Address Required"],
    },
    zipcode: {
        type: String,
        required: [true, "Zip code Required"],
    },
    link : {
        type: String,
        required: [true, "Link Required"],
    },
    web : {
        type: String,
        required: [true, "Web Required"],
    },
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);