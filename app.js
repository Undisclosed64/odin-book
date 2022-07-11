const express = require('express');
require('dotenv').config();


//Set up mongoose connection
const mongoose = require("mongoose");
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();


const PORT = 3000 || process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


module.exports = app;
