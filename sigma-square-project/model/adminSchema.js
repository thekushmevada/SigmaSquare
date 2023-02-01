const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username Required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password Required"],
    },
})

module.exports = mongoose.models.adminSchema || mongoose.model('adminSchema', AdminSchema);