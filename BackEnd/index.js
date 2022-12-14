const connectToMongo = require('./connection');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
connectToMongo();
app.use(express.json());
 app.use('/api/auth',require('./routes/auth'));
 app.use('/api/notes',require('./routes/notes'));
app.listen(port,()=>{
    console.log(`example app is listeing on port ${port}`);
});

