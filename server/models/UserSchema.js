const mongoose = require("mongoose")
const {Schema} = mongoose
const PostSchema = require("./PostSchema").schema

const UserSchema = new Schema({
    name: String,
    posts: [{
        type: Schema.Types.ObjectId, 
        ref: 'Posts'
    }],
    created_at: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("User", UserSchema)