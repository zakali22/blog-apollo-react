const mongoose = require("mongoose")
const PostSchema = require("./PostSchema")
const {Schema} = mongoose
const PostSchema = require("./PostSchema")

const UserSchema = new Schema({
    name: String,
    posts: [PostSchema],
    created_at: {
        type: Date,
        default: Date.now
    },
    unique: true
})


module.exports = mongoose.model("User", UserSchema)