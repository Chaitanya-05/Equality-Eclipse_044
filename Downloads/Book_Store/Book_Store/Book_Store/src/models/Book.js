const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    description:String,
    publishDate :Date
});
module.exports = mongoose.model('Book',BookSchema);