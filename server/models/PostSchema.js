const mongoose = require("mongoose")
const { Schema } = mongoose;
const User = require("./UserSchema")

const PostSchema = new Schema({
    title: String,
    body: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    created_by: User,
    unique: true
})

module.exports = mongoose.model('Posts', PostSchema);