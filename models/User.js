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
    },
    email : {
        type:String,
        require: true
    },
    password: {
        type:String,
        trim: true,
        default : 'fksljafdsdf'
    },
    bookmarkedQuestions: {
        type : [Number],
        default : []
    },
    rank : {
        type:Number,
        default: 0
    },
    score : {
        type : Number,
        default : 0
    },
    solvedQuestion : {
        type : [Number],
        default : []
    },
    partiallySolvedQuestion : {
        type : [Number],
        default : []
    },
    attemptedQuestions : {
        type : [Number],
        default : []
    }

}, {
    timestamps:true
    }
)

mongoose.model('users', userSchema)