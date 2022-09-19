const connectToMongo = require('./connection');
const express = require('express');
const app = express();
const port = 3000;
connectToMongo();

app.get('/',(req,res)=>{
    res.send("Hello Wordl!.. this is a express app");
})

app.listen(port,()=>{
    console.log(`example app is listeing on port ${port}`);
});

