const mongoose = require('mongoose');

const StartupSchema = new mongoose.Schema({
    startupName: {
        type: String,
        required: [true, "Name Required"],
    },
    emailProfessional: {
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
    
})

module.exports = mongoose.models.Startup || mongoose.model('Startup', StartupSchema);