const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required : true,
        trim : true
    },
    googleId:String,
    avatar: {
        type : String
    }
})

mongoose.model('users', userSchema)