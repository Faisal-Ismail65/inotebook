const mongoose = require('mongoose');
const MONGO_URI = "mongodb://localhost:27017/inotebook";
const connectToMongo= () =>{
    mongoose.connect(MONGO_URI,()=>{
        console.log("connection is succesfull");
    });
} 

module.exports = connectToMongo;

