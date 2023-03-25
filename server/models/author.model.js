const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be atleast 2 characters long"],
        maxlength: [50, "Name must be less than 50 characters long"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);