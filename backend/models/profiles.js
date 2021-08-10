const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    },
    badge: {
        type: String,
        required: false
    },
    cvr: {
        type: String,
        required: false,
    },
    addedOn: {
        type: Date,
        required: true,
        default: Date.now
    },
})

module.exports = mongoose.model("Profile", ProfileSchema)
