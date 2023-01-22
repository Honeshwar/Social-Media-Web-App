const mongoose = require('mongoose');//server connect to mongodb ,(odm)

mongoose.connect("mongodb://127.0.0.1/SOCIAL_DEVELOPMENT");

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error while connecting to db'));
db.once('open',function(){
    console.log("db is running fine.......");
})

module.exports = db;