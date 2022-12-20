const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxLength: [40, 'Password cannot be more than 40 characters']
    },
    confirm_password: {
        type: String,
        required: true,
        maxLength: [40, 'Password cannot be more than 40 characters']
    },
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);