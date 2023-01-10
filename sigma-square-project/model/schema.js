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
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);