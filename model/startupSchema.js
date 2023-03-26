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
        type: String,
        required: [true, "Mobile Number Required"],
    },
    stateAdd: {
        type: String,
        required: [true, "State Required"],
    },
    zipcode: {
        type: String,
        required: [true, "Mobile Number Required"],
    },
    descripition: {
        type: String,
        required: [true, "Description Required"],
    },
    industry: {
        type: String,
        required: [true, "Industry Required"],
    },
    about: {
        type: String,
        required: [true, "About Company Required"],
    },
    link: {
        type: String,
        required: [true, "Link Required"],
    },
    web: {
        type: String,
        required: [true, "Website Link Required"],
    },
    founder: {
        type: String,
        required: [true, "Founder Required"],
    },
})

module.exports = mongoose.models.startupSchema || mongoose.model('startupSchema', StartupSchema);