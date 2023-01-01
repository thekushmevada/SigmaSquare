const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required"],
        path: 'name'
    },
    email: {
        type: String,
        required: [true, "EMail Required"],
        unique: true,
        path: 'email'
    },
    password: {
        type: String,
        required: [true, "Password Required"],
        path: 'password'
    },
    confirm_password: {
        type: String,
        required: [true, "Password Required"],
        path: 'confirm_password'
    },
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);