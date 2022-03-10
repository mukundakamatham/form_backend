const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    email: {type: String, required: true},

    Gender: {type: String, required: true},
    dob: {type: String, required: true},
    experience: {type: String, required: true},
    fitness_level: {type: String, required: true},
    experience_level: {type: String, required: false},
    Comments: {type:String , required: true},
})

module.exports = mongoose.model("product", productSchema); // products