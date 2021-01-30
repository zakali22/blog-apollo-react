const mongoose = require("mongoose")
const {Schema} = mongoose
const PostSchema = require("./PostSchema").schema

const UserSchema = new Schema({
    name: String,
    username: {
        type: String, 
        unique: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
    },
    posts: [{
        type: Schema.Types.ObjectId, 
        ref: 'Posts'
    }],
    // created_at: {
    //     type: Date,
    //     default: Date.now
    // }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


module.exports = mongoose.model("User", UserSchema)