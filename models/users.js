//mongoose use to create structure(schema),model and store ,tell db its model schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //less important last(decreasing order) write
   email: {
            type:String,
            required:true,
            unique:true
    },
   password: {
            type:String,
            required:true,
           
       },
    name: {
            type:String,
            required:true,
           
    }

},{timestamps:true});

const Users = mongoose.model('Users',userSchema);

module.exports = Users;//model = collection(say obj inside store n no. of obj)