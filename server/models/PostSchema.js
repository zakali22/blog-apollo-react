const mongoose = require("mongoose")
const { Schema } = mongoose;
const UserSchema = require("./UserSchema").schema

const PostSchema = new Schema({
    title: String,
    body: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
})

module.exports = mongoose.model('Posts', PostSchema);