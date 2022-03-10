const mongoose = require('mongoose');
module.exports=()=>{
    return mongoose.connect("mongodb+srv://Education:Education@cluster0.8mhay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    }