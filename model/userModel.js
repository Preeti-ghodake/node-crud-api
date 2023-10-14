const mongoose = require('mongoose')

// db schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model("User", UserSchema)