const mongoose = require('mongoose');
require('dotenv').config();

const connectMongo= async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/",{
        })
        console.log('mongodb has been connected successfully');
 

    }
    catch(err){
        console.err('not able to connect mongodb ',err);
    }
}

module.exports = connectMongo;