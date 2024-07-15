const mongoose = require('mongoose');
const Book = require('./Book');
const { Types } = require('mysql2');

const ReviewSchema = new mongoose.Schema({
    book:{
        type:mongoose.ObjectId,
        ref: "book",
        required:true

    },
    customer:{
        type:Number,
        required:true
    },
    rating:{
         type:Number,
         required:true,
         min:1,
         max:5
    },
    Comment:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports= mongoose.model('Review',ReviewSchema);
